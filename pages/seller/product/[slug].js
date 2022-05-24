import { getProductBySlug } from "/database";
import { SellerLayout } from "/components/layouts/SellerLayout";

const SellerEditProductPage = ({ product }) => {
	return (
		<SellerLayout>
			<div className="container section">
				<h1>{product.name}</h1>
			</div>
		</SellerLayout>
	);
};

export const getServerSideProps = async ({ query }) => {
	const { slug } = query;
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
		},
	};
};

export default SellerEditProductPage;
