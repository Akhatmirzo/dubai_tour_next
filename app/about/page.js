import AboutPromotion from "@/components/About/AboutPromotion";
import Hero from "@/components/Hero/Hero";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero
        text={"About Us"}
        images={"/dubai_tour3.jpg"}
        subTitle={"Book Dubai Tours"}
      />

      <AboutPromotion />
    </div>
  );
}
