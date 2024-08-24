"use client";
/* eslint-disable eqeqeq */
import React, { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setButtons({
          info: true,
          plan: false,
          location: false,
        });
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Hero
        text={pack?.name}
        images={pack?.image}
        subTitle={pack?.duration}
        type={"tour"}
      />

      <section className="-mt-[65px] relative z-10">
        <div className="container">
          <PackageNav buttons={buttons} setButtons={setButtons} />

          <div className="bg-white p-[38px] flex gap-5 xl:p-[20px] sm:p-0 lg:flex-col">
            <div className="flex grow">
              {buttons.info && <Information packageData={pack} />}
              {buttons.plan && <PackagePlan packageData={pack} />}
              <div className="lg:block grow hidden">
                {buttons.location && <PackageLocation packageData={pack} />}
              </div>
            </div>

            <div className="lg:hidden">
              <BookTheTourCard packageData={pack} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
