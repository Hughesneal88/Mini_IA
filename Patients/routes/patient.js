import createPatient from "../controllers/patient.js"


const express = require('express')
export const patientRouter = express.Router()

patientRouter.post("/addPatients", createPatient).get("/Patients", (req, res) => res.send(req.body))
patientRouter.delete("/Patients", createPatient).get("/Patients", (req, res) => res.send(req.body))


module.exports = patientRouter

