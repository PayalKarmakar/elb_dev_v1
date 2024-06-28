import { Router } from "express";
const router = Router();
import { getTopLocations } from "../controllers/masters/locationController.js";

router.get(`/top-locations`, getTopLocations);

export default router;
