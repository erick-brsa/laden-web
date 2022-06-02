import { getSession } from 'next-auth/react';
import { ProductCardWishList } from '../../components/wishList';
import { ShoppingLayout } from '../../components/layouts'
import { getUserById, getUserWishList } from '../../database';

import styles from './Saved.module.css';

const SavedProductsPage = ({ wishList, user }) => {
    
    return (
        <ShoppingLayout
            title="Laden - Lista de deseos"
            description="Lista de deseos"
        >
            <main>
                <section className="container section">
                    {
                        wishList.length > 0 ? (
                            <div className={styles["cart-container"]}>
                                <div className={styles["cart-list"]}>
                                    {wishList.map((product) => (
                                        <ProductCardWishList
                                            key={product.product.id}
                                            id={product.id}
                                            product={product.product}
                                            userId={user.id}
                                        />
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div className={styles["cart-empty"]}>
                                <h2>
                                    No tienes productos en tu Lista de deseos
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

    const wishList = await getUserWishList(user.id);

    return {
        props: {
            wishList,
            user
        }
    }
}

export default SavedProductsPage;
