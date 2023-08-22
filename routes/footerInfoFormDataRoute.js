import express from "express";
import { footerInfoFormData } from "../data/footerInfoFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(footerInfoFormData);
})

export default router