import React from "react";
import { uid } from "uid";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const PackagePlan = ({ packageData }) => {
  const {
    destination,
    departure,
    departure_time,
    return_time,
    duration,
    not_included,
    included,
  } = packageData || {};
  return (
    <div>
      <div className="flex flex-col gap-[40px] sm:gap-[10px] mt-[40px] sm:mt-[20px]">
        <div className="flex items-center flex-wrap">
          <h3 className="w-[300px] whitespace-nowrap text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">
            Destination
          </h3>
          <div className="w-full flex items-center">
            <p className="sm:text-[12px] leading-normal">{destination}</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap">
          <h3 className="w-[300px] whitespace-nowrap text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">
            Departure
          </h3>
          <div className="w-full flex items-center">
            <p className="sm:text-[12px] leading-normal">{departure}</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap">
          <h3 className="w-[300px] whitespace-nowrap text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">
            Departure Time
          </h3>
          <div className="w-full flex items-center">
            <p className="sm:text-[12px] leading-normal">{departure_time}</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap">
          <h3 className="w-[300px] whitespace-nowrap text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">
            Return Time
          </h3>
          <div className="w-full flex items-center">
            <p className="sm:text-[12px] leading-normal">{return_time}</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap">
          <h3 className="w-[300px] whitespace-nowrap text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">
            Duration
          </h3>
          <div className="w-full flex items-center">
            <p className="sm:text-[12px] leading-normal">{duration}</p>
          </div>
        </div>
        <div className="flex items-center flex-wrap">
          <h3 className="w-[300px] whitespace-nowrap text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">
            Not included
          </h3>
          <div className="w-full flex items-center gap-5 flex-wrap">
            {not_included.map((item) => (
              <p key={uid()} className="sm:text-[12px] leading-normal">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-3">
          <h3 className="w-[300px] whitespace-nowrap text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">
            Included
          </h3>
          <div className="flex items-center gap-5 flex-wrap w-full">
            {included.map((item) => (
              <p key={uid()} className="sm:text-[12px] leading-normal">
                <span className="text-[#0bf250]">
                  <CheckCircleIcon />
                </span>{" "}
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
