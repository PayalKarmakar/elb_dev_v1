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
          'attr_id', dp.attr_id, 
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
      ) AS images
    FROM master_posts mp
    LEFT JOIN details_posts dp ON mp.id = dp.post_id
    LEFT JOIN image_posts ip ON mp.id = ip.post_id
    WHERE mp.user_id = $1 ${queryFilter} GROUP BY mp.id offset $2 limit $3`,
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
