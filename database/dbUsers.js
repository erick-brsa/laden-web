import bcrypt from 'bcryptjs';
import { prisma } from "./prisma";

export const checkUserEmailPassword = async (email, password) => {
    console.log("autenticando")
    await prisma.$connect();
    const user = await prisma.user.findUnique({
        where: { email },
        select: {
            id: true,
            email: true,
            name: true,
            password: true,
            role: true,
            image: true
        },
    });
    await prisma.$disconnect();

    if (!user) {
        return null;
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return null;
    }

    const { role, id, name } = user;
    return {
        id,
        email: email.toLocaleLowerCase(),
        role,
        name
    };
}

// Función para crear usuario mediante OAuth
export const oAUthToDbUser = async (oAuthEmail, oAuthName) => {
    await prisma.$connect();
    const user = await prisma.user.findUnique({
        where: { email: oAuthEmail },
    });

    if (user) {
        await prisma.$disconnect();
        const { id, name, email, role, image } = user;
        return { id, name, email, role, image }
    }

    const newUser = await prisma.user.create({
        data: {
            email: oAuthEmail,
            name: oAuthName,
            password: '@',
            image: 'https://ui-avatars.com/api/?name=' + oAuthName,
        }
    });

    await prisma.$disconnect();

    const { id, name, email, role } = newUser;
    return { id, name, email, role, image };
}