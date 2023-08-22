import express from "express";

import { footerNewsLetterFormData } from "../data/footerNewsletterFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(footerNewsLetterFormData);
})

export default router