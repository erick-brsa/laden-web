import styles from './Pretty.module.css'

export const Banner = ({ image, title }) => {
    return (
        <section className={styles["banner"]}>
            <img src={image} alt="Imagen banner" />
            <h1 className={styles["banner__title"]}>{title}</h1>
        </section>
    )
}
