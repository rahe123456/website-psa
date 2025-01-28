import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./carrousel.css";

export default function carrousel({
  carrousel,
  options = {},
  className = " ",
}) {
  const defaultOptions = {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: false,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: false,
    modules: [EffectCoverflow, Pagination, Autoplay],
    className: "carrousel-swiper",
  };

  const swiperOptionsCa = { ...defaultOptions, ...options };

  return (
    <Swiper {...swiperOptionsCa} className={`${className}`}>
      {carrousel.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
