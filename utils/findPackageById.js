import { packagesData } from "@/components/static/Static";

function findPackageById(id) {
  return packagesData.find((item) => item.id == id);
}

export { findPackageById };
