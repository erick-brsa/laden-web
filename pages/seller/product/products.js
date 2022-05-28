import styles from "../../styles/modules/Seller.module.css";
import { ProductCard } from "../../../components/products";
import { SellerLayout } from "../../../components/layouts/SellerLayout";
import { PlusIcon } from "@heroicons/react/solid";


const SellerProductPage = ({ products}) => {
	console.log(products);
	return (
		<SellerLayout>
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
					<div className={styles["add__product"]}>
						<PlusIcon height={24} width={24} />
						<span className={styles["nav__name"]}>Agregar Producto</span>
					</div>
				</div>
				<section className={styles["container__section"]}>
					<h3 className="section__title">Productos</h3>
					<div className="products__container">
						{products.map((product) => (
							<ProductCard key={product.id} {...product} />
						))} 
					</div>
				</section>
			</div> 
		</SellerLayout>
	);
};

export const getProductsBySeller = async (id) => {
    await prisma.$connect();
    const products = await prisma.product.findMany({
        include: { review: { select: { id: true } } },
        where: { sellerId: 5 },
    });
    await products.map(product => getRating(product));

    await prisma.$disconnect();
    return res.status(200).json(products);
}

export default SellerProductPage;