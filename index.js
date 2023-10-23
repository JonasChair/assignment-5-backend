import express from "express";
import cors from "cors";
import "dotenv/config";
import petRouter from "./routes/pet.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(petRouter);

app.use((req,res) => {
    return res.status(404).json({response: "Endpoint does not exist!"})
});

app.listen(process.env.PORT, () => {
    console.log(`App started on port ${process.env.PORT}`);
})