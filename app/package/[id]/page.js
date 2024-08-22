import PackageDetails from "@/components/Package/PackageDetails";
import { findPackageById } from "@/utils/findPackageById";
import React from "react";

export async function generateMetadata({ params }) {
  // read route params
  const id = params.id
 
  // fetch data
  const packageData = await findPackageById(id);
 
  return {
    title: packageData.name,
  }
}

export default function page() {
  return (
    <>
      <PackageDetails />
    </>
  );
}
