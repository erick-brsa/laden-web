import { prisma } from "../../../database";

export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			return createSuggestion(req, res);
		default:
			res.status(405).send(`Method ${req.method} Not Allowed`);
	}
}

const createSuggestion = async (req, res) => {
	const { title = '', description = '' } = req.body;

    await prisma.$connect();

    const newSuggestion = await prisma.suggestion.create({
        data: {
            title: title,
            message: description,
        }
    })
    
    await prisma.$disconnect();

	return res.status(200).json({
		message: "Sugerencia creada",
	});
};
