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
    <div className=" flex flex-col items-start">
      <img
        src={image}
        alt=""
        className="w-full h-[350px] object-cover object-center"
      />
      <Link
        href={`/package/${id}`}
        className=" underline cursor-pointer hover:text-blue-500 text-2xl mt-[38px]"
      >
        {name}
      </Link>
      <h3 className=" mt-[9px]">
        <span className="text-[#DF6951] text-2xl">{sellPrice} AED</span>
        <span className="line-through text-gray-400 ml-[15px]">
          {price} AED
        </span>
      </h3>
      <p className=" mt-[4px]">{detail}</p>
      <button
        onClick={() => handleClick(id)}
        className=" bg-[#DF6951] py-3 px-6  rounded-lg text-white mt-[32px]"
      >
        Explore Now
      </button>
    </div>
  );
}
