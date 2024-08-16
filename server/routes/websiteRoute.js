import { Router } from "express";
import nodemailer from "nodemailer";
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
//router.post(`/get-profile`, getUserProfile);//Payal

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "elbcontact18@gmail.com",
    pass: "agzi vken ytqj gjwl", // Use the App Password here
  },
});

router.post("/send-email", (req, res) => {
  const { to, subject, text, postId, userId } = req.body;

  const mailOptions = {
    from: "elbcontact18@gmail.com",
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      return res.status(500).send(error.toString());
    }
    console.log("Email sent: " + info.response);

    // Pass postId and userId to postContact controller
    postContact(postId, userId);

    res.status(200).send("Email sent: " + info.response);
  });
});

// router.post(`/post-contact-insert`, postContact);

export default router;
