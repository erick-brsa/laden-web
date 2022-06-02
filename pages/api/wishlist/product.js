import { prisma } from '../../../database';

export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return addProductToWishList(req, res);
        case 'DELETE':
            return deleteProductFromWishList(req, res);
        case 'PUT':
            return updateProductInWishList(req, res);
        default:
            res.status(200).send({
                message: 'Method not allowed'
            });
    }
}

const addProductToWishList = async (req, res) => {
    const { userId, productId } = req.body;

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

    const productInWishList = await prisma.wishList.findMany({
        where: { product: { id: productId }, user: { id: userId } }
    });

    if (productInWishList.length > 0) {
        return res.status(200).send({
            message: 'Producto ya existe en la lista de deseos'
        })
    }

    await prisma.wishList.create({
        data: {
            productId: productId,
            userId: userId
        }
    })
}

const deleteProductFromWishList = async (req, res) => {
    const { wishListId } = req.body;
    await prisma.$connect();
    await prisma.wishList.delete({ where: { id: wishListId } })
    await prisma.$disconnect();
    return res.status(200).send({
        message: 'Producto eliminado'
    })
}

const updateProductInWishList = async (req, res) => {
    const { wishListId, userId } = req.body;
    await prisma.$connect();

    const product = await prisma.wishList.findUnique({
        where: { id: wishListId },
        select: { productId: true },
    });

    await prisma.wishList.delete({ 
        where: { id: wishListId }, 
    });

    const productInCart = await prisma.cart.findMany({
        where: { productId: product.productId, userId: userId },
    });

    if (productInCart.length > 0) {
        return res.status(200).send({
            message: 'Producto ya existe en el carrito'
        })
    }

    await prisma.cart.create({
        data: {
            productId: product.productId,
            userId: userId,
        }
    });

    await prisma.$disconnect();
    return res.status(200).send({
        message: 'Producto actualizado'
    })
}