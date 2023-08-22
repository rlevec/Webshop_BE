import express from "express";
import { discountsFormData } from "../data/discountsFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(discountsFormData);
})

export default router