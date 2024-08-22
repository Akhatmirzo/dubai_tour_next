import Footer from "@/components/footer/Footer";
import Navbar from "@/components/Header/Navbar";
import React, { Suspense } from "react";

export default function LayoutRoot({children}) {
  return (
    <Suspense fallback={<h1>Loading....</h1>}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </Suspense>
  );
}
