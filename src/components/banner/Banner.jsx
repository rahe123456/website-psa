/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

export default function Banner({ slides, options = {}, className = " " }) {
  const defaultOptions = {
    spaceBetween: 30,
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 2000,
    navigation: true,
    pagination: { clickable: true },
    autoplay: { delay: 3000, disableOnInteraction: false },
    modules: [EffectFade, Navigation, Pagination, Autoplay],
    breakpoints: {
      1024: {
        slidesPerView: 1, // 1 slide visible en pantallas grandes
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },
  };

  // Combinar configuraciones predeterminadas con las opciones pasadas como props
  const swiperOptions = { ...defaultOptions, ...options };

  return (
    <Swiper {...swiperOptions} className={`${className}`}>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slide-content">
            <div className="content-bg">
              <img src={slide.image} alt={slide.title} />
            </div>
            <div className="overlay">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
