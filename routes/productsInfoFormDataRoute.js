import express from "express";
import { productsInfoFormData } from "../data/productsInfoFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(productsInfoFormData);
})

export default router