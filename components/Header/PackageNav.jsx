import React from "react";

export const PackageNav = ({ buttons, setButtons }) => {
  const ChangeBtn = (key) => {
    const newButtons = {};

    for (const btn in buttons) {
      newButtons[btn] = false;
    }

    newButtons[key] = true;
    setButtons(newButtons);
  };
  
  return (
    <div className="flex items-center">
      <button
        className="w-full py-[55px] px-[20px] text-[20px] font-bold bg-[#F8F8F8] whitespace-nowrap sm:text-[15px] sm:py-[25px] sm:px-[10px]"
        style={{ backgroundColor: buttons.info ? "#fff" : "#f8f8f8" }}
        onClick={() => ChangeBtn("info")}
      >
        Information
      </button>
      <button
        className="w-full py-[55px] px-[20px] text-[20px] font-bold bg-[#F8F8F8] whitespace-nowrap sm:text-[15px] sm:py-[25px] sm:px-[10px]"
        style={{ backgroundColor: buttons.plan ? "#fff" : "#f8f8f8" }}
        onClick={() => ChangeBtn("plan")}
      >
        Tour Plan
      </button>
      <button
        className="hidden lg:block w-full py-[55px] px-[20px] text-[20px] font-bold bg-[#F8F8F8] whitespace-nowrap sm:text-[15px] sm:py-[25px] sm:px-[10px]"
        style={{ backgroundColor: buttons.location ? "#fff" : "#f8f8f8" }}
        onClick={() => ChangeBtn("location")}
      >
        Book Now
      </button>
    </div>
  );
};
