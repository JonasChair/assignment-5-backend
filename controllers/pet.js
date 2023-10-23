import db from "../db.js";

const GET_ALL_PETS = async (req,res) => {
    try{
        const pets = await db.query("SELECT * from pets WHERE is_archived = false");
        return res.json({ pets: pets.rows});
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({response:"something went wrong"});
    }
}

const ADD_PET = async (req,res) => {
    try{
        const pets = await db.query(`INSERT INTO pets (
            name, dob, client_email)
            VALUES ('${req.body.name}', '${req.body.dob}', '${req.body.clientEmail}')`);
        return res.json({ pets: pets.rows});
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({response:"something went wrong"});
    }
}

export {GET_ALL_PETS,ADD_PET};