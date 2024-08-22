"use client";
import React from "react";
import Accordions from "../Accordion/Accordions";
import Image from "next/image";

export default function Advantages() {
  return (
    <section className="py-[150px] pb-0 xl:py-[120px] sm:py-[50px]">
      <div className="container flex items-center gap-5">
        <div className="relative w-[654px] h-[745px] flex items-end justify-end 2xl:w-[600px] 2xl:h-[700px] lg:hidden">
          <div className="relative w-[73%] h-[95%] mr-[16px] advantages_hero xl:mr-[12px]">
            <Image
              src={"/advantages2.webp"}
              alt=""
              sizes="100vw"
              width={"100"}
              height={"100"}
              className="w-full h-full object-cover origin-center rounded-t-full"
            />
          </div>

          <span className="cursor-vertical-text opacity-[10%] text-[51px] font-bold font-poppins leading-[68px] whitespace-nowrap absolute bottom-1/3 left-5 -rotate-90 -translate-x-1/3 -translate-y-1/3">
            Dubai Safari Packages
          </span>

          <div className="absolute top-0 left-[67px] w-[230px] h-[230px] rounded-full overflow-hidden 2xl:w-[180px] 2xl:h-[180px]">
            <Image
              src={"/advantages1.webp"}
              alt=""
              sizes="100vw"
              width={"100"}
              height={"100"}
              className="w-full h-full object-cover object-center "
            />
          </div>

          <div className="absolute top-1/3 left-0 w-[141px] h-[141px] rounded-full overflow-hidden 2xl:w-[120px] 2xl:h-[120px]">
            <Image
              src={"/advantages4.webp"}
              alt=""
              sizes="100vw"
              width={"100"}
              height={"100"}
              className="w-full h-full object-cover object-center "
            />
          </div>

          <div className="absolute top-0 left-1/2 w-[74px] h-[74px] rounded-full overflow-hidden">
            <Image
              src={"/advantages3.webp"}
              alt=""
              sizes="100vw"
              width={"100"}
              height={"100"}
              className="w-full h-full object-cover object-center "
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col gap-5 lg:w-full">
          <h2 className="text-3xl text-center font-bold font-poppins text-[#E09132] sm:text-lg">
            Advantages
          </h2>
          <Accordions />
        </div>
      </div>
    </section>
  );
}
