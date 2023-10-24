import db from "../db.js";

const GET_ALL_MEDICATIONS = async (req, res) => {
    try {
        const medications = await db.query("SELECT * from medications");
        return res.json({ medications: medications.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

const POST_MEDICATION = async (req, res) => {
    try {
        const medications = await db.query(`INSERT INTO medications(
            name, description)
            VALUES ('${req.body.name}', '${req.body.description}')`);
        return res.json({ medications: medications.rows });
    } catch (err) {
        console.log("ERROR: ", err);
        res.status(500).json({ response: "something went wrong" });
    }
}

export { GET_ALL_MEDICATIONS, POST_MEDICATION };