import fs from "fs/promises";
import path from "path";
import { StatusCodes } from "http-status-codes";
import pool from "../../db.js";
import { verifyJWT } from "../../utils/tokenUtils.js";
import { generateOtherSlug, getUserId } from "../../utils/functions.js";
import dayjs from "dayjs";
import { fileTypeFromBuffer } from "file-type";

export const addPost = async (req, res) => {
  const obj = { ...req.body };
  const { category, subCategory, userCity, title, description, price, cover } =
    obj;

  const { token } = req.cookies;
  const { uuid } = verifyJWT(token);
  const uid = await getUserId(uuid);
  const subCat = subCategory ? subCategory : null;
  const desc = description || null;
  const postSlug = await generateOtherSlug("master_posts", title);
  const timeStamp = dayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");

  try {
    await pool.query(`BEGIN`);

    const master = await pool.query(
      `INSERT INTO master_posts(user_id, title, cat_id, subcat_id, description, price, slug, created_at, updated_at, location_id)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING id`,
      [
        uid,
        title.trim(),
        category,
        subCat,
        desc,
        price,
        postSlug,
        timeStamp,
        timeStamp,
        userCity,
      ]
    );

    const postId = master.rows[0].id;

    const formFields = await pool.query(
      `SELECT id, field_name, field_type FROM master_form_fields WHERE cat_id=$1`,
      [subCategory]
    );

    for (const field of formFields.rows) {
      const value = obj[field.field_name];

      const dbData =
        field.field_type === "radio" || field.field_type === "dropdown"
          ? value
          : null;
      const entryData =
        field.field_type === "text" ||
        field.field_type === "textarea" ||
        field.field_type === "number"
          ? value
          : null;

      await pool.query(
        `INSERT INTO details_posts(post_id, attr_id, attr_db_value, attr_entry)
        VALUES($1, $2, $3, $4)`,
        [postId, +field.id, dbData, entryData]
      );
    }
    const postDirectory = path.join("public", "uploads", "posts", `${postId}`);
    await fs.mkdir(postDirectory, { recursive: true });
    const validMimeTypes = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/gif",
    ];
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        // Ensure file.buffer is valid
        if (!file.buffer) {
          console.log("File buffer is missing");
          continue;
        }

        const type = await fileTypeFromBuffer(file.buffer);

        if (type && validMimeTypes.includes(type.mime)) {
          // Define the file path
          const filename = Date.now() + path.extname(file.originalname);
          const destinationPath = path.join(postDirectory, filename);
          console.log("Saving file to:", destinationPath);

          // Save file to disk
          await fs.writeFile(destinationPath, file.buffer);

          const imgPath = path.join("uploads", "posts", `${postId}`, filename);
          let is_cover = false;
          if (file.originalname === cover) is_cover = true;

          await pool.query(
            `INSERT INTO image_posts(post_id, image_path, is_cover)
          VALUES($1, $2, $3)`,
            [+postId, imgPath, is_cover]
          );
        } else {
        }
      }
      await pool.query(`COMMIT`);

      res.status(StatusCodes.CREATED).json({ data: `success` });
    } else {
      console.log(`file not uploaded!!`);
    }

    // await pool.query(`COMMIT`);

    // res.status(StatusCodes.CREATED).json({ data: `success` });
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

// ------
export const getAllPostsMin = async (req, res) => {
  const { page, search } = req.query;
  const { cat, subcat } = req.params;

  const catid = await pool.query(
    `select id from master_categories where slug=$1 and parent_id is null`,
    [cat]
  );
  let subcatId;
  if (subcat) {
    subcatId = await pool.query(
      `select id from master_categories where slug=$1 and parent_id=$2`,
      [subcat, catid.rows[0].id]
    );
  }

  const subCatFilter = subcat
    ? ` where pm.cat_id=$1 and pm.subcat_id=$2`
    : ` where pm.cat_id=$1`;
  const vals = subcat
    ? [catid.rows[0].id, subcatId.rows[0].id]
    : [catid.rows[0].id];

  const data = await pool.query(
    `select 
      pm.id, pm.title, pm.cat_id, pm.subcat_id, pm.description, pm.price, pm.slug,
      um.first_name AS seller_first_name,
      um.last_name AS seller_last_name,
      COALESCE(
        json_agg(
          json_build_object(
            'image_url', pi.image_path
          )
        ) filter (where pi.id is not null), '[]'
      ) as images
      from master_posts pm
      inner join master_users um on pm.user_id = um.id
      left join image_posts pi on pi.post_id = pm.id ${subCatFilter}
      group by pm.id, um.first_name, um.last_name`,
    vals
  );

  res.status(StatusCodes.OK).json({ data });
};

// ------
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
  try {
    const data = await pool.query(
      `select post.*,img.image_path,img.is_cover
      from  master_posts post 
      left join image_posts img on post.id = img.post_id and img.is_cover=true
      where is_feature=true and post.is_active=true order by post.title`,
      []
    );

    res.status(StatusCodes.OK).json({ data });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ data: "Failed" });
  }
}; // Jyoti

export const getRecentPosts = async (req, res) => {
  try {
    const data = await pool.query(
      `select post.*,img.image_path,img.is_cover
      from  master_posts post 
      left join image_posts img on post.id = img.post_id and img.is_cover=true
      where post.is_active=true order by post.created_at desc limit 5`,
      []
    );

    res.status(StatusCodes.OK).json({ data });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ data: "Failed" });
  }
}; // Jyoti

export const getPostDetails = async (req, res) => {
  const query = `select post.*,
    json_agg(
      json_build_object(
        'image_path', img.image_path,
        'is_cover', img.is_cover
      )
    ) AS image
    from master_posts post
    left join image_posts img on post.id = img.post_id 
    where post.id=${req.params.id} group by post.id`;

  try {
    await pool.query(`BEGIN`);
    const details = await pool.query(query, []);
    res.status(StatusCodes.ACCEPTED).json({ data: details });
    await pool.query(`COMMIT`);
  } catch (error) {
    await pool.query(`ROLLBACK`);
  }
};

export const getAllPosts = async (req, res) => {
  let cat = "";
  if (req.params.cat) {
    if (req.params.subcat) {
      cat = `and cat_id =${req.params.cat} and subcat_id =${req.params.subcat}`;
    } else {
      cat = `and cat_id =${req.params.cat}`;
    }
  } else {
    cat = "";
  }
  try {
    const data = await pool.query(
      `select post.*,img.image_path,img.is_cover
      from  master_posts post
      left join image_posts img on post.id = img.post_id and img.is_cover=true
      where post.is_active=true ${cat} order by id
      offset ${req.params.offset} limit 5`,
      []
    );

    const result = await pool.query(
      `select count(post.id) countId
      from  master_posts post
      left join image_posts img on post.id = img.post_id and img.is_cover=true
      where post.is_active=true ${cat}`,
      []
    );

    res.status(StatusCodes.OK).json({ data, result });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ data: "Failed" });
  }
}; // Jyoti

export const getPostUser = async (req, res) => {
  const query = `select * from master_users where id=${req.params.id}`;
  try {
    const userDetails = await pool.query(query, []);
    res.status(StatusCodes.ACCEPTED).json({ data: userDetails });
  } catch (error) {
    res.status(StatusCodes.NOT_FOUND).json({ data: "Failed" });
  }
};
export const getSearchPosts = async (req, res) => {
  const { search, catId, locationId } = req.body;

  // Initialize variables for different parts of the query
  let cat = "";
  let catC = "";
  let loc = "";
  let srchP = "";
  let srchC = "";
  let noLoc = "";
  let noSrc = "";
  let noLocCatSrcQ = "";
  let outQuery = "";
  let outQueryCount = "";

  // Build query parts based on input conditions
  const params = [];
  let paramIndex = 1;

  if (catId) {
    cat = `WHERE cat.id = $${paramIndex}`;
    catC = `WHERE post.cat_id = $${paramIndex}`;
    params.push(catId);
    paramIndex++;

    if (locationId) {
      loc = `AND post.location_id = $${paramIndex}`;
      noLoc = `,matched_posts_by_loc AS (
                SELECT * FROM master_posts post WHERE location_id = $${paramIndex}
              )`;

      params.push(locationId);
      paramIndex++;
    }
    if (search) {
      srchC = `OR cat.category ILIKE $${paramIndex}`;
      srchP = `AND post.title ILIKE $${paramIndex}`;
      noSrc = `,matched_posts_by_partial_title AS (
                SELECT * FROM master_posts WHERE title ILIKE $${paramIndex}
              )`;

      params.push(`%${search}%`);
      paramIndex++;
    }
  } else if (locationId) {
    loc = `WHERE post.location_id = $${paramIndex}`;
    noLoc = `,matched_posts_by_loc AS (
              SELECT * FROM master_posts post WHERE location_id = $${paramIndex}
            )`;

    params.push(locationId);
    paramIndex++;
    if (search) {
      srchP = `AND post.title ILIKE $${paramIndex}`;
      noSrc = `,matched_posts_by_partial_title AS (
                SELECT * FROM master_posts WHERE title ILIKE $${paramIndex}
              )`;

      params.push(`%${search}%`);
      paramIndex++;
    }
  } else if (search) {
    srchC = `WHERE cat.category ILIKE $${paramIndex}`;
    srchP = `WHERE post.title ILIKE $${paramIndex}`;
    noSrc = `,matched_posts_by_partial_title AS (
              SELECT * FROM master_posts WHERE title ILIKE $${paramIndex}
            )`;

    params.push(`%${search}%`);
    paramIndex++;
  }

  if (catId != "" && locationId != "" && search != "") {
    noLocCatSrcQ = ` WHERE (EXISTS (SELECT 1 FROM matched_posts_by_loc WHERE post.id = matched_posts_by_loc.id))
          OR
          (EXISTS (SELECT 1 FROM matched_categories WHERE post.cat_id = cateId OR post.subcat_id = parId))
          OR
          (EXISTS (SELECT 1 FROM matched_posts_by_title WHERE post.cat_id = postCat OR post.subcat_id = postSubCat))
          OR 
          (EXISTS (SELECT 1 FROM matched_posts_by_partial_title WHERE post.id = matched_posts_by_partial_title.id))`;
  } else if (locationId != "" && catId != "" && search == "") {
    noLocCatSrcQ = ` WHERE 
        (EXISTS (SELECT 1 FROM matched_categories WHERE post.cat_id = cateId OR post.subcat_id = parId))
        OR
        (EXISTS (SELECT 1 FROM matched_posts_by_title WHERE post.cat_id = postCat OR post.subcat_id = postSubCat))
        AND
        (EXISTS (SELECT 1 FROM matched_posts_by_loc WHERE post.id = matched_posts_by_loc.id))
         `;
  } else if (catId != "" && search != "" && locationId == "") {
    noLocCatSrcQ = ` WHERE
          (EXISTS (SELECT 1 FROM matched_categories WHERE post.cat_id = cateId OR post.subcat_id = parId))
          OR
          (EXISTS (SELECT 1 FROM matched_posts_by_title WHERE post.cat_id = postCat OR post.subcat_id = postSubCat))
          OR 
          (EXISTS (SELECT 1 FROM matched_posts_by_partial_title WHERE post.id = matched_posts_by_partial_title.id))`;
  } else if (locationId != "" && search != "" && catId == "") {
    noLocCatSrcQ = ` WHERE (EXISTS (SELECT 1 FROM matched_posts_by_loc WHERE post.id = matched_posts_by_loc.id))
          OR 
          (EXISTS (SELECT 1 FROM matched_posts_by_partial_title WHERE post.id = matched_posts_by_partial_title.id))`;
  } else if (locationId != "" && search == "" && catId == "") {
    noLocCatSrcQ = ` WHERE (EXISTS (SELECT 1 FROM matched_posts_by_loc WHERE post.id = matched_posts_by_loc.id))`;
  } else if (locationId == "" && search != "" && catId == "") {
    noLocCatSrcQ = `WHERE (EXISTS (SELECT 1 FROM matched_posts_by_partial_title WHERE post.id = matched_posts_by_partial_title.id))`;
  } else if (locationId == "" && search == "" && catId != "") {
    noLocCatSrcQ = ` WHERE
          (EXISTS (SELECT 1 FROM matched_categories WHERE post.cat_id = cateId OR post.subcat_id = parId))
          OR
          (EXISTS (SELECT 1 FROM matched_posts_by_title WHERE post.cat_id = postCat OR post.subcat_id = postSubCat))`;
  }

  // Construct the final query string
  const queryStr = `
    WITH 
    matched_categories AS (
        SELECT cat.id AS cateId, cat.parent_id AS parId
        FROM master_categories cat ${cat} ${srchC}
    ),
    matched_posts_by_title AS (
        SELECT post.cat_id AS postCat, post.subcat_id AS postSubCat
        FROM master_posts post ${catC} ${srchP} ${loc}
    )
    ${noSrc}
    ${noLoc}

    SELECT DISTINCT post.id, post.user_id, post.cat_id, post.subcat_id, post.title, post.price, post.location_id, post.address, post.is_sold, img.image_path
    FROM master_posts post
    LEFT JOIN image_posts img ON post.id = img.post_id AND img.is_cover = true
        ${noLocCatSrcQ}
  `;

  if (locationId) {
    outQuery = `select * from (${queryStr}) fetchData where location_id = ${locationId}`;
  } else {
    outQuery = queryStr;
  }
  // console.log(`${outQuery} OFFSET $${paramIndex} LIMIT 5`, params);
  try {
    // Add the offset parameter for pagination
    params.push(req.params.offset);

    const data = await pool.query(
      `${outQuery} OFFSET $${paramIndex} LIMIT 5`,
      params
    );

    const result = await pool.query(
      `SELECT COUNT(*) AS countId FROM (${outQuery}) AS matched_posts`,
      params.slice(0, -1)
    );

    res.status(StatusCodes.OK).json({ data: data, result: result });
  } catch (error) {
    console.error(error);
    res.status(StatusCodes.BAD_REQUEST).json({ data: "Failed" });
  }
};

export const getPostReviews = async (req, res) => {
  const query = `select review.*
    from reviews_posts review
    where post_id=${req.params.id} order by id`;

  try {
    const details = await pool.query(query, []);
    res.status(StatusCodes.ACCEPTED).json({ data: details });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ data: `No Data Found !!` });
  }
};
