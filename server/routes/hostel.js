import { Router } from "express";
import { getHostels } from "../controllers/hostel.js";
const router = Router();
router.get("/getHostels", getHostels);
export default router;
