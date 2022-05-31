import { prisma } from "../../../database";

export default function handler(req, res) {
    switch (req.method) {
        case "POST":
            return createNewProduct(req, res);
        case "PUT":
            return updatedProduct(req, res);
        default:
            return res.status(200).json({ name: 'Example' })
    }
}

const createNewProduct = async (req, res) => {
    const { name, slug, tags, inStock, description, price, categoryId, subcategoryId, images, sellerId } = req.body;
    const product = await prisma.product.create({
        data: {
            name: name,
            price: price,
            slug: slug,
            inStock: inStock,
            tags: tags,
            sold: 0,
            description: description,
            category: {
                connect: {
                    id: categoryId
                }
            }, 
            subcategory: {
                connect: {
                    id: subcategoryId
                }
            },
            images: images,
            user: {
                connect: {
                    id: sellerId
                }
            }
        }
    });
    return res.status(200).json({ message: "hola" });
}

const updatedProduct = async (req, res) => { }