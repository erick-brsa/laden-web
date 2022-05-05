import { prisma } from '../../database';

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getAllCategories(req, res);
        default:
            return res.status(200).json({ name: 'Example' })
    }
}

const getAllCategories = async (req, res) => {
    await prisma.$connect();
    const categories = await prisma.category.findMany();
    await prisma.$disconnect();
    return res.status(200).json(categories);
}