import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroCarusels() {
  return (
    <div className="w-full h-full absolute top-0 left-0 z-0">
      <div className="w-full h-full z-[5] absolute top-0 left-0 bg-[#00000048]"></div>
      <Swiper
        pagination={true}
        cssMode={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={"/dubai_tour1.jpg"}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/dubai_tour2.jpg"}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={"/dubai_tour3.jpg"}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
