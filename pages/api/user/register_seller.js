import bcrypt from 'bcryptjs';
import {prisma} from '/database';

export default function handler(req, res) {
    switch (req.method) {
        case 'POST':
            return registerUser(req, res);
        case 'PUT':
            return updateUser(req, res);
        default:
            return res.status(405).json({
                message: 'Method not allowed'
            });
    }
}

const registerUser = async (req, res) => {
    const { name = '', phone = '', email = '', password = '' } = req.body;

    if (name.length < 2) {
        return res.status(400).json({
            message: 'El nombre debe de ser de 2 caracteres'
        });
    }

    if (password.length < 6) {
        return res.status(400).json({
            message: 'La contraseña debe de ser de 6 caracteres'
        });
    }

    if (phone.length < 10) {
        return res.status(400).json({
            message: 'El teléfono debe de ser de 10 caracteres'
        });
    }

    // if (!validations.isValidEmail(email)) {
    //     return res.status(400).json({
    //         message: 'El correo no tiene formato de correo'
    //     });
    // }

    await prisma.$connect();

    const user = await prisma.user.findUnique({
        where: { email },
    });

    if (user) {
        return res.status(400).json({
            message: 'No puede usar ese correo'
        })
    }

    const newUser = await prisma.user.create({
        data: {
            name,
            image: "https://ui-avatars.com/api/?size=500&background=414b9a&color=fff&bold=true&name=" + name.toLocaleLowerCase(),
            phoneNumber: phone,
            email: email.toLocaleLowerCase(),
            password: bcrypt.hashSync(password),
            role: "vendedor"
        }
    });

    await prisma.$disconnect();

    return res.status(201).json({
        message: 'Usuario creado con éxito',
    });
}

const updateUser = async (req, res) => {
    const { id = '', name = '', phone = '' } = req.body;

    if (name.length < 2) {
        return res.status(400).json({
            message: 'El nombre debe de ser de 2 caracteres'
        });
    }

    if (phone.length < 10) {
        return res.status(400).json({
            message: 'El teléfono debe de ser de 10 caracteres'
        });
    }

    await prisma.$connect();

    const user = await prisma.user.findUnique({
        where: { id },
    });

    if (!user) {
        return res.status(400).json({
            message: 'No existe el usuario'
        })
    }

    const updatedUser = await prisma.user.update({
        where: { id: id },
        data: {
            name,
            phoneNumber: phone,
            role: 'vendedor'
        }
    });

    await prisma.$disconnect();

    return res.status(201).json({
        message: 'Usuario creado con éxito',
    });
}