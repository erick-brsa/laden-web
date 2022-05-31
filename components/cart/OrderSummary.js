import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../../styles/modules/Cart.module.css';
import { formatCurrency } from '../../helpers';

export const OrderSummary = ({ products }) => {
    
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = products.reduce((acc, { product, quantity }) => {
            return acc + (product.price * quantity);
        }, 0);
        setTotal(newTotal);
    }, [products]);
    
    return (
        <div className={styles["order-summary"]}>
            <div className={styles["order-summary__title"]}>
                <h4>
                    Resumen de la compra
                </h4>
            </div>
            <div className={styles["order-summary__total"]}>
                {`Total: ${formatCurrency(total)}`}
            </div>
            <div className={styles["order-summary__button"]}>
                <Link href="/cart/checkout">
                    <a className={styles["order-sumary--button"]}>
                        Comprar
                    </a>
                </Link>
            </div>
        </div>
    )
}

