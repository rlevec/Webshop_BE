import express from "express";


let transactions = []

const router = express.Router();

router.get("/", (req, res) => {
    res.send(transactions);
})


router.post("/", (req, res) => {
    let dataToPost = req.body.payload

    transactions.push(dataToPost)

    res.send(req.body.payload);
})

export default router;