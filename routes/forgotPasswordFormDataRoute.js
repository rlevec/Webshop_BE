import express from "express";
import { forgotPasswordFormData } from "../data/forgotPasswordFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(forgotPasswordFormData);
})

export default router