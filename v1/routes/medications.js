import express from "express";
const router = express.Router();
import {
    GET_ALL_MEDICATIONS,
    POST_MEDICATION
} from "../controllers/medications.js"

router.get("/medications", GET_ALL_MEDICATIONS);

router.post("/medications", POST_MEDICATION);

export default router;