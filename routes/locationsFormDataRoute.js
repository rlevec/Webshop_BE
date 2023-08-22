import express from "express";
import { locationsFormData } from "../data/locationsFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(locationsFormData);
})

export default router