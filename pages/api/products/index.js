import { prisma } from "../../../database";

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getAllProducts(req, res);
        default:
            res.status(200).json({ name: 'Example' })
    }
}

const getAllProducts = async (req, res) => {
    await prisma.$connect();
    const products = await prisma.product.findMany();
    await prisma.$disconnect();
    res.status(200).json(products);
    
    // products;
}