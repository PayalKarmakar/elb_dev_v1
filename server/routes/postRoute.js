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

router
  .route(`/posts`)
  // .post([validatePostForm, validateDynamic], addPost)
  .post(addPost)
  .get(allPosts);
router
  .route(`/posts/:id`)
  .patch([validatePostForm, validateDynamic], updatePost);

export default router;
