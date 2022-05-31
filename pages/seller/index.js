import styles from "../../styles/modules/Seller.module.css";
import { ProductCarousel } from "../../components/products";
import { SellerLayout } from "../../components/layouts/SellerLayout";
import { getProductsBySeller, getUserById } from "../../database";
import { getSession } from "next-auth/react";

const SellerDashboardPage = ({ products }) => {
	return (
		<SellerLayout
			title="Laden - Panel de Vendedor"
			description="Panel de Vendedor"
		>
			<div className={styles["container__page"]}>
				<div className={styles["container__carusel"]}>
					{products.length > 0 ? (
						<ProductCarousel
							title="Tus Productos"
							products={products}
						></ProductCarousel>
					) : (
						<div className={styles["container__empty"]}>
							<h1>No tienes productos</h1>
							<h4>Comienza registrando un producto</h4>
						</div>
					)}
				</div>

				{/* <div className={styles["container__seller-graphs"]}>
					<div className={styles["container__graphs"]}>
						<div className={styles["container__graph-sell"]}>
							<h3>Tus ventas</h3>
							<div className={styles["graph__sell"]}>
								Aqui va la grafica de ventas
							</div>
						</div>

						<div className={styles["container__graph-rating"]}>
							<h3>Tu rating</h3>
							<div className={styles["graph__rating"]}>
								Aqui va la grafica de rating
							</div>
						</div>
					</div>
				</div> */}

			</div>
		</SellerLayout>
	);
};

export const getServerSideProps = async (context) => {
	const session = await getSession(context)
	if (!session) return {
		redirect: { destination: "/auth/login", permanent: false}
	}

	const user = await getUserById(session.user.id);
	if (user.role !== "vendedor") return {
		redirect: { destination: "/", permanent: false }
	}

	const products = await getProductsBySeller(user.id);

	return { props: { products } };
}

export default SellerDashboardPage;
