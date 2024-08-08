import { Router } from "express";
const router = Router();
import {
  activateUser,
  addNewUser,
  allUsers,
  deactivateUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { validateUser } from "../middlewares/userMiddleware.js";
import {
  myPostCount,
  myPosts,
  mySinglePost,
} from "../controllers/posts/userPosts.js";

router.get(`/all`, allUsers);
router.get(`/user/:uuid`, getUser);
router.post(`/add`, validateUser, addNewUser);
router.put(`/update/:userId`, validateUser, updateUser);
router.delete(`/delete/:userId`, deactivateUser);
router.post(`/activate/:userId`, activateUser);
router.get(`/my-posts`, myPosts);
router.get(`/post-count`, myPostCount);
router.get(`/my-posts/:id`, mySinglePost);

export default router;
