import express from "express";
import { footerLocationsFormData } from "../data/footerLocationsFormData.js";


const router = express.Router();

router.get("/", (req, res) => {
    res.send(footerLocationsFormData);
})

export default router