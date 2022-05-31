import { prisma } from '../../../database';

export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return addProductToCart(req, res);
        case 'PUT':
            return updateProductInCart(req, res);
        case 'DELETE':
            return deleteProductFromCart(req, res);
        default:
            return res.status(405).send({
                message: 'Method not allowed'
            });
    }
}

const addProductToCart = async (req, res) => {
    const { productId = '', quantity = '', userId = '' } = req.body;

    await prisma.$connect();
    const product = await prisma.product.findUnique({
        where: { id: productId }
    });

    if (!product) return res.status(404).send({
        message: 'Product not found'
    })

    const user = await prisma.user.findUnique({
        where: { id: userId }
    });

    if (!user) return res.status(404).send({
        message: 'User not found'
    })

    const productInCart = await prisma.cart.findMany({
        where: { product: {id: productId}, user: { id: userId } }
    });

    if (productInCart.length > 0) {
        await prisma.cart.update({
            where: { id: productInCart[0].id },
            data: { quantity: quantity }
        })
        return res.status(200).send({
            message: 'Producto actualizado'
        })
    }

    await prisma.cart.create({
        data: {
            productId: productId,
            quantity: quantity,
            userId: userId
        }
    })
    
    console.log(req.body)

    return res.status(200).send({
        message: 'Agregado al carrito'
    })
}

const updateProductInCart = async (req, res) => {
    const { productId = '', quantity = '' } = req.body;
    await prisma.$connect();
    const product = await prisma.cart.findUnique({
        where: { id: productId }
    })
    if (!product) {
        return res.status(404).send({
            message: 'Product not found'
        })
    }
    await prisma.cart.update({
        where: { id: productId },
        data: { quantity: quantity }
    })
    await prisma.$disconnect();
    return res.status(200).send({
        message: 'Producto actualizado'
    })
}

const deleteProductFromCart = async (req, res) => {
    const { productId = '' } = req.body;
    console.log(productId);
    await prisma.$connect();
    const product = await prisma.cart.findUnique({
        where: { id: productId }
    })
    if (!product) {
        return res.status(404).send({
            message: 'Product not found'
        })
    }
    await prisma.cart.delete({ where: { id: productId } })
    await prisma.$disconnect();
    return res.status(200).send({
        message: 'Producto eliminado'
    })
}