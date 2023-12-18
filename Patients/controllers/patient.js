import patientModel from "../models/patients"
export const createPatient = (req, res) => {
    let {
        patientID, 
        Surname,
        Othernames,
        Gender,
        phoneNumber,
        residentialAddress,
        Contact,
        relationshipWithPatients,
    } = req.body
    const Patient = new patientModel()
}
module.exports = createPatient