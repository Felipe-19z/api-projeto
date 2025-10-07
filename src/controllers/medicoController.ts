import { Request, Response } from "express";
import * as medicoService from "../services/medicoService";

export const createMedico = async (req: Request, res: Response) => {
    try {
        const medico = await medicoService.createMedico(req.body);
        res.status(201).json(medico);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const getMedicos = async (req: Request, res: Response) => {
    try {
        const medicos = await medicoService.getMedicos();
        res.json(medicos);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const getMedico = async (req: Request, res: Response) => {
    try {
        const medico = await medicoService.getMedico(parseInt(req.params.id));
        if (medico) {
            res.json(medico);
        } else {
            res.status(404).json({ message: "Médico não encontrado" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const updateMedico = async (req: Request, res: Response) => {
    try {
        const medico = await medicoService.updateMedico(parseInt(req.params.id), req.body);
        res.json(medico);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const deleteMedico = async (req: Request, res: Response) => {
    try {
        await medicoService.deleteMedico(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(404).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};
