import Head from 'next/head';
import { SellerAuthHeader } from '../ui';

export const SellerAuthLayout = ({ title, description, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<SellerAuthHeader />
			{children}
		</>
	)
}
