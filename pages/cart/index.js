import { CartList, OrderSummary } from '../../components/cart';
import { ShoppingLayout } from '../../components/layouts';
import { getSomeProducts } from '../../database';

import styles from '../../styles/modules/Cart.module.css';

const CartPage = ({ products }) => {
    return (
        <ShoppingLayout
            title="Laden - Carrito de compras"
            description="Página de carrito de compras"
        >
            <main>
                <section className="container section">
                    <div className={styles["cart-container"]}>
                        <CartList products={products} />
                        <OrderSummary />
                    </div>
                </section>
            </main>
        </ShoppingLayout>
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

export default CartPage