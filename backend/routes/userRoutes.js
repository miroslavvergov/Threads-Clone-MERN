import express from "express";
import { followUnFollowUser, loginUser, logoutUser, signupUser } from "../controllers/userController.js";

const router = express.Router();

//register
router.post("/signup", signupUser);
router.post("/login", loginUser)
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute ,followUnFollowUser);


export default router;