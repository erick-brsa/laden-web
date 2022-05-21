import bcrypt from "bcryptjs"

export const users = [
	{
		name: "Erick",
		email: "erick@laden.com.mx",
		image: "https://ui-avatars.com/api/?name=erick",
		role: "admin",
		password: bcrypt.hashSync("ImagineDragons")
	},
	{
		name: "Daniela",
		email: "daniela@laden.com.mx",
		image: "https://ui-avatars.com/api/?name=daniela",
		role: "admin",
		password: bcrypt.hashSync("ImagineDragons")
	},
	{
		name: "Italia",
		email: "italia@laden.com.mx",
		image: "https://ui-avatars.com/api/?name=italia",
		role: "admin",
		password: bcrypt.hashSync("ImagineDragons")
	},
	{
		name: "Yael",
		email: "yael@laden.com.mx",
		image: "https://ui-avatars.com/api/?name=yael",
		role: "admin",
		password: bcrypt.hashSync("ImagineDragons")
	},
	{
		name: "Álvaro",
		email: "alvaro@gmail.com",
		image: "https://ui-avatars.com/api/?name=alvaro",
		role: "vendedor"
	},
	{
		name: "Mariana",
		email: "mariana@gmail.com",
		image: "https://ui-avatars.com/api/?name=mariana",
		role: "vendedor"
	},
	{
		name: "Juan",
		email: "juan@gmail.com",
		image: "https://ui-avatars.com/api/?name=juan",
		role: "vendedor"
	},
	{
		name: "Matín",
		email: "martin@gmail.com",
		image: "https://ui-avatars.com/api/?name=martin",
		role: "vendedor"
	},
	{
		name: "Bernardo",
		email: "bernardo@gmail.com",
		image: "https://ui-avatars.com/api/?name=bernardo",
		role: "vendedor"
	},
	{
		name: "Gabriel",
		email: "gabriel@gmail.com",
		image: "https://ui-avatars.com/api/?name=gabriel",
		role: "vendedor"
	},
	{
		name: "Lucía",
		email: "lucia@gmail.com",
		image: "https://ui-avatars.com/api/?name=lucia",
		role: "vendedor"
	},
	{
		name: "Samuel",
		email: "samuel@gmail.com",
		image: "https://ui-avatars.com/api/?name=samuel",
		role: "vendedor"
	},
	{
		name: "natalia",
		email: "natalia@gmail.com",
		image: "https://ui-avatars.com/api/?name=natalia"
	},
	{
		name: "Raquel",
		email: "raquel@gmail.com",
		image: "https://ui-avatars.com/api/?name=raquel"
	},
	{
		name: "Javier",
		email: "javier@gmail.com",
		image: "https://ui-avatars.com/api/?name=javier"
	}
]
