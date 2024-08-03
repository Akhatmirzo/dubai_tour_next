import Hero from "@/components/Hero/Hero";
import Packages from "@/components/Package/Packages";
import React from "react";

export default function page() {
  return (
    <div>
      <Hero
        text={"Travel With Us"}
        images={"/dubai_tour2.webp"}
        subTitle={"Search tour"}
      />

      <Packages />
    </div>
  );
}
