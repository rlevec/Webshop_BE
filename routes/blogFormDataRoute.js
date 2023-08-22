import express from "express";
import { blogFormData } from "../data/blogFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(blogFormData);
})

export default router