import { prisma } from '../../database';

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getProduct(req, res);
        default:
            return res.status(405).send({
                message: 'Method not allowed'
            })
    }
}

const getProduct = async (req, res) => {
    await prisma.$connect();
    const productInCart = await prisma.cart.findMany({
        where: { user: {id: 21}, product: {id: 7} }
    });


    await prisma.$disconnect();

    return res.status(200).send({
        productInCart
    });
}