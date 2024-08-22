import Image from "next/image";
import React from "react";

const Amazong = () => {
  return (
    <section className="my-[118px] lg:my-[85px] md:hidden">
      <Image
        sizes="100vw"
        width={"100"}
        height={"100"}
        src={"/photoAmazong.webp"}
        alt=""
        className="w-full text-center"
      />
    </section>
  );
};

export default Amazong;
