import Image from "next/image";
import React from "react";
import { uid } from "uid";

const Question = () => {
  const QuestionsData = [
    {
      question: "Why the price Difference in Desert Safari packages ?",
      answer: `We cater to a diverse range of preferences, with tours and packages that can be customized to fit your budget.`,
      image: "/firstImage.webp",
    },
    {
      question: "Dune Bashing place is red desert ?",
      answer:
        "Yes, From standard to premium options, all our packages are designed to ensure your satisfaction, making every penny spent worthwhile.",
      image: "/swimming.webp",
    },
    {
      question: "What to wear during desert safari ?",
      answer:
        "No Dress code But sun protection is Good for you. Sunscreen , sunglasses, scarf/SunHat and sneakers are good for summer. Sunscreen,sunglasses, SunHat/scarf, Sneakers and some warm clothes are good for winter.",
      image: "/police.webp",
    },
  ];

  return (
    <section className="pt-[30px] lg:pt-[20px]">
      <div className=" container flex items-center">
        <div className=" px-14 pr-0 md:px-0">
          <div>
            <h2 className=" text-[#E09132]">FAQ</h2>
          </div>
          <h3 className="sm:text-2xl text-4xl mt-[15px]">
            Frequently Asked <br /> Question
          </h3>
          <div className="mt-[35px] flex flex-col gap-[40px] w-[674px] md:w-full">
            {QuestionsData.map((question) => (
              <div key={uid()} className="flex items-center">
                <Image
                  sizes="100vw"
                  width={"100"}
                  height={"100"}
                  src={question.image}
                  alt=""
                  className="w-[50px] h-[50px] object-cover"
                />
                <div className="ml-[21px]">
                  <h3 className=" text-gray-500">{question.question}</h3>
                  <p className="text-gray-400">{question.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-[185px] lg:hidden">
          <Image
            sizes="100vw"
            width={"100"}
            height={"100"}
            src={"/plane.webp"}
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Question;
