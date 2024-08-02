import React from "react";

export default function PrimaryBtn({ text, clickFn, mediaStyle }) {
  return (
    <button
      onClick={clickFn && clickFn}
      className={`px-[25px] py-[18px] bg-[#E09132] rounded-[10px] text-[18px] font-medium text-white 3xl:py-[14px] 3xl:text-[16px] lg:py-[10px] md:px-[20px] ${mediaStyle}`}
    >
      {text}
    </button>
  );
}
