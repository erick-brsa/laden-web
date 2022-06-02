import { prisma } from "../../../database";

export default async function handler(req, res) {
	switch (req.method) {
		case "POST":
			return createReport(req, res);
		default:
			res.status(405).send(`Method ${req.method} Not Allowed`);
	}
}

const createReport = async (req, res) => {
	const { title = "", message = "", type = "", userId = "" } = req.body;

	await prisma.$connect();

	console.log(req.body);

	const newReport = await prisma.report.create({
		data: {
			title: title,
			message: message,
			type: type,
			userId: userId,
		},
	});

	await prisma.$disconnect();

	return res.status(200).json({
		message: "Reporte creado",
	});
};
