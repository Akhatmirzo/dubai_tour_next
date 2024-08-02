import React from 'react'

export default function Hero({text, subTitle, images}) {
  return (
    <div className={`w-full h-screen relative`}>
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <div className="w-full h-full z-[5] absolute top-0 left-0 bg-[#00000048]"></div>
        <img
          src={images}
          alt=""
          className="w-full h-full object-cover object-center relative z-[1]"
        />
      </div>
      <div className="container z-[1] relative h-full flex flex-col items-center justify-center">
        <span className=" font-poppins font-bold text-[18px] leading-[27px] tracking-[10%] text-white 2xl:text-[16px] 2xl:leading-normal 2xl:font-semibold lg:text-[14px]">{subTitle}</span>
        <h2 className="font-yesteryear text-[157px] leading-[223px] font-normal text-white 3xl:text-[120px] 3xl:leading-[180px] 2xl:text-[110px] 2xl:leading-[150px] xl:text-[100px] xl:leading-[120px] lg:text-[80px] md:text-[50px] lg:leading-normal sm:text-center">
          {text}
        </h2>
      </div>
    </div>
  )
}
