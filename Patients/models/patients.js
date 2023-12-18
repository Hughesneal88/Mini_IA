import {Schema, Model} from "mongoose"
import Visit from "../controllers/visitation"
import Patient from "../controllers/patient"
import Vitals from "../controllers/vitals"



const patientSchema = new Schema({
    PatientId: String,
    Surname: String,
    otherNames: String,
    Gender: String,
    phoneNumber: String,
    residentialAddress: String,
    emergencyContact: {firstName: String,
        Surname: String,
        contactPhone: String,
        contactRelationshipWithPatient: String,
    },
})

const visitationSchema = new Schema({
    PatientId: String,
    Date: String,
    Time: String,
    encounterType: [{
        type: String,
        enum: ["Emergency", "OPD", "Specialist Care"]
    }]

})

const vitalsSchema = new Schema({
    PatientId: String,
    BloodPressure: String,
    Tempurature: String,
    Pulse: String,
    SP02: String
})

export const visitationModel = Model(Visit , "Vitals")
export const vitalsModel = Model(Vitals, "Vitals")
export const patientModel = Model(Patient, "Patient")

module.exports = {visitationModel, vitalsModel, patientModel}