import express from "express";
const router = express.Router();
import {
    GET_ALL_PETS,
    ADD_PET
} from "../controllers/pet.js"

router.get("/pets", GET_ALL_PETS);

router.post("/pets", ADD_PET)

export default router;