import Image from "next/image";
import Link from "next/link";
import ShoppingLayout from "../../components/layouts/ShoppingLayout";
import { getAllCategories } from "../../database";

import styles from "../../styles/modules/categories.module.css";

const CategoriesPage = ({categories}) => {
	return (
		<ShoppingLayout
			title="Laden- Categorías"
			description="Categories"
		>
			<main>
				<section className="container section">
					<h2 className="section__title text-center">Categorías</h2>
					<div className={styles["categories__container"]}>
						{categories.map((category) => (
							<div 
								key={category.id}
								className={styles["category__card"]}
							>
								<Link href={`/categories/${category.path}`}>
									<a className={styles["caregory__link"]}>
										<div className={styles["category__image"]}>
											{/* eslint-disable-next-line @next/next/no-img-element */}
											<img src={category.image} alt={`Imagen de ${category.name}`} />
										</div>
										<div className={styles["category__content"]}>
											<h3 className={styles["category__title"]}>
												{category.name}
											</h3>
										</div>
									</a>
								</Link>
							</div>
						))}
					</div>
				</section>
			</main>
		</ShoppingLayout>
	)
}

export const getServerSideProps = async (ctx) => {
	const categories = await getAllCategories();

	return {
		props: {
			categories
		}
	}
}

// export const getStaticPaths = async (ctx) => {
// 	const categories = await getAllCategories();

// 	return {
// 		paths: categories.map(({ name }) => ({
// 			params: { name },
// 		})),
// 		fallback: "blocking"
// 	}
// }

// export const getStaticProps = async (ctx) => {
// 	const { name } = params;
// 	const category = await getCategoryByName(name);

// 	if (!category) return {
// 		redirect: {
// 			destination: "/categories",
// 			permanent: false,
// 		}
// 	}
	
// 	return {
// 		props: {
// 			category
// 		},
// 		revalidate: 60 * 60 * 24 * 7 // 1 week
// 	}
// }

export default CategoriesPage