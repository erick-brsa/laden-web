import { getSession, useSession, signOut } from 'next-auth/react';
import { ShoppingLayout } from '../../components/layouts';

const AccountPage = ({ session }) => {
	return (
		<ShoppingLayout
			title="Laden - Mi cuenta"
			description="Página de mi cuenta"
		>
			<div className='container'>
				<h1>{session.user.name}</h1>
			</div>
		</ShoppingLayout>
	)
}

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) return {
		redirect: {
			destination: "/auth/login",
			permanent: false
		}
	}

	return {
		props: {
			session
		}
	}
}


export default AccountPage