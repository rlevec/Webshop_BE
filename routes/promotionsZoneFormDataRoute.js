import express from "express";
import { promotionZoneFormData } from "../data/promotionsZoneFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(promotionZoneFormData);
})

export default router