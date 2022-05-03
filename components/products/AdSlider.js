import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/bundle";
import "swiper/css";

import styles from '/styles/modules/AdSlider.module.css';

const AdSlider = ({ images }) => {
    return (
        <div>
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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className={`mySwiper ${styles.swiper}`}
            >
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