import React, { useMemo, useState } from "react";
import PrimaryBtn from "../Buttons/PrimaryBtn";

export const BookTheTourCard = ({ hiddenStyle }) => {
  const [hidden, setHidden] = useState(false);
  const [clickerChange, setClickerChange] = useState(false);
  const [date, setDate] = useState("");

  const ChangeHiddenValue = () => {
    if (date.trim()) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  };

  const ClickHiddenValue = (bool) => {
    setClickerChange(bool);
  };

  useMemo(() => {
    ChangeHiddenValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className={`min-w-[481px] max-w-[481px] bg-[#EDEDED] p-[40px] lg:max-w-full sm:p-[10px] sm:min-w-0 ${hiddenStyle && "lg:hidden"}`}>
      <h2 className="text-[42px] font-bold text-center sm:text-[26px]">
        Book This Tour
      </h2>
      <p className="text-[16px] font-poppins text-center leading-[26px] mb-[32px] sm:text-[14px] sm:mb-[10px]">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut
        magni nesciunt? Quo quidem neque iste expedita est dolo.
      </p>

      <form className="flex flex-col gap-[9px]">
        <label className="relative">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full pl-[55px] py-[25px] sm:pl-5 sm:py-3 placeholder:font-poppins placeholder:text-[18px]"
            required
          />
        </label>
        <label className="relative">
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full pl-[55px] py-[25px] sm:pl-5 sm:py-3 placeholder:font-poppins placeholder:text-[18px]"
            required
          />
        </label>
        <label className="relative">
          <input
            type="date"
            name="date"
            placeholder="dd-mm-yy"
            className={`w-full pl-[55px] py-[25px] sm:py-3 ${
              hidden ? "" : clickerChange ? "" : "rmeditdate"
            } ${clickerChange ? "visiblermeditdate" : ""}`}
            onChange={(e) => setDate(e.target.value)}
            onFocus={() => ClickHiddenValue(true)}
            onBlur={() => ClickHiddenValue(false)}
            required
          />
        </label>
        <label className="relative">
          <input
            type="text"
            name="ticket"
            placeholder="Number of ticket"
            className="w-full pl-[55px] py-[25px] sm:pl-5 sm:py-3 placeholder:font-poppins placeholder:text-[18px]"
            required
          />
        </label>
        <label className="relative">
          <textarea
            name="msg"
            id=""
            placeholder="Message"
            className="w-full pl-[55px] py-[25px] sm:pl-5 sm:py-3 placeholder:font-poppins placeholder:text-[18px]"
          ></textarea>
        </label>

        <PrimaryBtn text={"Book Now"} />
      </form>
    </div>
  );
};
