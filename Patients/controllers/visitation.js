import { visitationModel } from "../models/patients.js"

export const createVisit = (req, res) => {
    let {
        PatientId,
        Date,
        Time,
        encounterType, // Emergency, OPD, Specialist Care
    } = req.body

    const Visit = new visitationModel()
}
// module.exports = createVisit