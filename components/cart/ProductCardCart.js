/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import { forceReload, formatCurrency } from '../../helpers';
import Link from 'next/link';
import axios from 'axios';

import styles from "../../styles/modules/Cart.module.css";

export const ProductCardCart = ({ id, product, quantity }) => {

    const [productQuantity, setProductQuantity] = useState(quantity);

    const updateQuantity = async (e) => {
        setProductQuantity(Number(e.target.value));
        forceReload();
    }

    const deleteProduct = async (e) => {
        await axios.delete('/api/cart/product', { data: { productId: id} });
        forceReload();
    }

    useEffect(() => {
        const updateProduct = async () => {
            await axios.put('/api/cart/product', {
                productId: id,
                quantity: productQuantity
            })
        }
        updateProduct()
    }, [productQuantity, id]);

    return (
        <article
            className={styles["product__card"]}
        >
            <div className={styles["product__content"]}>
                <div className={styles["product__image"]}>
                    <img src={product.images[0]} alt={product.name} />
                </div>
                <div className={styles["product__info"]}>
                    <div className="product__name">
                        <h4>{product.name}</h4>
                        <p>{formatCurrency(product.price)}</p>
                    </div>
                    <div className={styles["product__details"]}>
                        <div className={styles["details"]}>
                            <Link href={`/product/${product.slug}`}>
                                <a className={styles["details-link"]}>
                                    Ver detalles
                                </a>
                            </Link>
                        </div>
                        <div className={styles["item-counter"]}>
                            {product.inStock > 0 ? (
                                <select
                                    className={styles["item-counter-select"]}
                                    name="item-counter-select"
                                    onChange={(e) => updateQuantity(e)}
                                >
                                    {Array(product.inStock).fill(0).map((_, index) => (
                                        <option
                                            key={index}
                                            value={index + 1}
                                            {...(index + 1 === quantity ? { selected: true } : {})}
                                        >
                                            {index + 1 === 1 ? `${index + 1} unidad` : `${index + 1} unidades`}
                                        </option>
                                    ))}
                                </select>
                            ) : (
                                <p>Agotado</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <footer className={styles["product__footer"]}>
                <div className={styles["product__options"]}>
                    <div className={styles["item-button"]}>
                        <button
                            type="button"
                            className={styles["button-delete"]}
                            onClick={(e) => deleteProduct(e)}
                        >
                            Eliminar
                        </button>
                    </div>
                    <div
                        className={styles["item-button"]}
                    >
                    </div>
                    <button
                        type="button"
                        className={styles["button-update"]}
                    >
                        Mover a la lista de deseos
                    </button>
                </div>
            </footer>
        </article>
    )
}
