import { prisma } from "./prisma";

export const getAllReports = async () => {
    await prisma.$connect();
    const reports = await prisma.report.findMany();
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports));
}

export const getSupportReports = async () => {
    await prisma.$connect();
    const reports = await prisma.report.findMany({
        where: { type: 'ingeniero-soporte' }
    });
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports));
}

export const getMaintenansReports = async () => {
    await prisma.$connect();
    const reports = await prisma.report.findMany({
        where: { type: 'ingeniero-mantenimiento' }
    });
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports));
}

export const getReports = async (type) => {
    await prisma.$connect();
    const reports = await prisma.report.findMany({
        where: { type }
    });
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports));
}

export const getReport = async (id) => {
    await prisma.$connect();
    const reports = await prisma.report.findUnique({
        where: { id }
    });
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports));
}
