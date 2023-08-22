import express from "express";
import { editConsentFormData } from "../data/editConsentFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(editConsentFormData);
})

export default router