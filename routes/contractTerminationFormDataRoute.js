import express from "express";
import {contractTerminationFormData} from "../data/contractTerminationFormData.js"


const router = express.Router();

router.get("/", (req, res) => {
    res.send(contractTerminationFormData);
})

export default router