"use client";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { Icons } from "./Icons";
import toast from "react-hot-toast";
import { sendInquiry } from "@/utils/api";
import { usePathname } from "next/navigation";

const ContactCard: React.FC = () => {
  const pathname = usePathname();
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
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phoneNumber)
      newErrors.phoneNumber = "Contact number is required";
    else if (!/^\+91\s?\d{10}$|^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = "Invalid phone number";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setTimeout(() => setErrors({}), 2000);
      return;
    }
    setErrors({});
    setLoading(true);
    try {
      await sendInquiry({ ...formData, pathname });
      toast.success("Your inquiry has been sent successfully!");
      localStorage.setItem("enquiry", "true");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
      });
    } catch (error: any) {
      toast.error(
        error.message || "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col gap-3 border-2 rounded-3xl p-4">
      <p>Connect with Us</p>
      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="name"
          className="block mb- text-sm font-medium text-gray-900"
        >
          Name *
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-[#8E7D3A] focus:bg-[#FFFBEA] block w-full p-2.5"
          placeholder="Type your First name"
        />
        <p className="text-red-500 text-sm h-2">{errors?.name}</p>
      </div>

      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="email"
          className="block mb- text-sm font-medium text-gray-900"
        >
          Email ID *
        </label>
        <input
          type="text"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-[#8E7D3A] focus:bg-[#FFFBEA] block w-full p-2.5"
          placeholder="Type your Email Id"
        />
        <p className="text-red-500 text-sm h-2">{errors?.email}</p>
      </div>

      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="phone"
          className="block mb- text-sm font-medium text-gray-900"
        >
          Contact Number *
        </label>
        <input
          type="text"
          name="phoneNumber"
          id="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          placeholder="Enter contact number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-[#8E7D3A] focus:bg-[#FFFBEA] block w-full p-2.5"
        />
        <p className="text-red-500 text-sm h-2">{errors?.phoneNumber}</p>
      </div>
      <p className="text-xs md:text-sm text-gray-600">
        Thank you for reaching out! We&apos;ll get back to you shortly.
      </p>
      <div className="flex h-full items-end pt-16">
        <div className="flex gap-2 justify-around w-full border-t pt-4">
          <CustomButton
            type="secondary"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full justify-center"
          >
            Get Appointment <Icons.phone />
          </CustomButton>
          <CustomButton
            type="primary"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full justify-center"
          >
            Send Message <Icons.rightArrow />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
