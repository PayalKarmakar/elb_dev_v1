import { StatusCodes } from "http-status-codes";
import pool from "../../db.js";
import { verifyJWT } from "../../utils/tokenUtils.js";
import { getUserId } from "../../utils/functions.js";
import slug from "slug";
import dayjs from "dayjs";

export const addPost = async (req, res) => {
  const { category, subCategory, title, description, price } = req.body;
  const { token } = req.cookies;
  const { uuid } = verifyJWT(token);
  const uid = await getUserId(uuid);
  const subCat = subCategory ? +subCategory : null;
  const desc = description || null;
  const postSlug = slug(title);
  const timeStamp = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");

  try {
    await pool.query(`BEGIN`);

    const master = await pool.query(
      `insert into master_posts(user_id, title, cat_id, subcat_id, description, price, slug, created_at, updated_at) values($1, $2, $3, $4, $5, $6, $7, $8, $9) returning id`,
      [
        uid,
        title.trim(),
        +category,
        subCat,
        desc,
        +price,
        postSlug,
        timeStamp,
        timeStamp,
      ]
    );

    const postId = master.rows[0].id;

    const formFields = await pool.query(
      `select id, field_name, field_type from master_form_fields where cat_id=$1`,
      [+subCategory]
    );

    for (const field of formFields.rows) {
      const value = req.body[field.field_name];

      const dbData =
        field.field_type === "radio" || field.field_type === "dropdown"
          ? +value
          : null;
      const entryData =
        field.field_type === "text" ||
        field.field_type === "textarea" ||
        field.field_type === "number"
          ? value
          : null;

      await pool.query(
        `insert into details_posts(post_id, attr_id, attr_db_value, attr_entry) values($1, $2, $3, $4)`,
        [postId, +field.id, dbData, entryData]
      );
    }

    await pool.query(`COMMIT`);

    res.status(StatusCodes.CREATED).json({ data: `success` });
  } catch (error) {
    console.log(error);
    await pool.query(`ROLLBACK`);
  }

  res.status(StatusCodes.OK).json({ data: `ok` });
};

export const allPosts = async (req, res) => {
  res.status(StatusCodes.OK).json({ data: `ok` });
};
