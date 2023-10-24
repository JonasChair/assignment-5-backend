import express from "express";
const router = express.Router();
import {
    GET_ALL_PETS,
    ADD_PET,
    ARCHIVE_PET
} from "../controllers/pets.js";

router.get("/pets", GET_ALL_PETS);

router.post("/pets", ADD_PET);

router.delete("/pets/:id", ARCHIVE_PET);

export default router;