/**
 * Auth routes
 * Public signup/login/logout endpoints and a protected endpoint for the current user.
 */
import express from "express";
import { login, logout, signup, getMe } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/me", protectRoute, getMe);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

export default router;
