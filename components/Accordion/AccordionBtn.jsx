import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function AccordionBtn({ isOpen, index }) {
  return (
    <div className="w-[20px] h-[20px] bg-[#E09132] rounded-full flex items-center justify-center">
      {isOpen.bool && index === isOpen.index ? (
        <RemoveIcon sx={{ color: "#fff", width: "90%" }} />
      ) : (
        <AddIcon sx={{ color: "#fff", width: "90%" }} />
      )}
    </div>
  );
}
