import { prisma } from './prisma';

export const getSuggestions = async () => {
    await prisma.$connect();
    const suggestions = await prisma.suggestion.findMany({
        include: { user: { select: { id: true, name: true, email: true } } },
    })
    await prisma.$disconnect();
    return suggestions;
}
