import { prisma } from './index';

// Obtener categorías
export const getAllCategories = async () => {
    await prisma.$connect();
    const categories = await prisma.category.findMany({
        orderBy: { name: "asc"},
        select: {
            id: true,
            name: true,
            image: true,
            path: true,
            subcategories: {
                select: {
                    id: true,
                    name: true,
                    path: true,
                }
            }
        }
    });
    await prisma.$disconnect();
    return categories;
}

export const getAllSubcategories = async () => {
    await prisma.$connect();
    const subcategories = await prisma.subcategory.findMany({
        orderBy: { name: "asc"},
    });
    await prisma.$disconnect();
    return subcategories;
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