import express from "express";
import {brandLogoImagesData} from "../data/brandLogoImagesData.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send(brandLogoImagesData);
})

export default router