import db from "../db.js";

const GET_PET_PRESCRIPTIONS = async (req, res) => {
    try {
        const prescriptions = await db.query(`SELECT * FROM prescriptions WHERE pet_id = ${req.params.id}`);
        return res.json({ prescriptions: prescriptions.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

export { GET_PET_PRESCRIPTIONS };