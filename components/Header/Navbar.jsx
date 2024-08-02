"use client"
import React, { useEffect, useMemo, useState } from "react";
import "./style.css";
import Link from "next/link";
import PrimaryBtn from "../Buttons/PrimaryBtn";
import { usePathname } from 'next/navigation'
import { uid } from "uid";

export default function Navbar() {
  const [isHumburger, setIsHumburger] = useState(false);
  const pathname = usePathname();

  const [navLinks, setNavLinks] = useState([
    { path: "/", name: "Home", active: true },
    { path: "/about", name: "About", active: false },
    { path: "/package", name: "Packages", active: false },
  ]);

  useMemo(() => {
    setNavLinks((prevLinks) =>
      prevLinks.map((link) => ({
        ...link,
        active: link.path === pathname,
      }))
    );

    setIsHumburger(false);
  }, [pathname]);

  useEffect(() => {
    window.onscroll = (e) => {
      const winScrollY = window.scrollY;
      if (winScrollY > 45) {
        setIsHumburger(false);
      }
    };
  }, []);

  return (
    <header className="absolute w-full pt-[60px] z-[999] 3xl:pt-[30px] md:pt-[30px] sm:pt-[10px]">
      <div className="container">
        <div className="w-full flex items-center justify-between">
          <Link href={"/"} className="relative inline-block z-[99999]">
            <h2 className="text-[32px] font-bold text-white font-poppins">Travel</h2>
            <svg
              width="97"
              height="24"
              viewBox="0 0 97 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`absolute -bottom-3 -right-1/4`}
            >
              <path
                d="M-0.000159763 8.123C5.57689 16.1055 29.8412 24.0512 46.1619 23.5525C63.8029 23.0535 73.4634 19.5629 92.271 6.72747C92.2164 8.13281 92.0507 9.27648 92.0775 10.3197C92.0581 11.5099 92.0496 12.7683 92.3014 13.9154C92.3556 14.256 93.063 14.7721 93.4805 14.7756C93.898 14.779 94.5 14.1945 94.5815 13.8324C95.2819 10.3691 95.8468 6.92736 96.4686 3.40671C96.6344 2.26304 96.0978 1.51032 94.8914 1.35287C90.3125 0.963219 85.7229 0.505451 81.0871 0.194684C80.0379 0.151919 78.8612 0.618258 77.5056 0.83369C79.0555 3.5902 81.4414 2.86186 83.3228 3.33104C85.2827 3.85756 87.3241 4.02198 89.8263 4.46232C84.8067 9.17069 79.4921 12.4595 73.6979 14.9166C52.4894 24.0134 31.4195 22.6132 10.6745 13.2004C7.97467 11.9535 5.43486 10.4018 2.79197 9.07594C1.99227 8.85386 1.26034 8.62101 -0.000159763 8.123Z"
                fill="#E09132"
                className={` transition-[fill] duration-500 ${
                  isHumburger ? "lg:fill-[#fff]" : "#E09132"
                }`}
              />
            </svg>
          </Link>

          <nav
            className={`flex items-center lg:absolute lg:top-0 lg:left-[-100%] lg:flex-col lg:items-start lg:w-1/3 md:w-1/2 sm:w-full lg:h-screen lg:z-[9999] lg:pt-[80px] lg:bg-[#E09132] transition-[left] duration-300 ${
              isHumburger ? "hamburger" : ""
            }`}
          >
            {navLinks.map((link) => (
              <Link
                href={link.path}
                key={uid()}
                className={`inline-block px-4 py-2 text-white font-poppins  ${
                  link.active ? "active1" : "nav_link"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <PrimaryBtn text="Get in Touch" mediaStyle={"sm:hidden font-poppins"} />

            <button
              className={`menu w-[40px]  ${
                isHumburger ? "opened" : null
              }  z-[99999]`}
              onClick={() => setIsHumburger(!isHumburger)}
              aria-label="Main Menu"
            >
              <svg width="40" height="40" fill="none" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
