import express from "express";
import {privacyStatementFormData} from "../data/privacyStatementFormData.js"

const router = express.Router();

router.get("/", (req, res) => {
    res.send(privacyStatementFormData);
})

export default router