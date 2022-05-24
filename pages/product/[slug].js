import { ShoppingLayout } from "../../components/layouts";
import { ProductCarousel } from "../../components/products";
import {
	getProductBySlug,
	getProductsByCategoryAndSubcategory,
} from "../../database";
import {
	StarIcon as StarIconSolid,
	HeartIcon as HeartIconSolid,
} from "@heroicons/react/solid";
import {
	StarIcon as StarIconOutline,
	HeartIcon as HeartIconOutline,
} from "@heroicons/react/outline";
import { formatCurrency } from "../../helpers";

import styles from "../../styles/modules/ProductPage.module.css";

const ProductPage = ({ product, moreProducts }) => {
	console.log(product);
	const { name, price, images, specifications, inStock, review, tags, rating } =
		product;

	return (
		<ShoppingLayout
			title={`Laden - ${name}`}
			description={`Página del producto: ${name}`}
		>
			<main>
				<div className={styles["container"]}>
					<div className={styles["container__product-info"]}>
						<div className={styles["container__product-image"]}>
							<img
								className={styles["product__image"]}
								src={images[0]}
								alt=""
							/>
						</div>

						<div className={styles["container__product-options"]}>
							<div className={styles["container__name-product"]}>
								<div>
									<h3 className={styles["title__text"]}>{product.name}</h3>
								</div>
								<div>
									<HeartIconOutline
										width={42}
										height={42}
										className={styles["icon__heart"]}
									/>
								</div>
							</div>

							<div className={styles["container__ranking"]}>
								<div className={styles["product__rating"]}>
									<div className={styles["product__stars"]}>
										{Array(5)
											.fill("solid", 0, rating)
											.fill("outline", rating, 5)
											.map((star, index) =>
												star == "solid" ? (
													<StarIconSolid key={index} height={24} width={24} />
												) : (
													<StarIconOutline key={index} height={24} width={24} />
												)
											)}
									</div>
								</div>
								<button className={styles["link__opinions"]}>
									{review.length == 0
										? "Sin opiniones"
										: review.length == 1
										? `${review.length} opinión`
										: `${review.length} opiniones`}
								</button>
							</div>

							<div className={styles["container__info"]}>
								<div className={styles["container__price"]}>
									<p className={styles["price"]}>{formatCurrency(price)}</p>
								</div>

								<p className={styles["disponible"]}>Disponibles: {inStock}</p>
								<div className={styles["contador"]}>
									<select className="select__cont" name="" id="">
										{/* {
											inStock > 0 ? Array(inStock).fill(1).map((item, index) => (
												<option key={index} value={index + 1}>{index > 1 ? `${index + 1} unidad` : `${index + 1} unidades`}</option>
											)) : <option value="0">No disponible</option>
										} */}
										<option value="1">1 unidad</option>
										<option value="2">2 unidades</option>
										<option value="3">3 unidades</option>
										<option value="4">4 unidades</option>
										<option value="5">5 unidades</option>
										<option value="6">6 unidades</option>
										<option value="7">7 unidades</option>
										<option value="8">8 unidades</option>
										<option value="9">9 unidades</option>
										<option value="10">10 unidades</option>
									</select>
								</div>
								<div className={styles["cart-btn"]}>
									<svg
										className={styles["main-nav__link-icon"]}
										width="24px"
										height="24px"
										viewBox="0 0 24 24"
										fill="currentColor"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M2 3C2 2.44772 2.44772 2 3 2H5C5.47668 2 5.8871 2.33646 5.98058 2.80388L6.2198 4H21C21.3466 4 21.6684 4.17945 21.8507 4.47427C22.0329 4.76909 22.0494 5.13723 21.8944 5.44721L17.8944 13.4472C17.725 13.786 17.3788 14 17 14H7.41421L5.41421 16L17 16C18.6569 16 20 17.3431 20 19C20 20.6569 18.6569 22 17 22C15.3431 22 14 20.6569 14 19C14 18.6494 14.0602 18.3128 14.1707 18H9.82929C9.93985 18.3128 10 18.6494 10 19C10 20.6569 8.65685 22 7 22C5.34315 22 4 20.6569 4 19C4 18.5239 4.11092 18.0737 4.30832 17.6738C3.3292 17.0233 3.04054 15.5452 4 14.5858L5.91446 12.6713L4.1802 4H3C2.44772 4 2 3.55228 2 3ZM7.8198 12H16.382L19.382 6H6.6198L7.8198 12ZM7 18C6.44772 18 6 18.4477 6 19C6 19.5523 6.44772 20 7 20C7.55228 20 8 19.5523 8 19C8 18.4477 7.55228 18 7 18ZM17 18C16.4477 18 16 18.4477 16 19C16 19.5523 16.4477 20 17 20C17.5523 20 18 19.5523 18 19C18 18.4477 17.5523 18 17 18Z"
										/>
									</svg>
									<p>Agregar al carrito</p>
								</div>
							</div>
						</div>
					</div>

					<div className={styles["container__product-description"]}>
						<div className={styles["container__description"]}>
							<h4 className={styles["subtitle__text"]}>Descripción</h4>
							<p className={styles["text__description"]}>
								{product.description}
							</p>
						</div>
						<div className={styles["container__specifications"]}>
							<h4 className={styles["subtitle__text"]}>Especificaciones</h4>
							<div className={styles["container__list"]}>
								<ul>
									{product.specifications.map((specification, index) => (
										<li key={index} className={styles["specifications"]}>
											{specification}
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>

					<div className={styles["container__product-comments"]}>
						<h4>Comentarios</h4>
						<div className={styles["container__notification"]}>
							<div className={styles["container__img"]}>
								<div className={styles["container__user"]}>
									<img
										className={styles["avatar"]}
										src="https://ui-avatars.com/api/?name=juan"
										alt=""
									/>
								</div>
							</div>
							<div className={styles["container__comment"]}>
								<p className={styles["user__name"]}>Mr. Beast</p>
								<p className={styles["text__comment"]}>
									Lorem ipsum dolor, sit amet consectetur adipisicing elit.
									Ducimus, iste! Tenetur voluptatem repellendus officiis earum
									exercitationem corrupti aperiam. Nihil, nam.
								</p>
								<p className={styles["name_product"]}>Laptop Note book 15</p>
								<div className={styles["time"]}>Hace 20 minutos</div>
							</div>
						</div>
						<div className={styles["container__new-comment"]}>
							<div className={styles["new__comment"]}>
								<textarea
									name="comment"
									className={styles["text__new-comment"]}
									placeholder="Agregar comentario"
								></textarea>
								<div className={styles["container__button-sent"]}>
									<button className={styles["sent__button"]}>Enviar</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
			<section className="container section">
				<ProductCarousel
					products={moreProducts}
					title="Productos relacionados"
				/>
			</section>
		</ShoppingLayout>
	);
};

export const getServerSideProps = async ({ query }) => {
	const { slug } = query;
	const product = await getProductBySlug(slug);

	if (!product)
		return {
			redirect: {
				statusCode: 301,
				destination: "/",
			},
		};

	const moreProducts = await getProductsByCategoryAndSubcategory(
		product.category,
		product.subcategory
	);

	return {
		props: {
			product,
			moreProducts,
		},
	};
};

export default ProductPage;
