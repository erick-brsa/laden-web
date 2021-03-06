/* eslint-disable @next/next/no-img-element */
import { useState, useMemo } from 'react';
import Link from "next/link";
import { formatCurrency } from "../../helpers";
import { StarIcon as StarIconSolid } from '@heroicons/react/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/outline'
import styles from "/styles/modules/ProductCard.module.css";

export const ProductCard = ({ name, price, slug, images, rating, review, seller }) => {

    const [isHovered, setIsHovered] = useState(false);

    const productImage = useMemo(() => {
        if (images.length > 1) {
            return isHovered ? images[1] : images[0];
        }
        return images[0]
    }, [isHovered, images])

    return (
        <article 
            className={styles["product__card"]}
            onMouseEnter={ () => setIsHovered(true) } 
            onMouseLeave={ () => setIsHovered(false) } 
        >
            <Link href={seller ? `/seller/product/${slug}` : `/product/${slug}`}>
                <a className={styles["product__link"]}>
                    <div className={styles["product__content"]}>
                        <div className={styles["product__image"]}>
                            <img src={productImage} alt={`Imagen de ${name}`} />
                        </div>
                        <div className={styles["product__info"]}>
                            <p className={styles["product__name"]}>
                                {name}
                            </p>
                            <div className={styles["product__rating"]}>
                                <div className={styles["product__stars"]}>
                                    {Array(5)
                                        .fill('solid', 0, rating)
                                        .fill('outline', rating, 5)
                                        .map((star, index) => (
                                            star == 'solid' 
                                            ? <StarIconSolid key={index} height={24} width={24} />
                                            : <StarIconOutline key={index} height={24} width={24} />
                                        ))
                                    }
                                </div>
                                <div className={styles["product__reviews"]}>
                                    <span>
                                        {`(${review.length})`}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className={styles["product__footer"]}>
                        <p className={styles["product__price"]}>
                            <span>
                                {formatCurrency(price)}
                            </span>
                        </p>
                    </footer>
                </a>
            </Link>
        </article>
    )
}
