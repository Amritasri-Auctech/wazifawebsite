import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { HERO_SLIDES } from "../../constants/homeData";
import MarqueeBar from "./MarqueeBar";

const HeroSlider = () => (
  <>
    <section className="w-full">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full"
      >
        {HERO_SLIDES.map(({ id, img, alt }) => (
          <SwiperSlide key={id}>
            <img
              src={img}
              alt={alt}
              className="w-full h-[260px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover object-center"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

    <MarqueeBar />
  </>
);

export default HeroSlider;
