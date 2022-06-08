import { prisma } from "./prisma";
export const getFaqs = async () => {
    await prisma.$connect();

    const faqs = await prisma.faq.findMany();

    await prisma.$disconnect();

    return JSON.parse(JSON.stringify(faqs));
}

export const getFaqById = async (id) => {
    await prisma.$connect();
    const faq = await prisma.faq.findUnique({
        where: {
            id: id
        }
    });
    await prisma.$disconnect();
    return JSON.parse(JSON.stringify(faq));
} 