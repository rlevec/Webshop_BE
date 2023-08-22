import express from "express";
import { headerFormData } from "../data/headerFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(headerFormData);
})

export default router