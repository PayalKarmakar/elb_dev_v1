import { Router } from "express";
const router = Router();
import { getTopLocations } from "../controllers/masters/locationController.js";
import { getCategories } from "../controllers/masters/categoryController.js";

router.get(`/top-locations`, getTopLocations);
router.get(`/get-categories`, getCategories);

export default router;
