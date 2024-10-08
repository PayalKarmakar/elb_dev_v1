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
  getPostReviews,
  getPostUser,
  getRecentPosts,
  getSearchPosts,
  postContact,
} from "../controllers/posts/postController.js";
import { getAllStates } from "../controllers/masters/locationController.js";
import sendEmailMiddleware from "../middlewares/sendEmailMiddleware.js";
import { getUserProfile } from "../controllers/userController.js";

router.get(`/top-locations`, getTopLocations);
router.get(`/get-categories`, getCategories);
router.get(`/all-categories`, getAllCategories);
router.get(`/featured-posts`, getFeaturedPosts); // Jyoti
router.get(`/recent-posts`, getRecentPosts); // Jyoti
router.get(`/post/:id`, getPostDetails); // Arko
router.get(`/post/reviews/:id`, getPostReviews); // Arko
router.get(`/all-post/:offset/:cat?/:subcat?`, getAllPosts); // Jyoti
router.get(`/get-allstates`, getAllStates); //Payal
router.get(`/get-cities/:id`, getCities); //Payal
router.get(`/post/user/:id`, getPostUser);
router.post(`/search-post/:offset`, getSearchPosts); // Arko
router.get(`/get-profile/:uuid`, getUserProfile);
router.post("/send-email", sendEmailMiddleware, postContact); //jyoti

export default router;
