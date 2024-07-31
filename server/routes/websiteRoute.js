import { Router } from "express";
const router = Router();
import {
  getTopLocations,
  getCities,
} from "../controllers/masters/locationController.js";
import {
  getAllCategories,
  getCategories,
} from "../controllers/masters/categoryController.js";
import {
  getAllPosts,
  getAllPostsMin,
  getFeaturedPosts,
  getPostDetails,
  getPostUser,
  getRecentPosts,
} from "../controllers/posts/postController.js";
import { getAllStates } from "../controllers/masters/locationController.js";

router.get(`/top-locations`, getTopLocations);
router.get(`/get-categories`, getCategories);
router.get(`/all-categories`, getAllCategories);
router.get(`/featured-posts`, getFeaturedPosts); // Jyoti
router.get(`/recent-posts`, getRecentPosts); // Jyoti
router.get(`/post/:id`, getPostDetails); // Arko
router.get(`/all-post/:offset/:cat?/:subcat?`, getAllPosts); // Jyoti
// router.get(`/all-posts/:cat/:subcat?`, getAllPostsMin);
router.get(`/get-allstates`, getAllStates); // Payal
router.get(`/get-cities/:id`, getCities); // Payal
router.get(`/post/user/:id`, getPostUser);

export default router;
