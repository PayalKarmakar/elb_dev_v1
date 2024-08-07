import { faker } from "@faker-js/faker";
import { generateOtherSlug } from "../utils/functions.js";
import pool from "../db.js";
import dayjs from "dayjs";
import slug from "slug";

function getRandomNumber(numbers) {
  const randomIndex = faker.number.int({ min: 0, max: numbers.length - 1 });
  return numbers[randomIndex];
}

const seedPost = async () => {
  const minUserId = 55;
  const maxUserId = 155;
  const categories = [12, 16, 19, 22, 26, 30, 34, 46];
  const subCategories = [
    13, 14, 15, 17, 18, 20, 21, 23, 24, 25, 27, 28, 29, 31, 32, 33, 35, 36, 37,
    38, 39, 40, 41, 42, 44, 47,
  ];
  const locations = [73, 120, 142, 275, 344];

  const posts = [];
  for (let index = 0; index < 500; index++) {
    const single = {
      user_id: faker.number.int({ min: minUserId, max: maxUserId }),
      title: faker.commerce.productName(),
      cat_id: getRandomNumber(categories),
      subcat_id: getRandomNumber(subCategories),
      description: faker.lorem.paragraphs({ min: 2, max: 4 }),
      price: faker.number.int({
        min: 100,
        max: 1000000,
      }),
      created_at: dayjs(new Date(), "Asia/Kolkata").format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      updated_at: dayjs(new Date(), "Asia/Kolkata").format(
        "YYYY-MM-DD HH:mm:ss"
      ),
      is_feature: faker.datatype.boolean(),
      location_id: getRandomNumber(locations),
      is_sold: faker.datatype.boolean(),
    };
    posts.push(single);
  }

  try {
    await pool.query(`BEGIN`);

    for (const post of posts) {
      const nameSlug = slug(post.title);

      const master = await pool.query(
        `insert into master_posts(user_id, title, cat_id, subcat_id, description, price, slug, created_at, updated_at, is_feature, location_id, is_sold) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) returning id`,
        [
          post.user_id,
          post.title,
          post.cat_id,
          post.subcat_id,
          post.description,
          post.price,
          nameSlug,
          post.created_at,
          post.updated_at,
          post.is_feature,
          post.location_id,
          post.is_sold,
        ]
      );
      const id = master.rows[0].id;

      await pool.query(
        `insert into image_posts(post_id, image_path, is_cover) values($1, $2, $3)`,
        [
          id,
          faker.image.urlLoremFlickr({ width: 400, height: 300 }),
          faker.datatype.boolean(),
        ]
      );
    }
    await pool.query(`COMMIT`);
  } catch (error) {
    await pool.query(`ROLLBACK`);
    console.log(error);
    return error;
  }
};
seedPost();
