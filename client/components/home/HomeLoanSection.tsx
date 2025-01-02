"use client";
import React, { useState } from "react";
import Calculator from "./Calculator";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";

const HomeLoanSection: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div
      className="px-4 pb-20 scroll-mt-20 md:scroll-mt-32"
      id="emi-calculator"
    >
      <h1 className="font-black text-xl pb-4">Home Loan Calculator</h1>
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <Calculator />
        <div
          id="connect"
          className="flex flex-col gap-4 border-2 rounded-3xl w-full lg:w-1/3 p-4"
        >
          <p>Connect with Us</p>
          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              First Name *
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your First name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email ID *
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              placeholder="Type your Email Id"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div className="col-span-2 md:col-span-1">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Contact Number *
            </label>
            <input
              type="number"
              name="phoneNumber"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter contact number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
            )}
          </div>
          <div className="flex h-full items-end">
            <div className="flex gap-2 justify-around w-full border-t pt-4">
              <CustomButton type="secondary">
                Get Appoinment <Icons.phone />
              </CustomButton>
              <CustomButton type="primary">
                Send Message <Icons.rightArrow />
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanSection;
