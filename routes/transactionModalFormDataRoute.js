import express from "express";
import { transactionModalFormData } from "../data/transactionModalFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(transactionModalFormData);
})

export default router