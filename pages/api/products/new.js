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

const createNewProduct = async (req, res) => { }

const updatedProduct = async (req, res) => { }