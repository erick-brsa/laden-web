import ShoppingLayout from "../../components/layouts/ShoppingLayout";
import ProductCard from "../../components/products/ProductCard";
import { getCategoryByPath, getProductsByCategory } from "../../database";

const CategoryPage = ({ category, products }) => {
	
	return (
		<ShoppingLayout
			title={category.name}
			description={`Laden`}
		>
			<main>
				<section className="container section">
					<h2 className="section__title">{category.name}</h2>
					{products.length > 0 ? (
						<div className="products__container">
							{products.map(product => (
								<ProductCard key={product.id} {...product} />
							))}
						</div>
					) : (
						<h3>
							No hay productos en esta categoría
						</h3>
					)}
				</section>
			</main>
		</ShoppingLayout>
	)
}

export const getServerSideProps = async ({ params }) => {
	const { path } = params;
	const category = await getCategoryByPath(path);
	const products = await getProductsByCategory(category.id);

	if (!category) return {
		redirect: {
			destination: "/categories",
			permanent: false,
		}
	}

	return {
		props: {
			category, products
		},
	}
}

// export const getStaticPaths = async (ctx) => {
// 	const categories = await getAllCategories();

// 	return {
// 		paths: categories.map(({ path }) => ({
// 			params: { path },
// 		})),
// 		fallback: "blocking"
// 	}
// }

// export const getStaticProps = async ({ params }) => {
// 	const { path } = params;
// 	const category = await getCategoryByPath(path);
// 	const products = await getProductsByCategory(category.id);

// 	if (!category) return {
// 		redirect: {
// 			destination: "/categories",
// 			permanent: false,
// 		}
// 	}

// 	return {
// 		props: {
// 			category, products
// 		},
// 		revalidate: 60 * 5  // 5 minutes 
// 	}
// }

export default CategoryPage