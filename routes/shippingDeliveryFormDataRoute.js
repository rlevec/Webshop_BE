import express from "express";
import { shippingDeliveryFormData } from "../data/shippingDeliveryFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(shippingDeliveryFormData);
})

export default router