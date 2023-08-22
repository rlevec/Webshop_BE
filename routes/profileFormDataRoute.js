import express from "express";
import { profileFormData } from "../data/profileFormData.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send(profileFormData);
})

export default router