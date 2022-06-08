import { prisma } from "./prisma";

export const getSupportReports = async () => {
    await prisma.$connect();
    const reports = await prisma.report.findMany({
        where: {
            type: 'ingeniero-soporte'
        }
    })
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports))
}

export const getMaintenansReports = async () => {
    await prisma.$connect();
    const reports = await prisma.report.findMany({
        where: {
            type: 'ingeniero-mantenimiento'
        }
    })
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports))
}

export const getReports = async (role) => {
    await prisma.$connect();
    const reports = await prisma.report.findMany({
        where: {
            type: role
        }
    })
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports))
}

export const getReport = async (id) => {
    await prisma.$connect();
    const reports = await prisma.report.findUnique({
        where: {
            id: id
        }
    })
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(reports))
}

