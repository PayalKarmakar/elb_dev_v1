import { StatusCodes } from "http-status-codes";
import { getUserIdFromToken, paginationLogic } from "../../utils/functions.js";
import pool from "../../db.js";

// ------
export const myPosts = async (req, res) => {
  const userId = await getUserIdFromToken(req);
  const { filter, page } = req.query;
  const pagination = paginationLogic(page, null);

  let queryFilter;
  switch (filter) {
    case `all`:
      queryFilter = ``;
      break;
    case `posted`:
      queryFilter = ` and mp.is_sold=false`;
      break;
    case `sold`:
      queryFilter = ` and mp.is_sold=true`;
      break;
    case `rejected`:
      queryFilter = ` and mp.is_blocked=true`;
      break;
    default:
      queryFilter = "";
      break;
  }

  const data = await pool.query(
    `SELECT mp.*, 
    json_agg(
      json_build_object(
        'image_path', ip.image_path,
        'weight', ip.weight,
        'is_cover', ip.is_cover,
        'is_active', ip.is_active
      )
    ) AS images
    FROM master_posts mp
    LEFT JOIN image_posts ip ON mp.id = ip.post_id
    WHERE mp.user_id = $1 ${queryFilter} GROUP BY mp.id order by mp.id desc offset $2 limit $3`,
    [userId, pagination.offset, pagination.pageLimit]
  );

  const records = await pool.query(
    `select mp.* from master_posts mp where mp.user_id=$1 ${queryFilter} and mp.is_active=true`,
    [userId]
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
export const myPostCount = async (req, res) => {
  const userId = await getUserIdFromToken(req);
  console.log(userId);

  const data = await pool.query(
    `select 
      count(id) as total_all,
      count(case when is_sold=false then 1 end) as total_posted,
      count(case when is_sold=true then 1 end) as total_sold,
      count(case when is_blocked=true then 1 end) as total_blocked
    from master_posts where is_active=true and user_id=$1`,
    [userId]
  );

  res.status(StatusCodes.OK).json({ data });
};

// ------
export const mySinglePost = async (req, res) => {
  const { id } = req.params;

  const data = await pool.query(
    `SELECT mp.*, 
    json_agg(
      json_build_object(
        'attr_id', dp.attr_id,
        'attr_name', mff.field_label,
        'attr_type', mff.field_type,
        'attr_db_value', dp.attr_db_value,
        'attr_entry', dp.attr_entry
      )
    ) AS attributes,
    json_agg(
      json_build_object(
        'image_path', ip.image_path,
        'weight', ip.weight,
        'is_cover', ip.is_cover,
        'is_active', ip.is_active
      )
    ) AS images,
    mc.category as category,
    mcs.category as sub_category,
    ml.state,
    ml.city
    FROM master_posts mp
    LEFT JOIN details_posts dp ON mp.id = dp.post_id
    LEFT JOIN image_posts ip ON mp.id = ip.post_id
    join master_categories mc on mp.cat_id = mc.id
    join master_categories mcs on mp.subcat_id = mcs.id
    join master_locations ml on ml.id = mp.location_id
    left join master_form_fields mff on mff.id = dp.attr_id
    WHERE mp.id = $1 GROUP BY mp.id, mc.category, mcs.category, ml.state, ml.city`,
    [id]
  );

  res.status(StatusCodes.OK).json({ data });
};
