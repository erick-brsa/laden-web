export default function Handled(req, res){
    switch(req.metod){
        case "GET":
            return getProductsBySeller (req, res)

            default:
                res.status(200).json({name: 'example'})
        }
    }

const getRating = async (product) =>{
    const rating = await prisma.review.aggregate({
        _avg: {cualification: true},
        where: {product: {id: product.id}}  
    })
}

export const getProductsBySeller = async (id) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        include: { review: { select: { id: true } } },
        where: { sellerId: 5 },
    });
    await products.map(product => getRating(product));

    await prisma.$disconnect();
    return res.status(200).json(products);
}

