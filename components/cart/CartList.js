import Link from "next/link";

import styles from "../../styles/modules/Cart.module.css";
import { ProductCardCart } from "./ProductCardCart";

export const CartList = ({ products }) => {
    return (
        <div className={styles["cart-list"]}>
            {products.map(product => (
                <ProductCardCart product={product} key={product.id} />
            ))}
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
    const products = await getSomeProducts(10);

    return {
        props: {
            products
        }
    }
}
