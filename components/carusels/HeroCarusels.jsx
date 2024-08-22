import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

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
          <Image
            src={"/dubai_tour1.webp"}
            alt=""
            sizes="100vw"
            width={"100"}
            height={"100"}
            className="w-full h-full object-cover object-center"
            priority={true}
            placeholder={"blur"}
            blurDataURL="data:image/webp;base64,UklGRjoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSEtAAABtAABGBAAAA4IAA4ECAAAAAAAAAAEAAAABAAAAAQAAAgAAAPwAQIABAA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/dubai_tour2.webp"}
            alt=""
            sizes="100vw"
            width={"100"}
            height={"100"}
            className="w-full h-full object-cover object-center"
            priority={true}
            placeholder={"blur"}
            blurDataURL="data:image/webp;base64,UklGRjoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSEtAAABtAABGBAAAA4IAA4ECAAAAAAAAAAEAAAABAAAAAQAAAgAAAPwAQIABAA"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={"/dubai_tour3.webp"}
            alt=""
            sizes="100vw"
            width={"100"}
            height={"100"}
            className="w-full h-full object-cover object-center"
            priority={true}
            placeholder={"blur"}
            blurDataURL="data:image/webp;base64,UklGRjoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSEtAAABtAABGBAAAA4IAA4ECAAAAAAAAAAEAAAABAAAAAQAAAgAAAPwAQIABAA"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
