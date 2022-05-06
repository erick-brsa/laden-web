import CartList from '../../components/cart/CartList';
import OrderSummary from '../../components/cart/OrderSummary';
import ShoppingLayout from '../../components/layouts/ShoppingLayout';
import styles from '../../styles/modules/Cart.module.css';
import { getSomeProducts } from '../../database';

const CartPage = ({products}) => {
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
    console.log(products);
    return {
        props: {
            products
        }
    }
}

export default CartPage