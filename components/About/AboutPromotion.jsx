import React from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

export default function AboutPromotion() {
  return (
    <section className="pt-[50px] pb-[100px] md:pb-[50px]">
      <div className="container flex items-center justify-between gap-[18px] lg:justify-center">
        <div className="max-w-[639px] flex flex-col items-start lg:items-center md:gap-[8px]">
          <span className="font-poppins font-bold text-[18px] leading-[27px] tracking-[10%] text-[#DF6951]">Promotion</span>
          <h2 className=" font-volkhov font-bold text-[50px] leading-[71px] text-[#181E4B] lg:text-center md:text-[40px] md:leading-[50px] sm:text-[28px] sm:leading-normal" >Book Dubai Tours, Desert Safari Tours</h2>
          <p className="max-w-[574px] font-poppins leading-[26px] mb-[23px] lg:text-center sm:text-justify">
             We take pride in delivering top-notch service, offering you an
            immersive experience in a comfortable 4×4 SUV, driven by experienced
            and licensed professional drivers. What sets us apart is our
            unbeatable self-drive off-road option through the trackless desert,
            available at the best prices in town.
          </p>

          <PrimaryBtn text={"View Packages"} />
        </div>

        <div className="lg:hidden">
            <img src={"/aboutPromotion.svg"} alt="About Tour" />
        </div>
      </div>
    </section>
  );
}
