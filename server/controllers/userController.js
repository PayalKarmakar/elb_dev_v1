import { StatusCodes } from "http-status-codes";
import pool from "../db.js";
import { generateSlug, paginationLogic } from "../utils/functions.js";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";
import { hashPassword } from "../utils/passwordUtils.js";

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
  const { uuid, id } = req.params;
  console.log(req.body);
  console.log(req.file);

  // const { firstName, lastName, gender, email, mobile, address, pin, po, dist, state, country, bio} = req.body;
  // const updatedAt = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  // const newSlug = await generateSlug(firstName.trim(), lastName.trim());

  // const postDirectory = path.join("public", "uploads", "users", `${id}`);
  // await fs.mkdir(postDirectory, { recursive: true });
  // const validMimeTypes = [
  //   "image/jpeg",
  //   "image/png",
  //   "image/jpg",
  //   "image/gif",
  //   "image/webp",
  // ];
  // try {
  //   await pool.query(`BEGIN`);

  //   if (result.rows[0].uuid) {

  //   }
  //     if (req.file && req.file.length > 0) {
  //       // Ensure file.buffer is valid
  //       if (!req.file.buffer) {
  //         console.log("File buffer is missing");
  //       } else {
  //         const type = await fileTypeFromBuffer(req.file.buffer);

  //         if (type && validMimeTypes.includes(type.mime)) {
  //           // Define the file path
  //           const filename = Date.now() + path.extname(req.file.originalname);
  //           const destinationPath = path.join(postDirectory, filename);
  //           console.log("Saving file to:", destinationPath);

  //           // Save file to disk
  //           await fs.writeFile(destinationPath, file.buffer);

  //           const imgPath = path.join("uploads", "users", `${id}`, filename);
  //           let is_cover = false;
  //           if (file.originalname === cover) is_cover = true;

  //           const userUpdate = await pool.query(
  //             `update master_users set first_name=$1, last_name=$2, email=$3, mobile=$4, updated_at=$5, slug=$6, profile_img=$7 where id=$8 and uuid=$9 returning *`,
  //             [
  //               firstName.trim(),
  //               lastName.trim(),
  //               email,
  //               mobile,
  //               updatedAt,
  //               newSlug,
  //               imgPath,
  //               id,
  //               uuid,
  //             ]
  //           );

  //           const query = `select * from elb_profile where uuid=$1`;
  //           const userDetails = await pool.query(query, [uuid]);
  //           if(userDetails.data?.rows){
  //             let profileUpdate = await pool.query(
  //               `update elb_profile set first_name=$1, last_name=$2, email=$3, mobile=$4, updated_at=$5, slug=$6, profile_img=$7 where id=$8 and uuid=$9 returning *`,
  //               [
  //                 firstName.trim(),
  //                 lastName.trim(),
  //                 email,
  //                 mobile,
  //                 updatedAt,
  //                 newSlug,
  //                 imgPath,
  //                 userDetails.data.rows.id,
  //                 uuid,
  //               ]
  //             );
  //           }else{
  //             let profileUpdate = await pool.query(
  //               `insert into elb_profile set uid=$1, uuid=$2, gender=$3, bio=$4, pincode=$5, country_id=$6, country=$7,
  //               state=$8, district=$9, locality=$10, address=$11 returning *`,
  //               [
  //                 firstName.trim(),
  //                 lastName.trim(),
  //                 email,
  //                 mobile,
  //                 updatedAt,
  //                 newSlug,
  //                 imgPath,
  //                 userDetails.data.rows.id,
  //                 uuid,
  //               ]
  //             );
  //           }

  //         } else {
  //         }
  //       }

  //       await pool.query(`COMMIT`);

  //       res.status(StatusCodes.CREATED).json({ data: `success` });
  //     } else {
  //       console.log(`file not uploaded!!`);
  //     }
  // } catch (error) {
  //   console.log(error);
  //   await pool.query(`ROLLBACK`);
  //   res
  //     .status(StatusCodes.BAD_REQUEST)
  //     .json({ data: `something went wrong!!` });
  // }
};
