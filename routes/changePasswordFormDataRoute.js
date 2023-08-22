import express from "express";
import { changePasswordFormData } from "../data/changePasswordFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(changePasswordFormData);
})

export default router