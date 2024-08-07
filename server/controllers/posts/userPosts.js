import { StatusCodes } from "http-status-codes";
import { getUserIdFromToken, paginationLogic } from "../../utils/functions.js";
import pool from "../../db.js";
import { response } from "express";

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
    `select mp.*, ip.image_path from master_posts mp left join image_posts ip on mp.id = ip.post_id where mp.user_id=$1 ${queryFilter} and mp.is_active=true offset $2 limit $3`,
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
