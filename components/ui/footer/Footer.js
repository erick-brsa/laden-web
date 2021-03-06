import Link from 'next/link'
import styles from '/styles/modules/Footer.module.css'

export const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__container"]}>
                <div className={`container ${styles["footer__section-top"]}`}>
                    <div className={styles["footer__about"]}>
                        <div className={styles["footer__about-title"]}>
                            <h4 className={styles["footer__title"]}>
                                Acerca de la empresa
                            </h4>
                        </div>
                        <div className={styles["footer__content"]}>
                            <ul className={styles["footer__list"]}>
                                <li className={styles["footer__item"]}>
                                    <Link href="/team">
                                        <a className={styles["footer__link"]}>
                                            ¿Qué es kisin?
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles["footer__item"]}>
                                    <Link href="/team">
                                        <a className={styles["footer__link"]}>
                                            El equipo
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles["footer__item"]}>
                                    <Link href="/team">
                                        <a className={styles["footer__link"]}>
                                            Misión
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles["footer__item"]}>
                                    <Link href="/team">
                                        <a className={styles["footer__link"]}>
                                            Visión
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["footer__help"]}>
                        <div className={styles["footer__help-title"]}>
                            <h4 className={styles["footer__title"]}>
                                Servicios
                            </h4>
                        </div>
                        <div className={styles["footer__help-content"]}>
                            <ul className={styles["footer__list"]}>
                                <li className={styles["footer__item"]}>
                                    <Link href="/suggestions">
                                        <a className={styles["footer__link"]}>
                                            Dudas y sugerencias
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles["footer__item"]}>
                                    <Link href="/privacity">
                                        <a className={styles["footer__link"]}>
                                            Política de privacidad
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles["footer__item"]}>
                                    <Link href="/terms-and-conditions">
                                        <a className={styles["footer__link"]}>
                                            Términos y condiciones
                                        </a>
                                    </Link>
                                </li>
                                <li className={styles["footer__item"]}>
                                    <Link href="/services">
                                        <a className={styles["footer__link"]}>
                                            Nuestros servicios
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles["footer__social"]}>
                        <div className={styles["footer__social-title"]}>
                            <h4 className={styles["footer__title"]}>
                                Redes sociales
                            </h4>
                        </div>
                        <div className={styles["footer__social-content"]}>
                            <ul className="footer__list">
                                <li className={styles["footer__item"]}>
                                    <a href="https://www.facebook.com/laden.mx/" className={styles["footer__link"]} target="_black">
                                        Facebook
                                    </a>
                                </li>
                                <li className={styles["footer__item"]}>
                                    <a href="#" className={styles["footer__link"]}>
                                        Instagram
                                    </a>
                                </li>
                                <li className={styles["footer__item"]}>
                                    <a href="#" className={styles["footer__link"]}>
                                        Twitter
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles["footer__section-bottom"]}>
                    <p>
                        &copy;
                        2022 {''}
                        <span className={styles["footer__company"]}>
                            KISIN {''}
                        </span>
                        - Todos los Derechos Reservados.
                    </p>
                </div>
            </div>
        </footer>
    )
}
