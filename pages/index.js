import ShoppingLayout from "../components/layouts/ShoppingLayout";
import AdSlider from "../components/products/AdSlider";
import ProductCard from "../components/products/ProductCard";
import ProductCarousel from "../components/products/ProductCarousel";
import { getAllProducts, getTrendingProducts } from "../database";

const HomePage = ({ products, trendingProducts }) => {
	return (
		<ShoppingLayout
			title="Laden - Compra en línea"
			description="Shopping"
		>
			<AdSlider
				images={[
					'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80',
					'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
					'https://images.unsplash.com/photo-1524289286702-f07229da36f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
					'https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
				]}
			/>
			<main>
				<ProductCarousel
					title="Productos destacados"
					products={trendingProducts}
				/>
				<section className="container section">
					<h3 className="section__title">Productos</h3>
					<div className="products__container">
						{products.map(product => (
							<ProductCard key={product.id} {...product} />
						))}
					</div>
				</section>
			</main>
		</ShoppingLayout>
	)
}

export const getServerSideProps = async (ctx) => {
	const products = await getAllProducts();
	const trendingProducts = await getTrendingProducts();
	return {
		props: {
			products, trendingProducts
		}
	}
}

export default HomePage