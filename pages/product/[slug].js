import ShoppingLayout from '../../components/layouts/ShoppingLayout';
import ProductCarousel from '../../components/products/ProductCarousel';
import { getProductBySlug, getProductsByCategoryAndSubcategory } from '../../database';

import styles from '../../styles/modules/ProductPage.module.css';

const ProductPage = ({ product, moreProducts }) => {
	console.log(product)
	const { name, price, images, specifications, inStock, review, tags } = product;

	return (
		<ShoppingLayout
			title={`Laden - ${name}`}
		>
			<main>
				<div className="container">
					<h3>Nombre:</h3>
					{name}
					<h4>Precio:</h4>
					{price}
					<h4>Disponibles:</h4>
					{inStock}
					<h4>Reseñas: </h4>
					{review.length > 0 ? (
						<p>Estas son las reseñas</p>
					) : (
						<p>No hay reseñas</p>
					)}

					<h4>Tags:</h4> {tags.map((tag, index) => (<p key={index}>{tag}</p>))}

					<h4>Especificaciones: </h4>
					{specifications && specifications.map((specification, index) => (
						<div key={index}>
							{/* <h4>{specification.name}</h4> */}
							<p>{specification}</p>
						</div>
					))}

					{images.map((image, index) => (
						<div key={index} className={styles.image}>
							<img src={image} alt={name} />
						</div>
					))}
				</div>
			</main>
			<ProductCarousel
				products={moreProducts}
				title="Productos relacionados"
			/>
		</ShoppingLayout>
	)
}

export const getServerSideProps = async ({ query }) => {
	const { slug } = query;
	const product = await getProductBySlug(slug);

	if (!product) return {
		redirect: {
			statusCode: 301,
			destination: '/',
		}
	}

	const moreProducts = await getProductsByCategoryAndSubcategory(product.category, product.subcategory);

	return {
		props: {
			product, moreProducts
		}
	}
}

export default ProductPage