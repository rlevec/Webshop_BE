import express from "express";
import { cartFormData } from "../data/cartFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(cartFormData);
})

export default router