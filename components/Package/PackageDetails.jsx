"use client";
/* eslint-disable eqeqeq */
import React, { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Hero from "../Hero/Hero";
import { PackageNav } from "../Header/PackageNav";
import { Information } from "./Information";
import { PackagePlan } from "./PackagePlan";
import { PackageLocation } from "./PackageLocation";
import { BookTheTourCard } from "../Cards/BookTheTourCard";
import { packagesData } from "../static/Static";

export default function PackageDetails() {
  const packages = packagesData;
  const { id } = useParams();

  const [buttons, setButtons] = useState({
    info: true,
    plan: false,
    location: false,
  });

  const pack = useMemo(() => {
    return packages.find((item) => item.id == id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div>
      <Hero
        text={"Landscapes"}
        images={"/dubai_tour2.webp"}
        subTitle={"Explore"}
      />

      <div className="-mt-[65px] relative z-10">
        <div className="container">
          <PackageNav buttons={buttons} setButtons={setButtons} />

          <div className="bg-white p-[38px] flex gap-5 xl:p-[20px] lg:flex-col">
            <div className="flex grow">
              {buttons.info && <Information packageData={pack} />}
              {buttons.plan && <PackagePlan packageData={pack} />}
              {buttons.location && <PackageLocation packageData={pack} />}
            </div>

            <BookTheTourCard packageData={pack} />
          </div>
        </div>
      </div>
    </div>
  );
}
