import { prisma } from "./prisma";
export const getFaqs = async () => {
    await prisma.$connect();

    const faqs = await prisma.faq.findMany();

    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(faqs));
}