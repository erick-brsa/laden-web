import { prisma } from "../../../database";

export default function handler(req, res) {
    switch (req.method) {
        case "GET":
            return getAllProducts(req, res);
        case "POST":
            return createProduct(req, res);
        default:
            res.status(200).json({ name: 'Example' })
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

const getAllProducts = async (req, res) => {
    await prisma.$connect();
    const products = await prisma.product.findMany();
    await products.map(product => getRating(product));
    await prisma.$disconnect();

    res.status(200).json(products);
}

const createProduct = async (req, res) => {
    await prisma.$connect();
    const product = await prisma.product.create({
        data: { ...req.body }
    });
    await prisma.$disconnect();

    res.status(200).json(product);
}