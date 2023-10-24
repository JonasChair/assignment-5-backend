import express from "express";
const router = express.Router();
import {
    GET_PET_PRESCRIPTIONS,
    ADD_PET_PRESCRIPTION
} from "../controllers/prescriptions.js";

router.get("/prescriptions/:id", GET_PET_PRESCRIPTIONS);

router.post("/prescriptions/:id", ADD_PET_PRESCRIPTION);

export default router;