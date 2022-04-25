import { PrismaClient } from "@prisma/client";
import { categories, subcategories, users, products, suggestions } from "./data";

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
		await prisma.$disconnect();
	} catch (error) {
		console.error(error);
	}
}

main();
