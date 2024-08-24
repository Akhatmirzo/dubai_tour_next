"use client";
import React from "react";
import HeroCarusels from "../carusels/HeroCarusels";

export default function Hero() {
  return (
    <section className={`w-full h-screen sm:h-[calc(100vh-30vh)] relative`}>
      <HeroCarusels />
      <div className="container z-[1] relative h-full flex items-center lg:justify-center">
        <h2
          data-aos="fade-right"
          className="max-w-[630px] text-[55px] font-poppins leading-[68px] font-bold text-white hero_title xl:text-[50px] md:text-[35px] sm:text-[24px] md:max-w-[400px] sm:max-w-[280px] xl:leading-[60px] md:leading-normal xl:max-w-[580px] lg:text-center"
        >
          We are <span className="hero_title">Expert</span> in{" "}
          <span>Desert Safari | Dubai &</span>{" "}
          <span>Abu Dhabi City Tour</span>
        </h2>
      </div>
    </section>
  );
}
