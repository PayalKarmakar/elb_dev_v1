import { StatusCodes } from "http-status-codes";
import pool from "../../db.js";
import { verifyJWT } from "../../utils/tokenUtils.js";
import { generateOtherSlug, getUserId } from "../../utils/functions.js";
import dayjs from "dayjs";

export const addPost = async (req, res) => {
  const { category, subCategory, title, description, price } = req.body;
  const { token } = req.cookies;
  const { uuid } = verifyJWT(token);
  const uid = await getUserId(uuid);
  const subCat = subCategory ? +subCategory : null;
  const desc = description || null;
  const postSlug = await generateOtherSlug("master_posts", title);
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
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ data: `something went wrong!!` });
  }
};

export const allPosts = async (req, res) => {
  const data = await pool.query(
    `select pm.*,
    json_agg(
      json_build_object(
        'attr_id', pd.attr_id,
        'attr_name', ff.field_label,
        'attr_db_value', pd.attr_db_value,
        'attr_value', ffo.option_value,
        'attr_entry', pd.attr_entry
      )
    ) AS attr,
    json_build_object(
      'user_id', um.id,
      'first_name', um.first_name,
      'last_name', um.last_name
    ) AS user,
    cat.category, scat.category as scat
    from master_posts pm
    left join details_posts pd on pm.id = pd.post_id
    left join master_users um on pm.user_id = um.id
    left join master_categories cat on pm.cat_id = cat.id
    left join master_categories scat on pm.subcat_id = scat.id
    left join master_form_fields ff on ff.id = pd.attr_id
    left join master_form_field_options ffo on pd.attr_db_value = ffo.id
    group by pm.id, um.id, cat.category, scat.category`
  );

  res.status(StatusCodes.OK).json({ data });
};

export const updatePost = async (req, res) => {
  const { category, subCategory, title, description, price } = req.body;
  const { id } = req.params;
  const { token } = req.cookies;
  const { uuid } = verifyJWT(token);
  const uid = await getUserId(uuid);
  const subCat = subCategory ? +subCategory : null;
  const desc = description || null;
  const postSlug = await generateOtherSlug("master_posts", title);
  const timeStamp = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");

  try {
    await pool.query(`BEGIN`);

    const master = await pool.query(
      `update master_posts set title=$1, cat_id=$2, subcat_id=$3, description=$4, price=$5, slug=$6, updated_at=$7 where id=$8`,
      [title.trim(), +category, subCat, desc, +price, postSlug, timeStamp, +id]
    );

    await pool.query(`delete from details_posts where post_id=$1`, [+id]);

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
        [+id, +field.id, dbData, entryData]
      );
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

export const getFeaturedPosts = async (req, res) => {
  const data = await pool.query(
    `select post.*,img.image_path,img.is_cover
      from  master_posts post 
      left join image_posts img on post.id = img.post_id
      where feature_product=true order by post.title`,
    []
  );

  res.status(StatusCodes.OK).json({ data });
}; // Jyoti

export const getRecentPosts = async (req, res) => {}; // Jyoti

export const getPostDetails = async (req, res) => {

  const query = `SELECT * from master_posts where id=${req.params.id}`;
 
  

  try {
    await pool.query(`BEGIN`);
    const details = await pool.query(query);
    res.status(StatusCodes.ACCEPTED).json({ data: details });
    await pool.query(`COMMIT`);

} catch (error) {
  await pool.query(`ROLLBACK`);
}
}

