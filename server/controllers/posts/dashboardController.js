import { StatusCodes } from "http-status-codes";
import pool from "../../db.js";
import { getUserIdFromToken } from "../../utils/functions.js";

// ------
export const myTotalPurchases = async (req, res) => {
  const userId = await getUserIdFromToken(req);
  // Data from order table ------
  res.status(StatusCodes.OK).json({ count: 0 });
};

// ------
export const myTotalPosts = async (req, res) => {
  const userId = await getUserIdFromToken(req);
  const data = await pool.query(
    `select count(id) from master_posts where user_id=$1 and is_active=true`,
    [userId]
  );
  res.status(StatusCodes.OK).json({ count: data.rows[0].count });
};

// ------
export const myTotalSold = async (req, res) => {
  const userId = await getUserIdFromToken(req);
  const data = await pool.query(
    `select count(id) from master_posts where user_id=$1 and is_sold=true`,
    [userId]
  );
  res.status(StatusCodes.OK).json({ count: data.rows[0].count });
};

// ------
export const myPostList = async (req, res) => {
  const userId = await getUserIdFromToken(req);
  const data = await pool.query(
    `select
      p.id,
      p.title,
      p.description,
      p.price,
      p.updated_at,
      p.is_sold,
      json_build_object(
        'cat_name', c.category,
        'subcat_name', s.category
      ) AS category,
      COALESCE(
        json_agg(
          json_build_object(
            'image_id', i.id,
            'image_path', i.image_path,
            'is_cover', i.is_cover,
          )
        ) FILTER (WHERE i.post_id IS NOT NULL),
        '[]'
      ) AS images
      FROM post_master p
      JOIN master_categories c ON p.cat_id = c.id
      JOIN master_categories s ON p.subcat_id = s.id
      LEFT JOIN image_posts i ON p.id = i.post_id
      where p.user_id=$1 and p.is_active=true
      GROUP BY p.id, c.cat_name, c.subcat_name limit 5
    `,
    [userId]
  );

  res.status(StatusCodes.OK).json({ data });
};
