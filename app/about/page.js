import AboutPromotion from "@/components/About/AboutPromotion";
import Hero from "@/components/Hero/Hero";
import Head from "next/head";
import React from "react";

export const metadata = {
  title: "Dubai Tour About",
  description: "Dubai Tour",
};

export default function page() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="og:title" content={metadata.title} />
        <meta name="og:description" content={metadata.description} />
        <meta property="og:image" content="/dubai_tour1.webp" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dubaitour.com/about" />
        <meta property="og:site_name" content="Dubai Tour" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dubaitour" />
        <meta name="twitter:creator" content="@dubaitour" />
        <meta name="twitter:title" content={metadata.title} />
      </Head>
      <Hero
        text={"About Us"}
        images={"/dubai_tour1.webp"}
        subTitle={"Book Dubai Tours"}
      />

      <AboutPromotion />
    </>
  );
}
