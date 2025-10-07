import express from "express";
import { createPaciente, getPaciente, getPacientes, updatePaciente, deletePaciente } from "../controllers/pacienteController";

const router = express.Router();

router.post("/pacientes", createPaciente);
router.get("/pacientes", getPacientes);
router.get("/pacientes/:id", getPaciente);
router.put("/pacientes/:id", updatePaciente);
router.delete("/pacientes/:id", deletePaciente);

export default router;