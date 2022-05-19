import Image from "next/image";
import { Swiper, SwiperSlide,  } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css";

import styles from '/styles/modules/AdSlider.module.css';

const AdSlider = ({ images }) => {
    return (
        <div className={styles["slider__container"]}>
            <Swiper
                spaceBetween={10}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation
                modules={[Autoplay, Pagination, Navigation]}
                className={styles["swiper-container"]}
            >
                {/* <div className={styles["slider__btn"]}>
                    <div className={styles["swiper-button-prev"]}>
                        <ChevronLeftIcon height={80} width={80} />
                    </div>
                </div>

                <div className={styles["slider__btn"]}>
                    <div className={styles["swiper-button-next"]}>
                        <ChevronRightIcon height={80} width={80} />
                    </div>
                </div> */}

                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className={`${styles["swiper-slide"]}`}>
                            <Image layout="fill" src={image} alt="Imagen de carousel" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default AdSlider