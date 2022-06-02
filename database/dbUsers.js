import bcrypt from "bcryptjs";
import { prisma } from "./prisma";

export const checkUserEmailPassword = async (email, password) => {
	await prisma.$connect();
	const user = await prisma.user.findUnique({
		where: { email },
		select: {
			id: true,
			email: true,
			name: true,
			password: true,
			role: true,
			image: true,
		},
	});
	await prisma.$disconnect();

	if (!user) {
		return null;
	}

	if (!bcrypt.compareSync(password, user.password)) {
		return null;
	}

	const { id, role, name, image } = user;
	return {
		id,
		email: email.toLocaleLowerCase(),
		role,
		name,
		image,
	};
};

// Función para crear usuario mediante OAuth
export const oAUthToDbUser = async (oAuthEmail, oAuthName) => {
	await prisma.$connect();
	const user = await prisma.user.findUnique({
		where: { email: oAuthEmail },
	});

	if (user) {
		await prisma.$disconnect();
		const { id, name, email, role, image } = user;
		return { id, name, email, role, image };
	}

	const newUser = await prisma.user.create({
		data: {
			email: oAuthEmail,
			name: oAuthName,
			password: "",
			image:
				"https://ui-avatars.com/api/?size=500&background=047857&color=fff&bold=true&name=" +
				oAuthName.toLocaleLowerCase(),
		},
	});

	await prisma.$disconnect();

	const { id, name, email, role } = newUser;
	return { id, name, email, role, image };
};

// Obtener usuario por id
export const getUserById = async (id) => {
	await prisma.$connect();
	const user = await prisma.user.findUnique({
		select: {
			id: true,
			email: true,
			name: true,
			phoneNumber: true,
			role: true,
			image: true,
		},
		where: { id },
	});
	await prisma.$disconnect();

	return user;
};

//Obtener usuario por role
export const getClients = async () => {
	await prisma.$connect();
	const clients = await prisma.user.findMany({
		where: { role: "cliente" },
        select: {
			id: true,
			email: true,
			name: true,
			role: true,
			image: true,
		}
	});
	await prisma.$disconnect();

	return clients;
};

export const getUsers = async () => {
    await prisma.$connect();
    const users = await prisma.user.findMany({
        select: {
			id: true,
            name: true,
            role: true,
            email: true,
        }
    })
    await prisma.$disconnect();
    return users;
}

// Obtener el carrito de compras de un usuario
export const getUserCart = async (id) => {
    await prisma.$connect();
    const products = await prisma.cart.findMany({
        where: { userId: id },
        orderBy: { createdAt: 'desc' },
        select: { 
            quantity: true,
            id: true,
            product: {
                select: {
                    id: true,
                    name: true,
                    images: true,
                    price: true,
                    inStock: true,
                    slug: true,
                    createdAt: true,
                },
            },
        },
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(products));
}

// Obtener la lista de deseos de un usuario
export const getUserWishList = async (id) => {
    await prisma.$connect();
    const wishList = await prisma.wishList.findMany({
        where: { userId: id },
        orderBy: { createdAt: 'desc' },
        select: {
            id: true,
            product: {
                select: {
                    id: true,
                    name: true,
                    images: true,
                    price: true,
                    inStock: true,
                    slug: true,
                    createdAt: true,
                },
            },
        },
    });
    await prisma.$disconnect();
    
    return JSON.parse(JSON.stringify(wishList));
}

export const getProductFromWishList = async (id) => {
	await prisma.$connect();
	const product = await prisma.wishList.findUnique({
		where: { id },
		select: {
			id: true,
			product: {
				select: {
					id: true,
					name: true,
					images: true,
					price: true,
					inStock: true,
					slug: true,
					createdAt: true,
				},
			},
		},
	});
	await prisma.$disconnect();
	
	return product;
}

export const getProductInCart = async (id) => {
	await prisma.$connect();
	const product = await prisma.cart.findFirst({
		where: {
			userId: id,
		},
		select: {
			id: true,
		}
	});
	await prisma.$disconnect();
	return product;
} 

export const getNotifications = async (id) => {
	await prisma.$connect();
	const notifications = await prisma.notification.findMany({
		where: { userId: id },
	});
	await prisma.$disconnect();
	
	return JSON.parse(JSON.stringify(notifications));
}