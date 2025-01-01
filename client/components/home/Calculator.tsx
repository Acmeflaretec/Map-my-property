import React, { useState, useEffect } from 'react';
import CustomButton from '../ui/CustomButton';
import { Icons } from '../common/Icons';
import ProgressBar from './ProgressBar';

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

  return (
    <div id="emi-calculator" className="relative border-2 rounded-3xl w-full lg:w-2/3 p-4">
      <div className="flex flex-col md:flex-row gap-4 h-full">
        <div className="w-full md:w-3/5 flex flex-col justify-between">
          <div className="flex flex-col gap-4">
            <h1 className="font-black text-md">Calculate your Home Loan EMI</h1>
            <div className="flex flex-row gap-2 md:gap-4">
              <div className='w-3/4 '>
                <label className="block text-sm font-medium text-gray-900">Loan Amount</label>
                <input
                  type="range"
                  min={100000}
                  max={100000000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-[2px] bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>
              <p className="w-1/4 flex items-center justify-center border-2 rounded-md text-sm">{amount}</p>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <div className='w-3/4 '>
                <label className="block text-sm font-medium text-gray-900">Rate of Interest (p.a)</label>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={roi}
                  onChange={(e) => setRoi(Number(e.target.value))}
                  className="w-full h-[2px] bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>
              <p className="w-1/4 flex items-center justify-center border-2 rounded-md text-sm">{roi}%</p>
            </div>
            <div className="flex flex-row gap-2 md:gap-4">
              <div className='w-3/4 '>
                <label className="block text-sm font-medium text-gray-900">Loan Tenure</label>
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-[2px] bg-gray-200 rounded-lg cursor-pointer"
                />
              </div>
              <p className="w-1/4 flex items-center justify-center border-2 rounded-md text-sm">{tenure} yr</p>
            </div>
          </div>
          <div className="flex">
            <p>Search Properties Based on Calculated Loan</p>
            <CustomButton type="primary">
              Search <Icons.search />
            </CustomButton>
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <div className="flex flex-row gap-4">
            <p className="w-2/3">Monthly EMI</p>
            <p className="w-1/3">{emi}</p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="w-2/3">Total Interest</p>
            <p className="w-1/3">{interest}</p>
          </div>
          <div className="flex flex-row gap-4">
            <p className="w-2/3">Total Amount</p>
            <p className="w-1/3">{interest + amount}</p>
          </div>
          <ProgressBar progress={percent} />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
