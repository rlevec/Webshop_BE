import express from "express";
import { loginFormData } from "../data/loginFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(loginFormData);
})

export default router