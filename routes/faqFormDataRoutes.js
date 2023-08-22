import { faqFormData } from "../data/faqFormData.js";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(faqFormData);
})

export default router