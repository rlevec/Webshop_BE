import express from "express";
import { changeCreditCardFormData } from "../data/changeCreditCardFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(changeCreditCardFormData);
})

export default router