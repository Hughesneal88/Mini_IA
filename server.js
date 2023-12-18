import connectDb from './db.js'
const express = require('express')
const app = express();
import patientRouter from './Patients/routes/patient.js'

connectDb("mongodb://127.0.0.1:27017/")
const PORT = process.env.PORT || 3000
app.use(express.json())
app.use("/patient", patientRouter)
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})