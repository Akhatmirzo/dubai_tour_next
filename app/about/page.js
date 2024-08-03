import AboutPromotion from "@/components/About/AboutPromotion";
import Hero from "@/components/Hero/Hero";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero
        text={"About Us"}
        images={"/dubai_tour1.webp"}
        subTitle={"Book Dubai Tours"}
      />

      <AboutPromotion />
    </div>
  );
}
