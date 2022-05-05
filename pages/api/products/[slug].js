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
    const { slug } = req.query;
    
    await prisma.$connect();
    const product = await prisma.product.findUnique({
        where: { slug: slug },
        select: {
            name: true,
        }
    });
    
    if (!product) return res.status(404).json({
        message: 'Producto no encontrado'
    });

    const rating = await prisma.review.aggregate({
        _avg: { qualification: true},
        where: { product: { id: product.id } },
    })
    
    if (rating._avg.qualification) {
        product.rating = Math.round(rating._avg.qualification);
    } else {
        product.rating = 0;
    }
    
    await prisma.$disconnect();
    
    return res.json(JSON.parse(JSON.stringify(product)));
}
