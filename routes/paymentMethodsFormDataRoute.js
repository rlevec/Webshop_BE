import express from "express";
import {paymentMethodsFormData} from "../data/paymentMethodsFormData.js"


const router = express.Router();

router.get("/", (req, res) => {
    res.send(paymentMethodsFormData);
})

export default router