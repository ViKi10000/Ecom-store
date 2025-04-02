import express from "express";
import {
  loginUser,
  logout,
  registerUser,
} from "../controller/auth.controller.js";

const router = express.Router();

//REGISTER USER ROUTER
router.post("register", registerUser);

//LOGIN USER ROUTER
router.post("login", loginUser);

//LOGOUT USER
router.post("logout", logout);

export default router;
