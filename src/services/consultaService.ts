import { PrismaClient, Consulta } from "../generated/prisma";

const prisma = new PrismaClient();

export const createConsulta = async (data: Omit<Consulta, 'id'>): Promise<Consulta> => {
    return await prisma.consulta.create({ data });
};

export const getConsultas = async (): Promise<Consulta[]> => {
    return await prisma.consulta.findMany();
};

export const getConsulta = async (id: number): Promise<Consulta | null> => {
    return await prisma.consulta.findUnique({ where: { id } });
};

export const updateConsulta = async (id: number, data: Partial<Omit<Consulta, 'id'>>): Promise<Consulta> => {
    return await prisma.consulta.update({ where: { id }, data });
};

export const deleteConsulta = async (id: number): Promise<Consulta> => {
    return await prisma.consulta.delete({ where: { id } });
};
