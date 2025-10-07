import express from "express";
import { createConsulta, getConsulta, getConsultas, updateConsulta, deleteConsulta } from "../controllers/consultaController";

const router = express.Router();

router.post("/consultas", createConsulta);
router.get("/consultas", getConsultas);
router.get("/consultas/:id", getConsulta);
router.put("/consultas/:id", updateConsulta);
router.delete("/consultas/:id", deleteConsulta);

export default router;