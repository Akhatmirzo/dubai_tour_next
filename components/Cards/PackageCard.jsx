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
    <div className="h-full flex flex-col shadow-xl">
      <div>
        <Image
          sizes="(max-width: 768px) 100vw, 33vw"
          width={500}
          height={300}
          src={image}
          alt=""
          style={{ objectFit: "cover", objectPosition: "center" }}
          className="w-full h-[350px] md:h-[250px] sm:h-[200px] 2sm:h-[150px] object-cover object-center"
        />
      </div>
      <div className="sm:border sm:p-1 lg:p-3 p-5 h-full">
        <Link
          href={`/package/${id}`}
          style={{ "--i": 2, "--oriented": "vertical" }}
          className="detailDesc underline cursor-pointer hover:text-blue-500 text-2xl mt-[38px] md:mt-3 md:text-xl sm:text-lg 2sm:text-base"
        >
          {name}
        </Link>
        <h3 className=" mt-[9px]">
          <span className="text-[#DF6951] text-2xl md:text-xl sm:text-lg">
            ${sellPrice}
          </span>
          {price ||
            (price > 0 && (
              <span className="line-through text-gray-400 ml-[15px]">
                ${price}
              </span>
            ))}
        </h3>
        <p
          style={{ "--i": 3, "--oriented": "vertical" }}
          className="detailDesc overflow-ellipsis mt-[4px] md:text-[14px] sm:text-[12px]"
        >
          {detail}
        </p>
        <button
          onClick={() => handleClick(id)}
          className=" bg-[#DF6951] py-3 px-6 sm:py-1 sm:px-3 mt-3 sm:text-sm rounded-lg text-white self-end justify-self-end content-end"
        >
          Explore Now
        </button>
      </div>
    </div>
  );
}
