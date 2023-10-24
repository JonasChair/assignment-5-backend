import db from "../db.js";

const GET_PET_PRESCRIPTIONS = async (req, res) => {
    try {
        const prescriptions = await db.query(`
            SELECT *, pets.name AS pet_name, medications.name AS med_name FROM prescriptions
            INNER JOIN pets
                ON prescriptions.pet_id = pets.id
            INNER JOIN medications
                ON prescriptions.medication_id = medications.id
            WHERE pet_id = ${req.params.id};
        `);
        return res.json({ prescriptions: prescriptions.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

const ADD_PET_PRESCRIPTION = async (req, res) => {
    try {
        const prescription = await db.query(`INSERT INTO prescriptions(
            medication_id, pet_id, comment)
            VALUES (${req.body.medication}, ${req.params.id}, '${req.body.comment}' )`)
            return res.json({ prescription: prescription.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

export { GET_PET_PRESCRIPTIONS, ADD_PET_PRESCRIPTION };