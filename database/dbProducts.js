import { prisma } from './index';

// Obtener calificación de un producto
const getRating = async (product) => {
    const rating = await prisma.review.aggregate({
        _avg: { qualification: true },
        where: { product: { id: product.id } },
    })
    if (rating) {
        product.rating = Math.round(rating._avg.qualification);
    }
    return product;
}

// Obtener todos los productos
export const getAllProducts = async () => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        include: { review: { select: { id: true } } }
    });
    await products.map(product => getRating(product));
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener algunos products
export const getSomeProducts = async (limit) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        take: limit
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener producto por id
export const getProductById = async (id) => {
    await prisma.$connect();
    const product = await prisma.product.findUnique({
        where: { id }
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(product));
}

// Obtener producto por slug
export const getProductBySlug = async (slug) => {
    await prisma.$connect();
    const product = await prisma.product.findUnique({
        where: { slug }
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(product));
}

// Obtener productos por categoría
export const getProductsByCategory = async (id) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { category: { id } },
        include: { review: { select: { id: true } } }
    });
    await products.map(product => getRating(product));
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por subcategoría
export const getProductsBySubcategory = async (subcategory) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { subcategory },
        include: { review: { select: { id: true } } }
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por categoría y subcategoría
export const getProductsByCategoryAndSubcategory = async (category, subcategory) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: { category, subcategory }
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por precio menor o igual que
export const getProductsByLowPrice = async (price) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: {
            price: {
                lte: price
            }
        }
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por precio mayor o igual que
export const getProductsByHighPrice = async (price) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: {
            price: {
                gte: price
            }
        }
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

export const getProductsByPriceRange = async (lowPrice, highPrice) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: {
            price: {
                gte: lowPrice,
                lte: highPrice
            }
        }
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por búsqueda
export const getProductsByTerm = async (term) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({

    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener productos en tendencia
export const getTrendingProducts = async () => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        take: 10,
        orderBy: { sold: "desc" }
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}

// Obtener productos por fecha de creación
export const getProductsByDate = async () => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        take: 10,
        orderBy: { createdAt: "desc" },
    });
    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(products));
}
