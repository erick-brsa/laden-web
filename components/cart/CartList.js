import styles from "../../styles/modules/Cart.module.css";

const CartList = ({ products }) => {
    return (
        <div className={styles["cart-list"]}>
            {products.map(product => (
                <article
                    key={product.id}
                    className={styles["product__card"]}
                >
                    <div className={styles["product__content"]}>
                        <div className={styles["product__image"]}>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={product.images[0]} alt={product.name} />
                        </div>
                        <div className={styles["product__info"]}>
                            <div className="product__name">
                                <h4>{product.name}</h4>
                            </div>
                            <div className={styles["product__details"]}>
                                <div className={styles["details"]}>
                                    <a href="#" className={styles["details-link"]}>
                                        Ver detalles
                                    </a>
                                </div>
                                <div className={styles["item-counter"]}>
                                    <select name="" id="">
                                        <option value="1">1 unidad</option>
                                        <option value="2">2 unidad</option>
                                        <option value="3">3 unidad</option>
                                        <option value="4">4 unidad</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className={styles["product__footer"]}>
                        <div className={styles["product__options"]}>
                            <div className={styles["item-button"]}>
                                <button type="button" className={styles["button-delete"]}>
                                    Eliminar
                                </button>
                            </div>
                            <div className={styles["item-button"]}>Mover a la lista de deseos</div>
                        </div>
                    </footer>
                </article>
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

export default CartList