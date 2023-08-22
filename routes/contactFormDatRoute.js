import express from "express";
import {contactFormData} from "../data/contactFormData.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send(contactFormData);
})

export default router