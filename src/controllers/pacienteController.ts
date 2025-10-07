import { Request, Response } from "express";
import * as pacienteService from "../services/pacienteService";

export const createPaciente = async (req: Request, res: Response) => {
    try {
        const paciente = await pacienteService.createPaciente(req.body);
        res.status(201).json(paciente);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const getPacientes = async (req: Request, res: Response) => {
    try {
        const pacientes = await pacienteService.getPacientes();
        res.json(pacientes);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const getPaciente = async (req: Request, res: Response) => {
    try {
        const paciente = await pacienteService.getPaciente(parseInt(req.params.id));
        if (paciente) {
            res.json(paciente);
        } else {
            res.status(404).json({ message: "Paciente não encontrado" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const updatePaciente = async (req: Request, res: Response) => {
    try {
        const paciente = await pacienteService.updatePaciente(parseInt(req.params.id), req.body);
        res.json(paciente);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const deletePaciente = async (req: Request, res: Response) => {
    try {
        await pacienteService.deletePaciente(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(404).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};
