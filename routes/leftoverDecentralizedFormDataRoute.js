import express from "express";
import { leftoverDecentralizedFormData } from "../data/leftoverDecentralizedFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(leftoverDecentralizedFormData);
})

export default router