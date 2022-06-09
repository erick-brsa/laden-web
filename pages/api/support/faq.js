import { prisma } from "../../../database";

export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			return createFaq(req, res);
		case "PUT":
			return updateFaq(req, res);
		case "DELETE":
			return deleteFaq(req, res);
		default:
			res.status(405).send(`Method ${req.method} Not Allowed`);
	}
}

const createFaq = async (req, res) => {
	const { question = "", answer = "" } = req.body;
	await prisma.$connect();
	await prisma.faq.create({ data: { question, answer } });
	await prisma.$disconnect();
	return res.status(200).json({ message: "FAQ creada" });
};

const updateFaq = async (req, res) => {
	const { id = "", question = "", answer = "" } = req.body;
	await prisma.$connect();
	await prisma.faq.update({
		data: { question, answer },
		where: { id },
	});
	await prisma.$disconnect();
	return res.status(200).json({ message: "FAQ actualizada" });
};

const deleteFaq = async (req, res) => {
	const { id = "" } = req.body;
	console.log(id)
	await prisma.$connect();
	await prisma.faq.delete({ where: { id } });
	await prisma.$disconnect();
	return res.status(200).json({ message: "FAQ eliminada" });
};