import { prisma } from '../../../database';

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return searchProducts(req, res);
        default:
            return res.status(400).json({ message: 'Bad request5' });
    }
}

const searchProducts = async (req, res) => {
    let { query = "" } = req.query;
    if (query.length === 0) {
        return res.status(400).json({ message: 'Bad request2' });
    }
    query = query.toString().toLowerCase();
    await prisma.$connect();
    const products = await prisma.product.findMany({
        where: {
            name: { contains: query },
            description: { contains: query },
        }
    });
    await prisma.$disconnect();
    return res.status(200).json(products);
}