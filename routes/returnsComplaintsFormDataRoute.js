import express from "express";
import {returnsComplaintsFormData} from "../data/returnsComplaintsFormData.js"


const router = express.Router();

router.get("/", (req, res) => {
    res.send(returnsComplaintsFormData);
})

export default router