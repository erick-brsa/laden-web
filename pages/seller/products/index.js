import styles from "../../../styles/modules/Seller.module.css";
import { ProductCard } from "../../../components/products";
import { SellerLayout } from "../../../components/layouts/SellerLayout";
import { PlusIcon } from "@heroicons/react/solid";
import { getProductsBySeller } from "/database";
import { getSession } from "next-auth/react";
import { getUserById } from "../../../database";
import Link from "next/link";

const SellerProductsPage = ({ products }) => {
	return (
		<SellerLayout
			title="Laden - Tus productos"
			description="Productos del vendedor"
		>
			<div className={styles["container__page-products"]}>
				<h2>Tus Productos</h2>
				<div className={styles["container__filter"]}>
					<div className={styles["filter__content"]}>
						<div className={styles["text__filter"]}>Filtrar por:</div>
						<div className={styles["select"]}>
							<select className={styles["filter"]}>
								<option>Por calificacion</option>
								<option>Por ventas</option>
							</select>
						</div>
					</div>
					<Link href="/seller/product/new">
						<a className={styles["add__product"]}>
							<PlusIcon height={24} width={24} />
							<span className={styles["nav__name"]}>Agregar Producto</span>
						</a>
					</Link>
				</div>
				<section className={styles["container__section"]}>
					<h3 className="section__title">
						{products.length > 0 ? "Tus productos" : "No tienes productos"}
					</h3>
					<div className="products__container">
						{products.map((product) => (
							<ProductCard key={product.id} {...product} seller />
						))}
					</div>
				</section>
			</div>
		</SellerLayout>
	);
};

export const getServerSideProps = async (ctx) => {
	const session = await getSession(ctx)

	if (!session) return {
		redirect: { destination: "/auth/login", permanent: false }
	}

	const user = await getUserById(session.user.id);
	if (user.role !== "vendedor") return {
		redirect: { destination: "/", permanent: false }
	}

	const products = await getProductsBySeller(user.id);

	return {
		props: { products },
	};
};

export default SellerProductsPage;
