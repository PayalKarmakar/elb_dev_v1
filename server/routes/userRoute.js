import { Router } from "express";
import multer from "multer";
const router = Router();
import {
  activateUser,
  addNewUser,
  allUsers,
  deactivateUser,
  getUser,
  updateProfileUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUser } from "../middlewares/userMiddleware.js";
import {
  myPostCount,
  myPosts,
  mySinglePost,
} from "../controllers/posts/userPosts.js";

const storage = multer.memoryStorage(); // or diskStorage if you want to save the file to disk
const upload = multer({ storage });

router.get(`/all`, allUsers);
router.get(`/user/:uuid`, getUser);
router.post(`/add`, validateUser, addNewUser);
router.put(`/update/:userId`, validateUser, updateUser);
router.delete(`/delete/:userId`, deactivateUser);
router.post(`/activate/:userId`, activateUser);
router.get(`/my-posts`, myPosts);
router.get(`/post-count`, myPostCount);
router.get(`/my-single-post/:id`, mySinglePost);
router.post(
  `/update-user/:uuid/:id`,
  upload.single("profile_img"),
  updateProfileUser
);

export default router;
