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

router.post(`/posts`, [validatePostForm, validateDynamic], addPost);
router.get(`/posts`, allPosts);
router
  .route(`/posts/:id`)
  .patch([validatePostForm, validateDynamic], updatePost);

export default router;
