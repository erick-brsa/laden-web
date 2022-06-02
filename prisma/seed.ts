import { PrismaClient } from "@prisma/client";
import { categories, subcategories, users, products, suggestions, faqs } from "./data";

const prisma = new PrismaClient();

const main = async (): Promise<void> => {
	try {
		await prisma.$connect();
		await prisma.category.createMany({
			data: categories
		})
		await prisma.subcategory.createMany({
			data: subcategories
		})
		await prisma.user.createMany({
			data: users
		})
		await prisma.product.createMany({
			data: products
		})
		await prisma.suggestion.createMany({
			data: suggestions
		})
		await prisma.faq.createMany({
			data: faqs
		})
		await prisma.$disconnect();
	} catch (error) {
		console.error(error);
	}
}

main();
