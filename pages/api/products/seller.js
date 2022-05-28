import { prisma } from '../../../database';

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getProductsBySeller(req, res);
        default:
            return res.status(200).json({ message: 'Método no permitido' })
    }
}

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

const getProductsBySeller = async (req, res) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        include: { review: { select: { id: true } } },
        where: { sellerId: 5 },
    });
    await products.map(product => getRating(product));
    await prisma.$disconnect();
    return res.status(200).json(products);
}
