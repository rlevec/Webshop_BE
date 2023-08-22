import express from "express";
import { productsCategorizedFormDataButtons } from "../data/productsCategorizedFormDataButtons.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(productsCategorizedFormDataButtons);
})

export default router