import express from "express";
import { newsletterInteractiveFormDate } from "../data/newsletterInteractiveFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(newsletterInteractiveFormDate);
})

export default router