import express from "express";
import { wishlistFormData } from "../data/wishListFormData.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send(wishlistFormData);
})

export default router