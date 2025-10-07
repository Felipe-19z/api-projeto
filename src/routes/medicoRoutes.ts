import express from "express";
import { createMedico, getMedico, getMedicos, updateMedico, deleteMedico } from "../controllers/medicoController";

const router = express.Router();

router.post("/medicos", createMedico);
router.get("/medicos", getMedicos);
router.get("/medicos/:id", getMedico);
router.put("/medicos/:id", updateMedico);
router.delete("/medicos/:id", deleteMedico);

export default router;