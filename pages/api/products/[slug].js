import { prisma } from '../../../database'

export default function handler(req, res) {
    switch (req.method) {
        case 'GET':
            return getProductBySlug(req, res);
        default:
            return res.status(405).json({message: 'Método no permitido'});
    }
}

const getProductBySlug = async (req, res) => {
    const { slug } = req.params;
    
    await prisma.$connect();
    const product = await prisma.product.findUnique({
        where: { slug }
    });
    
    if (!product) return res.status(404).json({
        message: 'Producto no encontrado'
    });
    await prisma.$disconnect();
    
    return res.json(product);
}
