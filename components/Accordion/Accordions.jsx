import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionBtn from "./AccordionBtn";

export default function Accordions() {
  const [expanded, setExpanded] = React.useState(false);
  const [isOpen, setOpen] = useState({ bool: false, index: null });

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setOpen({ bool: isExpanded, index: panel });
  };

  const accordionData = [
    {
      title: "WHY CHOOSE US",
      content:
        "Book Dubai Tours stands out as a premier tour operator for Dubai Desert Safari , Dubai Tours, Dubai Dhow Cruise, Quad and Buggy Drive Tour, in Dubai. We take pride in delivering top-notch ⭐ ⭐ ⭐ ⭐ ⭐ service, offering you an immersive experience We cater to a diverse range of preferences, with tours and packages that can be customized to fit your budget. From standard to premium options, all our packages are designed to ensure your satisfaction, making every penny spent worthwhile.",
    },
    {
      title: "Terms & Conditions",
      content:
        "Once we receive your booking after you will receive a confirmation email and Wattsapp with payment link to pay 50% amount of tour within 24 hours, Once payment received your booking will b confirmed. Remaining 50%Amount of tour you have to pay on your tour day.",
    },
    {
      title: "Cancellation Policy",
      content:
        "Cancellation of reservations before 12 hours won’t cost you anything. Any cancellation made within 12 hours will be 50% chargeable. The refund amount will reflect in your bank account within seven days if you are eligible.",
    },
    {
      title: "Does my company need help for marketing advices?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div>
      {accordionData.map((item, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
            key={index}
            sx={{
              boxShadow: "none",
              backgroundColor: "transparent",
              borderBottom: "1px solid #E09132",
              borderTop:
                index !== 0 ? "1px solid transparent" : "1px solid #E09132",
              borderRadius: "1px !important",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 !important",
              ":before": {
                backgroundColor: "transparent",
              },
            }}
          >
            <AccordionSummary
              expandIcon={
                <AccordionBtn index={`panel${index}`} isOpen={isOpen} />
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <h3 className="font-medium text-[20px] leading-[36px] xl:text-[18px] md:text-[16px] md:leading-normal sm:text-[12px]">
                {item.title}
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p className="text-[18px] leading-[26px] md:text-[16px] sm:text-[12px]">
                {item.content}
              </p>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
