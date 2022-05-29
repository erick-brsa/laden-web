import styles from "../../styles/modules/Seller.module.css";
import { ProductCarousel } from "../../components/products";
import { SellerLayout } from "../../components/layouts/SellerLayout";
import { getProductsBySeller } from "../../database";

const SellerDashboardPage = ({ products }) => {
	return (
		<SellerLayout
			title="Laden - Panel de Vendedor"
			description="Panel de Vendedor"
		>
			<div className={styles["container__page"]}>
				<div className={styles["container__carusel"]}>
					<ProductCarousel
						title="Tus Productos"
						products={products}
					></ProductCarousel>
				</div>

				<div className={styles["container__seller-graphs"]}>
					<div className={styles["container__graphs"]}>
						<div className={styles["container__graph-sell"]}>
							<h3>Tus ventas</h3>
							<div className={styles["graph__sell"]}>
								{/*Aqui va la grafica de ventas*/}
							</div>
						</div>

						<div className={styles["container__graph-rating"]}>
							<h3>Tu rating</h3>
							<div className={styles["graph__rating"]}>
								{/*Aqui va la grafica de rating*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</SellerLayout>
	);
};


export const getServerSideProps = async (ctx) => {
	const products = await getProductsBySeller(5); 
	
	return {
		props: {
			products, 
		}
	}
}

export default SellerDashboardPage;
