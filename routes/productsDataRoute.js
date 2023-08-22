import express from "express";
import { productsData } from "../data/productsDataAlt.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(productsData);
})

export default router