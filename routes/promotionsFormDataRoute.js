import express from "express";
import { promotionsFormData } from "../data/promotionsFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(promotionsFormData);
})

export default router