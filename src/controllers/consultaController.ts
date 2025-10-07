import { Request, Response } from "express";
import * as consultaService from "../services/consultaService";

export const createConsulta = async (req: Request, res: Response) => {
    try {
        const consulta = await consultaService.createConsulta(req.body);
        res.status(201).json(consulta);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const getConsultas = async (req: Request, res: Response) => {
    try {
        const consultas = await consultaService.getConsultas();
        res.json(consultas);
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const getConsulta = async (req: Request, res: Response) => {
    try {
        const consulta = await consultaService.getConsulta(parseInt(req.params.id));
        if (consulta) {
            res.json(consulta);
        } else {
            res.status(404).json({ message: "Consulta não encontrada" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const updateConsulta = async (req: Request, res: Response) => {
    try {
        const consulta = await consultaService.updateConsulta(parseInt(req.params.id), req.body);
        res.json(consulta);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};

export const deleteConsulta = async (req: Request, res: Response) => {
    try {
        await consultaService.deleteConsulta(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        if (error instanceof Error) {
            res.status(404).json({ message: error.message });
        } else {
            res.status(404).json({ message: "Ocorreu um erro desconhecido." });
        }
    }
};
