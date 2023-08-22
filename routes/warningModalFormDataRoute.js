import express from "express";
import { warningModalFormData } from "../data/warningModalFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(warningModalFormData);
})

export default router