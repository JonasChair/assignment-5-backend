import express from "express";
const router = express.Router();
import {
    GET_PET_PRESCRIPTIONS,
} from "../controllers/prescriptions.js";

router.get("/prescriptions/:id", GET_PET_PRESCRIPTIONS);

export default router;