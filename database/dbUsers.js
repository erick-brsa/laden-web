import bcrypt from 'bcryptjs';
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