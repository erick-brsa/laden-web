import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import GitHubProvider from 'next-auth/providers/github';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { checkUserEmailPassword, prisma } from '../../../database'

export default NextAuth({
	providers: [
		Credentials({
			name: 'credentials',
			credentials: {
				email: { label: 'Correo', type: 'email', placeholder: 'Email' },
				password: { label: 'Contraseña', type: 'password', placeholder: 'Password' }
			},
			async authorize(credentials) {
				// console.log(credentials)
				// return { name: 'juan', email: 'juan@gmail.com', role: 'admin' };
				return await checkUserEmailPassword(credentials.email, credentials.password);
			}
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET
		}),
	],

	// pages: {
	// 	signIn: '/auth/login',
	// 	newUser: '/auth/register',
	// },

	jwt: {
		// secret: process.env.NEXTAUTH_SECRET,
	},

	session: {
		maxAge: 2592000, /// 30d
		strategy: 'jwt',
		updateAge: 86400, // cada día
	},

	// Callbacks
	callbacks: {
		async jwt({ token, account, user }) {
			// console.log(token, account, user)
			if (account) {
				token.accessToken = account.access_token;

				switch (account.type) {

					case 'credentials':
						token.user = user;
						break;

					case 'oauth':
						token.user = await dbUsers.oAUthToDbUser( user?.email || '', user?.name || '' );
						break;
				}
			}
			return token;
		},

		async session({ session, token, user }) {
			// console.log(session, token, user)
			session.accessToken = token.accessToken;
			session.user = token.user;
			return session;
		},
	},

	adapter: PrismaAdapter(prisma),
	secret: process.env.SECRET,
});