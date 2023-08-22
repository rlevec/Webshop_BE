import express from "express";
import {helpFormData} from "../data/helpFormData.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send(helpFormData);
})

export default router