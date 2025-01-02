import React, { useState, useEffect } from "react";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import ProgressBar from "./ProgressBar";

const Calculator: React.FC = () => {
  const [amount, setAmount] = useState(10000000);
  const [roi, setRoi] = useState(8.6);
  const [tenure, setTenure] = useState(10);
  const [emi, setEmi] = useState(124521);
  const [interest, setInterest] = useState(4942539);
  const [percent, setPercent] = useState(25);

  const calculateValues = () => {
    const monthlyRate = roi / 12 / 100;
    const numberOfMonths = tenure * 12;
    const calculatedEmi =
      monthlyRate === 0
        ? amount / numberOfMonths
        : (amount * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths)) /
          (Math.pow(1 + monthlyRate, numberOfMonths) - 1);
    const totalInterest = calculatedEmi * numberOfMonths - amount;
    setEmi(Math.round(calculatedEmi));
    setInterest(Math.round(totalInterest));
    setPercent(Math.floor((totalInterest / (amount + totalInterest)) * 100));
  };

  useEffect(() => {
    calculateValues();
  }, [amount, roi, tenure]);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const sliders =
        document.querySelectorAll<HTMLInputElement>(".range-slider");

      const updateThumbPosition = (slider: HTMLInputElement): void => {
        const value = parseInt(slider.value, 10);
        const max = parseInt(slider.max, 10);
        const percentage = `${(value / max) * 100}%`;
        slider.style.setProperty("--thumb-position", percentage);
      };

      sliders.forEach((slider) => {
        slider.addEventListener("input", () => updateThumbPosition(slider));
        updateThumbPosition(slider);
      });
    }
  }, []);

  return (
    <div className="relative border-2 rounded-3xl w-full lg:w-2/3 p-4">
      <div className="flex flex-col md:flex-row gap-4 h-full">
        <div className="w-full md:w-3/5 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="font-black text-md">Calculate your Home Loan EMI</h1>
            <div className="flex flex-row gap-2 md:gap-4">
              <div className="w-3/4 ">
                <label className="block text-sm font-medium text-gray-900">
                  Loan Amount
                </label>
                <input
                  type="range"
                  id="slider1"
                  min={100000}
                  max={100000000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="range-slider"
                />
              </div>
              <p className="w-1/4 flex items-center justify-center border-2 rounded-md text-sm">
                {amount.toLocaleString()}
              </p>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <div className="w-3/4 ">
                <label className="block text-sm font-medium text-gray-900">
                  Rate of Interest (p.a)
                </label>
                <input
                  type="range"
                  id="slider2"
                  min={1}
                  max={30}
                  value={roi}
                  onChange={(e) => setRoi(Number(e.target.value))}
                  className="range-slider"
                />
              </div>
              <p className="w-1/4 flex items-center justify-center border-2 rounded-md text-sm">
                {roi}%
              </p>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <div className="w-3/4 ">
                <label className="block text-sm font-medium text-gray-900">
                  Loan Tenure
                </label>
                <input
                  type="range"
                  id="slider3"
                  min={1}
                  max={30}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="range-slider"
                />
              </div>
              <p className="w-1/4 flex items-center justify-center border-2 rounded-md text-sm">
                {tenure} yr
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center py-6">
            <p className="text-sm md:text-base">Search Properties Based on Calculated Loan</p>
            <CustomButton type="primary">
              Search <Icons.search />
            </CustomButton>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-2/5 md:pt-8">
          <div className="flex flex-row gap-4">
            <p className="flex items-center w-2/3">
              <span className="flex w-3 h-3 me-3 bg-purple-300 border-2 border-purple-500 rounded-full"></span>
              Monthly EMI
            </p>
            <p className="w-1/3 text-right">{emi.toLocaleString()}</p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="flex items-center w-2/3">
              <span className="flex w-3 h-3 me-3 bg-gray-200 border-2 border-gray-400 rounded-full"></span>
              Total Amount
            </p>
            <p className="w-1/3 text-right">{(interest + amount).toLocaleString()}</p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="flex items-center w-2/3">
              <span className="flex w-3 h-3 me-3 bg-[#FFF4CA] border-2 border-[#C2AF64] rounded-full"></span>
              Total Interest
            </p>
            <p className="w-1/3 text-right">{interest.toLocaleString()}</p>
          </div>
          <ProgressBar progress={percent} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
