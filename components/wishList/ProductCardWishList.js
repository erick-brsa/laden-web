/* eslint-disable @next/next/no-img-element */
// import { useState, useEffect } from 'react';
import { forceReload, formatCurrency } from '../../helpers';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

import styles from "../../styles/modules/Cart.module.css";

export const ProductCardWishList = ({ id, product, userId }) => {

    const router = useRouter();

    const deleteProduct = async (e) => {
        await axios.delete('/api/wishlist/product', { data: { wishListId: id} });
        forceReload();
    }

    const addToCart = async (e) => {
        await axios.put('/api/wishlist/product', {
            wishListId: id,
            userId: userId,
        });
        router.push('/cart');
    }

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
                                <p>En stock: {product.inStock}</p>
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
                        onClick={(e) => addToCart(e)}
                    >
                        Mover al carrito
                    </button>
                </div>
            </footer>
        </article>
    )
}
