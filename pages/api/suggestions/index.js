// import { prisma } from "../../../database";

// export default async function handler(req, res) {
//     switch (req.method) {
//         case 'POST':
//             return createSuggestion(req, res);
//         case 'GET':
//             return get(req, res);
//         default:
//             res.status(405).send(`Method ${req.method} Not Allowed`);
// }

// const createSuggestion = async (req, res) => {
//     const { title,  message } = body.body;
//     await prisma.$connect();
    
//     await prisma.$disconnect();
//     const result = {
//         title,
//     }
//     res.status(200).json(result);
// }