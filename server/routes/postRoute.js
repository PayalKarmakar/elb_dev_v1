import { Router } from "express";
const router = Router();
import {
  validateDynamic,
  validatePostForm,
} from "../middlewares/postMiddleware.js";
import {
  addPost,
  allPosts,
  updatePost,
} from "../controllers/posts/postController.js";
import upload from "../middlewares/multerMiddleware.js";
import {
  myPostList,
  myTotalPosts,
  myTotalPurchases,
  myTotalSold,
} from "../controllers/posts/dashboardController.js";

router.post(
  `/posts`,
  upload.array("image"),
  [validatePostForm, validateDynamic],
  addPost
);

router.get(`/posts`, allPosts);
router
  .route(`/posts/:id`)
  .patch([validatePostForm, validateDynamic], updatePost);

router.get(`/my-total-puchases`, myTotalPurchases);
router.get(`/my-total-posts`, myTotalPosts);
router.get(`/my-total-sold`, myTotalSold);
router.get(`/my-post-list`, myPostList);

export default router;
