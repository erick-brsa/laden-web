import styles from '../../styles/modules/Cart.module.css';

const OrderSummary = () => {
    return (
        <div className={styles["order-sumary"]}>
            <div className={styles["order-sumary__title"]}>
                <h4>
                    Resumen de la compra
                </h4>
            </div>
            <div className={styles["order-summary__total"]}>
                $5,856.56
            </div>
            <div className={styles["order-summary__button"]}>
                <a href="#" className={styles["order-sumary--button"]}>
                    Comprar
                </a>
            </div>
        </div>
    )
}

export default OrderSummary