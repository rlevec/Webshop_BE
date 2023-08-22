import express from "express";
import {dataPrivacyFormData} from "../data/dataPrivacyFormData.js"


const router = express.Router();

router.get("/", (req, res) => {
    res.send(dataPrivacyFormData);
})

export default router