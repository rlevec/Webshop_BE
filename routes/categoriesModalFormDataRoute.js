import express from "express";
import { categoriesModalFormData } from "../data/categoriesModalFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(categoriesModalFormData);
})

export default router