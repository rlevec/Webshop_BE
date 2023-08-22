import express from "express";
import { aboutUsFormData } from "../data/aboutUsFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(aboutUsFormData);
})

export default router