import { Router } from "express";
const router = Router();
import { getTopLocations } from "../controllers/masters/locationController.js";
import {
  getAllCategories,
  getCategories,
} from "../controllers/masters/categoryController.js";
import {
  getAllPosts,
  getFeaturedPosts,
  getPostDetails,
  getRecentPosts,
} from "../controllers/posts/postController.js";

router.get(`/top-locations`, getTopLocations);
router.get(`/get-categories`, getCategories);
router.get(`/all-categories`, getAllCategories);
router.get(`/featured-posts`, getFeaturedPosts); // Jyoti
router.get(`/recent-posts`, getRecentPosts); // Jyoti
router.get(`/post/:id`, getPostDetails); // Arko
router.get(`/all-post`, getAllPosts); // Jyoti
export default router;
