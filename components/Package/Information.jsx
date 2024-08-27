import React from "react";
import { uid } from "uid";

export const Information = ({ packageData }) => {
  const { name, price, sellPrice, description, person } = packageData || {};
  return (
    <div className="w-full">
      <div className="max-w-[644px] flex items-center justify-between mt-[29px] flex-wrap">
        <h2 className="text-[31px] sm:text-[20px] sm:leading-normal text-[#181E4B] leading-[40px] font-bold">
          {name}
        </h2>
        <h3 className="flex items-center text-[29px] sm:text-[22px] font-poppins font-medium text-[#DF6951]">
          <span>
            {sellPrice && (
              <span className="text-[#DF6951]">{"$" + sellPrice}</span>
            )}
            {price ||
              (price > 0 && (
                <span
                  className={`line-through text-gray-400 ml-[15px] ${
                    sellPrice && "text-[20px]"
                  }`}
                >
                  ${price}
                </span>
              ))}
          </span>
          <span className="text-[16px] font-normal leading-[24px]">
            / {person}
          </span>
        </h3>
      </div>

      <p className="leading-[26px] text-sm font-poppins mt-[33px] sm:text-justify">
        {description}
      </p>
    </div>
  );
};
