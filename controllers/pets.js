import db from "../db.js";

const GET_ALL_PETS = async (req, res) => {
    try {
        const pets = await db.query("SELECT * FROM pets WHERE is_archived = false");
        return res.json({ pets: pets.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

const ADD_PET = async (req, res) => {
    try {
        const pets = await db.query(`INSERT INTO pets (
            name, dob, client_email)
            VALUES ('${req.body.name}', '${req.body.dob}', '${req.body.clientEmail}')`);
        return res.json({ pets: pets.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

const ARCHIVE_PET = async (req, res) => {
    try{
        const pet = await db.query(`
        UPDATE pets
        SET is_archived = true
        WHERE id=${req.params.id}
        `);
        return res.json({ pet: pet.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

export { GET_ALL_PETS, ADD_PET, ARCHIVE_PET };