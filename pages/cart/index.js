import { getSession } from 'next-auth/react'
import { OrderSummary, ProductCardCart } from '../../components/cart';
import { ShoppingLayout } from '../../components/layouts';
import { getUserById, getUserCart } from '../../database';

import styles from '../../styles/modules/Cart.module.css';

const CartPage = ({ products, user }) => {
    return (
        <ShoppingLayout
            title="Laden - Carrito de compras"
            description="Página de carrito de compras"
        >
            <main>
                <section className="container section">
                    {
                        products.length > 0 ? (
                            <div className={styles["cart-container"]}>
                                <div className={styles["cart-list"]}>
                                    {products.map(({ id, product, quantity }) => (
                                        <ProductCardCart
                                            key={id}
                                            id={id}
                                            product={product}
                                            quantity={quantity}
                                        />
                                    ))}
                                </div>
                                <OrderSummary
                                    products={products}
                                />
                            </div>
                        ) : (
                            <div className={styles["cart-empty"]}>
                                <h2>
                                    Tu carrito está vacío
                                </h2>
                            </div>
                        )
                    }
                </section>
            </main>
        </ShoppingLayout>
    )
}

export const getServerSideProps = async (ctx) => {
    const session = await getSession(ctx);
    if (!session) return {
        redirect: {
            destination: '/auth/login',
            permanent: false
        }
    }

    const user = await getUserById(session.user.id);

    const products = await getUserCart(user.id);

    return {
        props: {
            products,
            user
        }
    }
}

export default CartPage
