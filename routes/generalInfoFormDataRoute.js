import express from "express";
import { generalInfoFormDataData } from "../data/generalInfroFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(generalInfoFormDataData);
})

export default router

