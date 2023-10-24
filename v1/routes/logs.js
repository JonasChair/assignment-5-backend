import express from "express";
const router = express.Router();
import {
    GET_PET_LOGS,
    ADD_PET_LOG
 } from "../controllers/logs.js";

router.get("/logs/:id", GET_PET_LOGS);

router.post("/logs/:id", ADD_PET_LOG);

export default router;