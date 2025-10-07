import { PrismaClient, Medico } from "../generated/prisma";

const prisma = new PrismaClient();

export const createMedico = async (data: Omit<Medico, 'id'>): Promise<Medico> => {
    return await prisma.medico.create({ data });
};

export const getMedicos = async (): Promise<Medico[]> => {
    return await prisma.medico.findMany();
};

export const getMedico = async (id: number): Promise<Medico | null> => {
    return await prisma.medico.findUnique({ where: { id } });
};

export const updateMedico = async (id: number, data: Partial<Omit<Medico, 'id'>>): Promise<Medico> => {
    return await prisma.medico.update({ where: { id }, data });
};

export const deleteMedico = async (id: number): Promise<Medico> => {
    return await prisma.medico.delete({ where: { id } });
};
