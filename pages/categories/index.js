import { ShoppingLayout } from "../../components/layouts";
import { CategoryCard } from "../../components/ui";
import { getAllCategories } from "../../database";

import styles from "../../styles/modules/categories.module.css";

const CategoriesPage = ({ categories }) => {
	return (
		<ShoppingLayout
			title="Laden- Categorías"
			description="Página de categorías"
		>
			<main>
				<section className="container section">
					<h2 className="section__title text-center">Categorías</h2>
					<div className={styles["categories__container"]}>
						{categories.map((category) => (
							<CategoryCard
								key={category.id}
								category={category}
							/>
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

export default CategoriesPage