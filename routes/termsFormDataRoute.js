import express from "express";
import {termsFormData} from "../data/termsFormData.js"


const router = express.Router();

router.get("/", (req, res) => {
    res.send(termsFormData);
})

export default router