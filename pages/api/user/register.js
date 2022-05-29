import bcrypt from 'bcryptjs';
import { prisma } from "../../../database";

export default function hander(req, res) {
    switch (req.method) {
        case 'POST':
            return registerUser(req, res);
        case 'UPDATE':
            return updateUser(req, res);
        default:
            return res.status(405).json({
                message: 'Method not allowed'
            });
    }
}

const registerUser = async (req, res) => {
    const { name = '', email = '', password = '' } = req.body;
    if (password.length < 6) {
        return res.status(400).json({
            message: 'La contraseña debe de ser de 6 caracteres'
        });
    }

    if (name.length < 2) {
        return res.status(400).json({
            message: 'El nombre debe de ser de 2 caracteres'
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
            image: "https://ui-avatars.com/api/?size=500&background=414b9a&color=fff&bold=true&name=" + name.toLocaleLowerCase(),
            email: email.toLocaleLowerCase(),
            password: bcrypt.hashSync(password),
            name,
        }
    });

    await prisma.$disconnect();

    return res.status(201).json({
        message: 'Usuario creado con éxito',
    });
}

const updateUser = async (req, res) => {
    const { name = '', email = '', password = '' } = req.body;

}