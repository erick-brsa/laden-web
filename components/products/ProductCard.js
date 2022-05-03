/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { formatCurrency } from "../../helpers";
import { StarIcon as StarIconSolid } from '@heroicons/react/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/outline'
import styles from "/styles/modules/ProductCard.module.css";

const ProductCard = ({ name, price, slug, images }) => {
    return (
        <article className={styles["product__card"]}>
            <Link href={`/product/${slug}`}>
                <a className={styles["product__link"]}>
                    <div className={styles["product__content"]}>
                        <div className={styles["product__image"]}>
                            <img src={`${images[0]}`} alt={`Imagen de ${name}`} />
                        </div>
                        <div className={styles["product__info"]}>
                            <p className={styles["product__name"]}>
                                {name}
                            </p>
                            <div className={styles["product__rating"]}>
                                <div className={styles["product__stars"]}>
                                    <StarIconSolid height={25} width={25} />
                                    <StarIconSolid height={25} width={25} />
                                    <StarIconSolid height={25} width={25} />
                                    <StarIconSolid height={25} width={25} />
                                    <StarIconOutline height={24} width={24} />
                                </div>
                                <div className={styles["product__reviews"]}>
                                    <span>
                                        (23)
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

export default ProductCard