import { Router } from "express";
const router = Router();
import {
  testUploadMiddleware,
  validateDynamic,
  validatePostForm,
} from "../middlewares/postMiddleware.js";
import {
  addPost,
  allPosts,
  testUpload,
  updatePost,
} from "../controllers/posts/postController.js";
import upload from "../middlewares/multerMiddleware.js";

router.post(
  `/posts`,
  upload.single("image"),
  [validatePostForm, validateDynamic],
  addPost
);
router.get(`/posts`, allPosts);
router
  .route(`/posts/:id`)
  .patch([validatePostForm, validateDynamic], updatePost);

router.post(
  `/test-upload`,
  upload.single("image"),
  testUploadMiddleware,
  testUpload
);

export default router;
