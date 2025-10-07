import { PrismaClient, Paciente } from "../generated/prisma";

const prisma = new PrismaClient();

export const createPaciente = async (data: Omit<Paciente, 'id'>): Promise<Paciente> => {
    return await prisma.paciente.create({ data });
};

export const getPacientes = async (): Promise<Paciente[]> => {
    return await prisma.paciente.findMany();
};

export const getPaciente = async (id: number): Promise<Paciente | null> => {
    return await prisma.paciente.findUnique({ where: { id } });
};

export const updatePaciente = async (id: number, data: Partial<Omit<Paciente, 'id'>>): Promise<Paciente> => {
    return await prisma.paciente.update({ where: { id }, data });
};

export const deletePaciente = async (id: number): Promise<Paciente> => {
    return await prisma.paciente.delete({ where: { id } });
};
