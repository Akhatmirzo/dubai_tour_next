"use client"
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="pt-[94px] pb-[44px] md:pt-[44px] sm:py-[25px] shadow-slate-500 shadow-2xl">
      <div className="container">
        <div className="flex lg:flex-col">
          <div className="w-1/2 flex flex-col lg:items-center lg:w-full gap-5 ">
            <Link href={"/"} className="relative inline-block">
              <h2 className="text-[32px] font-semibold ">Travel</h2>
              <svg
                width="97"
                height="24"
                viewBox="0 0 97 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`absolute -bottom-3 left-7`}
              >
                <path
                  d="M-0.000159763 8.123C5.57689 16.1055 29.8412 24.0512 46.1619 23.5525C63.8029 23.0535 73.4634 19.5629 92.271 6.72747C92.2164 8.13281 92.0507 9.27648 92.0775 10.3197C92.0581 11.5099 92.0496 12.7683 92.3014 13.9154C92.3556 14.256 93.063 14.7721 93.4805 14.7756C93.898 14.779 94.5 14.1945 94.5815 13.8324C95.2819 10.3691 95.8468 6.92736 96.4686 3.40671C96.6344 2.26304 96.0978 1.51032 94.8914 1.35287C90.3125 0.963219 85.7229 0.505451 81.0871 0.194684C80.0379 0.151919 78.8612 0.618258 77.5056 0.83369C79.0555 3.5902 81.4414 2.86186 83.3228 3.33104C85.2827 3.85756 87.3241 4.02198 89.8263 4.46232C84.8067 9.17069 79.4921 12.4595 73.6979 14.9166C52.4894 24.0134 31.4195 22.6132 10.6745 13.2004C7.97467 11.9535 5.43486 10.4018 2.79197 9.07594C1.99227 8.85386 1.26034 8.62101 -0.000159763 8.123Z"
                  fill="#E09132"
                  className={` transition-[fill] duration-500 `}
                />
              </svg>
            </Link>
            <h3 className=" w-[213px] flex flex-col text-[16px] font-medium text-[#757095] leading-7 tracking-[-2%] lg:w-1/2 sm:w-full lg:text-center">
              BOOK DUBAI TOURS is one of the “Best Desert Safari” tour operator
              in Dubai. We provides 5-star ☆☆☆☆☆ Desert Safari .
            </h3>
          </div>
          <div className="mt-[15px] w-full flex justify-between gap-5 md:flex-col">
            <div className="flex flex-col gap-3 md:hidden">
              <h2 className="text-[20px] font-semibold ">Company</h2>
              <div className="flex flex-col">
                <Link href={"/about"}>
                  About Us
                </Link>
                <Link href={"/"} className="mt-[12px]">Careers</Link>
                <Link href={"/"} className="mt-[12px]">Blog</Link>
                <Link href={"/"} className="mt-[12px]">Pricing</Link>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:hidden">
              <h2 className="text-[20px] font-semibold ">Destinations</h2>
              <div className="flex flex-col">
                <Link href={"/"}>Maldives</Link>
                <Link href={"/"} className="mt-[12px]">Los Angelas</Link>
                <Link href={"/"} className="mt-[12px]">Las Vegas</Link>
                <Link href={"/"} className="mt-[12px]">Torronto</Link>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
