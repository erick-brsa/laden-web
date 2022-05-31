import { getProductBySlug } from "/database";
import { SellerLayout } from "/components/layouts/SellerLayout";

const SellerEditProductPage = ({ user, product }) => {
	return (
		<SellerLayout>
			<div className="container section">
				<h1>{product.name}</h1>
			</div>
		</SellerLayout>
	);
};

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)
	if (!session) return {
		redirect: { destination: "/auth/login", permanent: false}
	}

	const user = await getUserById(session.user.id);
	if (user.role !== "vendedor") return {
		redirect: { destination: "/", permanent: false }
	}
	
	const { slug } = ctx.query;
	const product = await getProductBySlug(slug);

	if (!product)
		return {
			redirect: {
				destination: "/seller/products",
				permanent: false,
			},
		};

	return {
		props: {
			product,
			user
		},
	};
};

export default SellerEditProductPage;
