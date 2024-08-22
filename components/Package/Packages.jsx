"use client";
import React, { useState } from "react";
import PackageCard from "../Cards/PackageCard";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { packagesData } from "../static/Static";
import { uid } from "uid";

export default function Packages() {
  const packages = packagesData;
  const [count, setCount] = useState(6);

  const PlusCount = () => {
    if (packagesData.length >= count) {
      setCount(count + 6);
    }
  };

  return (
    <section className="mt-[-150px] relative z-10">
      <div className="container sm:p-[0px_!important]">
        <div className=" flex flex-col gap-10 items-center bg-white p-10 rounded-xl sm:p-2">
          <div className="grid grid-cols-3 gap-10 sm:gap-3 lg:grid-cols-2 md:grid-cols-2">
            {packages.map((item, index) => {
              return (
                index < count && <PackageCard key={uid()} packageItem={item} />
              );
            })}
          </div>
          <PrimaryBtn text={"See more"} clickFn={PlusCount} />
        </div>
      </div>
    </section>
  );
}
