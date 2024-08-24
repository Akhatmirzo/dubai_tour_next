"use client";
import React from "react";
import { uid } from "uid";
import { packagesData } from "../static/Static";
import { useRouter } from "next/navigation";
import PackageCard from "../Cards/PackageCard";
import PrimaryBtn from "../Buttons/PrimaryBtn";

const Packages = () => {
  const navigate = useRouter();
  const packages = packagesData;

  const vewPackages = () => {
    window.scrollTo(0, 0);
    navigate.push("/package");
  };

  return (
    <section className="py-[50px] sm:py-[25px]">
      <div className=" container">
        <div className="flex items-center gap-[30px] flex-col">
          <div className="mb-[30px]">
            <h2 className="text-[#DF6951] text-center">TRENDY</h2>
            <h3 className=" text-4xl text-center mt-[10px] md:text-2xl">
              Our Trending Tour <br /> Packages
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-10 sm:gap-3 lg:grid-cols-2 md:grid-cols-2">
            {packages.map((item, index) => {
              return index < 6 && <PackageCard key={uid()} packageItem={item} />;
            })}
          </div>
          <PrimaryBtn text={"View Packages"} clickFn={vewPackages} />
        </div>
      </div>
    </section>
  );
};

export default Packages;
