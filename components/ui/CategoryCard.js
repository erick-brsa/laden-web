import Link from "next/link";
import styles from "../../styles/modules/categories.module.css";

const CategoryCard = ({ category }) => {
    return (
        <div className={styles["category__card"]}>
            <Link href={`/categories/${category.path}`}>
                <a className={styles["caregory__link"]}>
                    <div className={styles["category__image"]}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={category.image} alt={`Imagen de ${category.name}`} />
                    </div>
                    <div className={styles["category__content"]}>
                        <h3 className={styles["category__title"]}>
                            {category.name}
                        </h3>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default CategoryCard