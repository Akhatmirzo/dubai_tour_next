import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function PackageCard({ packageItem }) {
  const navigate = useRouter();
  const { id, name, price, sellPrice, detail, image } = packageItem || {};

  const handleClick = (id) => {
    window.scrollTo(0, 0);
    navigate.push(`/package/${id}`);
  };

  return (
    <div className="h-full flex flex-col">
      <Image
        loading="lazy"
        sizes="100vw"
        width={"100"}
        height={"100"}
        src={image}
        alt=""
        className="w-full h-[350px] md:h-[250px] sm:h-[200px] 2sm:h-[150px] object-cover object-center"
      />
      <div className="border p-1">
        <Link
          href={`/package/${id}`}
          style={{'--i': 1, '--oriented': 'vertical'}}
          className="detailDesc underline cursor-pointer hover:text-blue-500 text-2xl mt-[38px] md:mt-3 md:text-xl sm:text-lg"
        >
          {name}
        </Link>
        <h3 className=" mt-[9px]">
          <span className="text-[#DF6951] text-2xl md:text-xl sm:text-lg">{sellPrice} AED</span>
          {price ||
            (price > 0 && (
              <span className="line-through text-gray-400 ml-[15px]">
                {price} AED
              </span>
            ))}
        </h3>
        <div className="">
          <p style={{'--i': 3,'--oriented': 'vertical'}} className="detailDesc overflow-ellipsis mt-[4px] md:text-[14px] sm:text-[12px]">
            {detail}
          </p>
        </div>
        <button
          onClick={() => handleClick(id)}
          className=" bg-[#DF6951] py-3 px-6 sm:py-1 sm:px-3 mt-3 sm:text-sm rounded-lg text-white self-end content-end"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}
