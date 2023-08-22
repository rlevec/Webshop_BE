import express from "express";
import { registrationFormData } from "../data/registrationFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(registrationFormData);
})

export default router