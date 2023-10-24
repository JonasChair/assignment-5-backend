import db from "../db.js";

const GET_PET_LOGS = async (req, res) => {
    try {
        const logs = await db.query(`SELECT * FROM logs 
        INNER JOIN pets
        ON logs.pet_id = pets.id
        WHERE pet_id = ${req.params.id}`);
        return res.json({ logs: logs.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

const ADD_PET_LOG = async (req, res) => {
    try {
        const logs = await db.query(`INSERT INTO logs (
            pet_id, description, status)
            VALUES (${req.params.id}, '${req.body.description}', '${req.body.status}')`);
        return res.json({ logs: logs.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

export { GET_PET_LOGS, ADD_PET_LOG };