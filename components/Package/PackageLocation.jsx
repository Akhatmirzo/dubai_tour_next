import React from "react";
import { BookTheTourCard } from "../Cards/BookTheTourCard";

export const PackageLocation = ({ packageData }) => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-lg">
        <BookTheTourCard packageData={packageData} />
      </div>
    </div>
  );
};
