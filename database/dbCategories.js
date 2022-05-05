import { prisma } from './index';

// Obtener categorías
export const getAllCategories = async () => {
    await prisma.$connect();
    const categories = await prisma.category.findMany();
    await prisma.$disconnect();

    return categories;
}

// Obtener categoría por nombre
export const getCategoryByPath = async (path) => {
    await prisma.$connect();
    const category = await prisma.category.findUnique({
        where: { path },
    })
    await prisma.$disconnect();
    return category;
}

// Obtener categoría por id
export const getCategoryById = async (id) => {
    await prisma.$connect();
    const category = await prisma.category.findUnique({
        where: { id },
    })
    await prisma.$disconnect();
    return category;
}