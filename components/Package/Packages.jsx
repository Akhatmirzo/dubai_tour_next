"use client";
import React, { useEffect, useState } from "react";
import PackageCard from "../Cards/PackageCard";
import { packagesData } from "../static/Static";
import { uid } from "uid";

export default function Packages() {
  const [height, setHeight] = useState(250)
  const packages = packagesData;

  const [count, setCount] = useState(6);

  const PlusCount = (index) => {
    if (packages.length >= count) {
      setCount(count + index);
    }
  };

  useEffect(() => {
    const wrap = document.getElementById("packageWrap");
    const handleScroll = () => {
      const windowWidth = window.innerWidth;
      const heightWindow = wrap.offsetHeight;
      // Sahifa oxiriga yetganligini tekshirish

      if (window.scrollY + height >= heightWindow) {
        if (count < packages?.length) {
          console.log(count);
          setHeight(height + 250)
          
          PlusCount(2);
        }
      }

      console.log(heightWindow, window.scrollY + height, height);
      
    };

    // scroll hodisasini qo'shish
    window.addEventListener("scroll", handleScroll);

    // Tozalash funksiyasi
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [height]);

  return (
    <section id="packageWrap" className="-mt-[150px] pb-10 relative z-10">
      <div className="container sm:p-[0px_!important]">
        <div className=" flex flex-col gap-10 items-center bg-white p-10 md:p-2 rounded-xl sm:p-2">
          <div className="grid grid-cols-3 gap-10 sm:gap-3 md:gap-5 lg:grid-cols-2 md:grid-cols-2">
            {packages.map((item, index) => {
              return (
                index < count && <PackageCard key={uid()} packageItem={item} />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
