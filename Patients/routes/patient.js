import express from 'express';
import { createPatient } from "../controllers/patient.js";


export const router = express.Router();

router.post("/addPatients", createPatient);

router.get("/getPatient/:id", async (req, res) => {
    let data = await Model.findbyId(req.params.id);
    res.json(data);
});

router.get('/getAllPatients', async (req, res) => {
    let data = await Model.find();
    res.json(data);
});

router.post("/deletePatient/:id", async (req, res) => {
    Model.remove({_id: req.params.id}, function(err){res.send("Internal Server Error", 500)}),
    res.send(200);
});

// module.exports = router;