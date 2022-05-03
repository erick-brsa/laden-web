import { Swiper, SwiperSlide } from "swiper/react";

// import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css";

import styles from "/styles/modules/ProductCarousel.module.css"

const ProductCarousel = ({ title, products }) => {

    return (
        <section className="container section">
            <h3 className="section__title">{title}</h3>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                breakpoints={{
                    320: {
                        width: 320,
                        slidesPerView: 1,
                    },
                    640: {
                        width: 640,
                        slidesPerView: 2,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                    1024: {
                        width: 1024,
                        slidesPerView: 4,
                    }
                }}
                className={styles["swiper-container"]}
            >
                {products.map(product => {
                    const { id, name, images } = product
                    return (
                        <SwiperSlide key={id}>
                            <article className={`${styles["product__card"]} ${styles[" carousel__slick"]}`}>
                                <a className={styles["product__link"]} href="./productos/1">
                                    <div className={styles["product__content"]}>
                                        <div className={styles["product__image"]}>
                                            <img src={images[0]} alt="Imagen de producto" />
                                        </div>
                                        <div className={styles["product__info"]}>
                                            <p className={styles["product__name"]}>
                                                {name}
                                            </p>
                                        </div>
                                    </div>
                                </a>
                            </article>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default ProductCarousel