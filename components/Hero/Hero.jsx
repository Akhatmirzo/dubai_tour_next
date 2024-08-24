import Image from "next/image";
import React from "react";

export default function Hero({ text, subTitle, images, type }) {
  return (
    <section className={`w-full h-screen sm:h-[calc(100vh-30vh)] relative`}>
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <div className="w-full h-full z-[5] absolute top-0 left-0 bg-[#00000048]"></div>
        <Image
          sizes="100vw"
          width={"100"}
          height={"100"}
          src={images}
          blurDataURL="data:image/webp;base64,UklGRjoAAABXRUJQVlA4WAoAAAAQAAAADwAABwAAQUxQSEtAAABtAABGBAAAA4IAA4ECAAAAAAAAAAEAAAABAAAAAQAAAgAAAPwAQIABAA"
          placeholder={"blur"}
          priority={true}
          alt=""
          className="w-full h-full object-cover object-center relative z-[1]"
        />
      </div>
      <div className="container z-[1] relative h-full flex flex-col items-center justify-center">
        {type === "tour" ? (
          <>
            <span className="mb-3 font-poppins font-bold text-[18px] leading-[27px] tracking-[10%] text-white 2xl:text-[16px] 2xl:leading-normal 2xl:font-semibold lg:text-[14px]">
              {subTitle}
            </span>
            <h2 className="w-1/2 text-center font-yesteryear text-7xl xl:text-6xl xl:w-2/3 md:w-3/4 md:text-5xl sm:text-4xl sm:w-full font-normal text-white">
              {text}
            </h2>
          </>
        ) : (
          <>
            <span className=" font-poppins font-bold text-[18px] leading-[27px] tracking-[10%] text-white 2xl:text-[16px] 2xl:leading-normal 2xl:font-semibold lg:text-[14px]">
              {subTitle}
            </span>
            <h2 className="font-yesteryear text-[157px] leading-[223px] font-normal text-white 3xl:text-[120px] 3xl:leading-[180px] 2xl:text-[110px] 2xl:leading-[150px] xl:text-[100px] xl:leading-[120px] lg:text-[80px] md:text-[50px] lg:leading-normal sm:text-center">
              {text}
            </h2>
          </>
        )}
      </div>
    </section>
  );
}
