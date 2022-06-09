import { prisma } from "../../../database";

export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			return createReport(req, res);
		case "PUT":
			return updateReport(req, res);
		case "DELETE":
			return deleteReport(req, res);
		default:
			res.status(405).send(`Method ${req.method} Not Allowed`);
	}
}

const createReport = async (req, res) => {
	const { title = "", description = "", solution = "", type = "" } = req.body;
	await prisma.$connect();
	await prisma.report.create({ data: { title, description, solution, type } });
	await prisma.$disconnect();
	return res.status(200).json({ message: "Reporte creado" });
};

const updateReport = async (req, res) => {
	const { id = "", title = "", description = "", solution = "", status = "" } = req.body;
	await prisma.$connect();
	await prisma.report.update({
		data: { title, description, solution, status },
		where: { id }
	});
	await prisma.$disconnect();
	return res.status(200).json({ message: "Reporte creado" });
};

const deleteReport = async (req, res) => {
	const { id = "" } = req.body;
	await prisma.$connect();
	await prisma.report.delete({
		where: { id }
	});
	await prisma.$disconnect();
	res.status(200).send("Reporte eliminado");
}
