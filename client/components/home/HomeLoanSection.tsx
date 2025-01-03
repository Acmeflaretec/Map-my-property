import React from "react";
import Calculator from "./Calculator";
import ContactCard from "../common/ContactCard";

const HomeLoanSection: React.FC = () => {
  return (
    <div
      className="px-4 pb-20 scroll-mt-20 md:scroll-mt-32"
      id="emi-calculator"
    >
      <h1 className="font-black text-xl pb-4">Home Loan Calculator</h1>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <Calculator />
        <div id="connect" className="w-full lg:w-1/3">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default HomeLoanSection;
