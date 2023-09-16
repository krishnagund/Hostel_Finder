import { Router } from "express";
import { login } from "../controllers/auth.js";
import { register } from "../controllers/auth.js";
const router = Router();
router.post("/login", login);
router.post("/register", register);
export default router;
