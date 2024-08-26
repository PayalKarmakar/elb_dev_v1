import { StatusCodes } from "http-status-codes";
import pool from "../db.js";
import { generateSlug, paginationLogic } from "../utils/functions.js";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../utils/passwordUtils.js";
import fs from "fs/promises";
import path from "path";
import { fileTypeFromBuffer } from "file-type";

// ------
export const allUsers = async (req, res) => {
  const { page, search, role } = req.query;
  const pagination = paginationLogic(page, null);

  const searchStr = search
    ? ` and (master_users.first_name ilike %${search.trim()}% or master_users.last_name ilike '%${search.trim()}%' or master_users.email ilike '%${search.trim()}%' or master_users.mobile ilike '%${search.trim()}%')`
    : ``;
  const searchDrp = role ? ` and master_users.role_id=${role}` : ``;

  const data = await pool.query(
    `select master_users.*, role_master.role from master_users join role_master on master_users.role_id = role_master.id where master_users.id is not null ${searchStr} ${searchDrp} order by role_master.role, master_users.first_name offset $1 limit $2`,
    [pagination.offset, pagination.pageLimit]
  );

  const records = await pool.query(
    `select master_users.* from master_users join role_master on master_users.role_id = role_master.id where master_users.id is not null ${searchStr} ${searchDrp}`,
    []
  );
  const totalPages = Math.ceil(records.rowCount / pagination.pageLimit);
  const meta = {
    totalPages: totalPages,
    currentPage: pagination.pageNo,
    totalRecords: records.rowCount,
  };

  res.status(StatusCodes.OK).json({ data, meta });
};

// ------
export const getUser = async (req, res) => {
  const { uuid } = req.params;

  const user = await pool.query(`select * from master_users where uuid=$1`, [
    uuid,
  ]);

  res.status(StatusCodes.OK).json({ data: user });
};

// ------
export const addNewUser = async (req, res) => {
  const { firstName, lastName, email, mobile, roleId } = req.body;
  const createdAt = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  const updatedAt = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  const userUuid = uuidv4();
  const userPass = await hashPassword(`welcome123`);
  const userSlug = await generateSlug(firstName.trim(), lastName.trim());

  const data = await pool.query(
    `insert into master_users(first_name, last_name, email, mobile, password, created_at, updated_at, uuid, slug, role_id) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) returning *`,
    [
      firstName.trim(),
      lastName.trim(),
      email,
      mobile,
      userPass,
      createdAt,
      updatedAt,
      userUuid,
      userSlug,
      roleId,
    ]
  );

  res.status(StatusCodes.CREATED).json({ data });
};

// ------
export const updateUser = async (req, res) => {
  const { userId } = req.params;
  const { firstName, lastName, email, mobile, roleId } = req.body;
  const updatedAt = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  const newSlug = await generateSlug(firstName.trim(), lastName.trim());

  const data = await pool.query(
    `update master_users set first_name=$1, last_name=$2, email=$3, mobile=$4, role_id=$5, updated_at=$7, slug=$8 where id=$6 returning *`,
    [
      firstName.trim(),
      lastName.trim(),
      email,
      mobile,
      roleId,
      userId,
      updatedAt,
      newSlug,
    ]
  );

  res.status(StatusCodes.ACCEPTED).json({ data });
};

// ------
export const deactivateUser = async (req, res) => {
  const { userId } = req.params;
  const deletedAt = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");

  const data = await pool.query(
    `update master_users set is_active=false, deleted_at=$1 where id=$2`,
    [deletedAt, userId]
  );

  res.status(StatusCodes.NO_CONTENT).json({ data: `success` });
};

// ------
export const activateUser = async (req, res) => {
  const { userId } = req.params;
  const updatedAt = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");

  const data = await pool.query(
    `update master_users set is_active=true, updated_at=$1, deleted_at=null where id=$2`,
    [updatedAt, userId]
  );

  res.status(StatusCodes.OK).json({ data: `success` });
};

export const getUserProfile = async (req, res) => {
  const { uuid } = req.params;

  const query = `select * from elb_profile where uuid=$1`;
  try {
    const userDetails = await pool.query(query, [uuid]);

    res.status(StatusCodes.ACCEPTED).json({ data: userDetails });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ data: "Failed" });
  }
};

export const updateProfileUser = async (req, res) => {
  console.log(123);
  const { uuid, id } = req.params;
  console.log(req.body);
  const {
    fname,
    lname,
    gender,
    email,
    mobile,
    address,
    pin,
    po,
    dist,
    state,
    country,
    bio,
  } = req.body;
  const updatedAt = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  const newSlug = await generateSlug(fname.trim(), lname.trim());

  try {
    await pool.query(`BEGIN`);

    const postDirectory = path.join("public", "uploads", "users", `${id}`);
    await fs.mkdir(postDirectory, { recursive: true });
    const validMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif",
      "image/webp",
    ];

    if (req.file) {
      // Ensure file.buffer is valid
      if (!req.file.buffer) {
        console.log("File buffer is missing");
      } else {
        const type = await fileTypeFromBuffer(req.file.buffer);

        if (type && validMimeTypes.includes(type.mime)) {
          const filename = Date.now() + path.extname(req.file.originalname);
          const destinationPath = path.join(postDirectory, filename);
          console.log("Saving file to:", destinationPath);

          await fs.writeFile(destinationPath, req.file.buffer);

          const imgPath = path.join("uploads", "users", `${id}`, filename);

          const userUpdate = await pool.query(
            `UPDATE master_users
             SET first_name=$1, last_name=$2, email=$3, mobile=$4, updated_at=$5, slug=$6, profile_img=$7
             WHERE id=$8 AND uuid=$9
             RETURNING *`,
            [
              fname.trim(),
              lname.trim(),
              email,
              mobile,
              updatedAt,
              newSlug,
              imgPath,
              id,
              uuid,
            ]
          );

          const query = `SELECT * FROM elb_profile WHERE uuid=$1`;
          const userDetails = await pool.query(query, [uuid]);

          if (userDetails?.rows.length > 0) {
            await pool.query(
              `UPDATE elb_profile
               SET uid=$1, uuid=$2, gender=$3, bio=$4, pincode=$5, country_id=$6,
                   state=$7, district=$8, locality=$9, address=$10, updated_at=$11
               WHERE id=$12 AND uuid=$13
               RETURNING *`,
              [
                id,
                uuid,
                gender,
                bio,
                pin,
                country,
                state,
                dist,
                po,
                address,
                updatedAt,
                userDetails.rows[0].id,
                uuid,
              ]
            );
          } else {
            await pool.query(
              `INSERT INTO elb_profile
               (uid, uuid, gender, bio, pincode, country_id, state, district, locality, address)
               VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
               RETURNING id`,
              [id, uuid, gender, bio, pin, country, state, dist, po, address]
            );
          }
        } else {
          console.log("Invalid file type");
        }
      }
    }

    await pool.query(`COMMIT`);
    res.status(StatusCodes.CREATED).json({ data: `success` });
  } catch (error) {
    console.log(error);
    await pool.query(`ROLLBACK`);
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ data: `something went wrong!!` });
  }
};
