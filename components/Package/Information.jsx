import React from "react";
import { uid } from "uid";

export const Information = ({ packageData }) => {
  const { name, price, sellPrice, description, destination, departure, departure_time, return_time, duration, not_included, included } = packageData || {};
  return (
    <div className="w-full">
      <div className="max-w-[644px] flex items-center justify-between mt-[29px] flex-wrap">
        <h2 className="text-[31px] text-[#181E4B] leading-[40px] font-bold">
          {name}
        </h2>
        <h3 className="flex items-center text-[29px] font-poppins font-medium text-[#DF6951]">
          <span>
            {sellPrice && <span className="text-[#DF6951]">{sellPrice + ' AED'}</span>}
            <span className={`line-through text-gray-400 ml-[15px] ${sellPrice && 'text-[20px]'}`}>
              {price} AED
            </span>
          </span>
          <span className="text-[16px] font-normal leading-[24px]">
            / Per Couple
          </span>
        </h3>
      </div>

      <p className="leading-[26px] font-poppins mt-[33px] sm:text-justify">{description}</p>

      <div className="flex flex-col gap-[40px] mt-[40px]">
        <div className="flex items-center"> 
          <h3 className="w-[300px] text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">Destination</h3>
          <div className="flex items-center">
            <p className="sm:text-[12px] leading-normal">{destination}</p>
          </div>
        </div>
        <div className="flex items-center"> 
          <h3 className="w-[300px] text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">Departure</h3>
          <div className="flex items-center">
            <p className="sm:text-[12px] leading-normal">{departure}</p>
          </div>
        </div>
        <div className="flex items-center"> 
          <h3 className="w-[300px] text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">Departure Time</h3>
          <div className="flex items-center">
            <p className="sm:text-[12px] leading-normal">{departure_time}</p>
          </div>
        </div>
        <div className="flex items-center"> 
          <h3 className="w-[300px] text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">Return Time</h3>
          <div className="flex items-center">
            <p className="sm:text-[12px] leading-normal">{return_time}</p>
          </div>
        </div>
        <div className="flex items-center"> 
          <h3 className="w-[300px] text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">Duration</h3>
          <div className="flex items-center">
            <p className="sm:text-[12px] leading-normal">{duration}</p>
          </div>
        </div>
        <div className="flex items-center"> 
          <h3 className="w-[300px] text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">Not included</h3>
          <div className="flex items-center gap-5 flex-wrap">
            {
              not_included.map(item => (
                <p key={uid()} className="sm:text-[12px] leading-normal">{item}</p>
              ))
            }
          </div>
        </div>
        <div className="flex items-center"> 
          <h3 className="w-[300px] text-[#DF6951] text-[20px] font-bold xl:w-1/2 sm:text-[16px]">Included</h3>
          <div className="flex items-center gap-5 flex-wrap w-full">
            {
              included.map(item => (
                <p key={uid()} className="sm:text-[12px] leading-normal">{item}</p>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
