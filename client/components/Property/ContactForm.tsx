"use client";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import FilterSection from "../projects/FilterSection";
import { ProjectType } from "@/utils/interface";
import toast from "react-hot-toast";
import { sendProjectInquiry } from "@/utils/api";

const ContactForm: React.FC<{ data: ProjectType }> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [checked, setChecked] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const areas = data?.areas?.map((item) => `${item} sq/ft`) || [];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
  });
  const [filter, setFilter] = useState({
    bhkPreference: "none",
    areaPreference: "none",
  });

  const renderError = (key: string) => (
    <p className="text-red-500 text-sm h-2">{errors[key]}</p>
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\+91\s?\d{10}$|^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Invalid phone number";
    }
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
    setLoading(true);
    setErrors({});
    try {
      await sendProjectInquiry({
        ...formData,
        ...filter,
        loanAssistance: checked,
        projectId: data?._id,
      });
      toast.success("Your inquiry has been sent successfully!");
      setFormData({ name: "", email: "", contactNumber: "" });
      setFilter({ bhkPreference: "", areaPreference: "" });
      setChecked(false);
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 border-2 rounded-3xl p-4">
      <p>Enquire for more details about the property</p>
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
        {renderError("name")}
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
        {renderError("email")}
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
          name="contactNumber"
          id="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          placeholder="Enter contact number"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-[#8E7D3A] focus:bg-[#FFFBEA] block w-full p-2.5"
        />
        {renderError("contactNumber")}
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.bed />
          Bedrooms
        </p>
        <FilterSection
          options={data?.bedrooms ?? []}
          selectedKey={filter.bhkPreference}
          onSelect={(key) =>
            setFilter((prev) => ({ ...prev, bhkPreference: key }))
          }
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <p className="flex font-semibold gap-2">
          <Icons.area />
          Area
        </p>
        <FilterSection
          options={areas}
          selectedKey={filter.areaPreference}
          onSelect={(key) =>
            setFilter((prev) => ({ ...prev, areaPreference: key }))
          }
        />
      </div>
      <div
        onClick={() => setChecked(!checked)}
        className="col-span-2 md:col-span-1 flex items-center gap-2 justify-start cursor-pointer w-fit"
      >
        <input
          type="checkbox"
          name="loan"
          id="loan"
          checked={checked}
          onChange={() => setChecked(!checked)}
          className="h-5 w-5 border border-gray-300 bg-gray-50"
        />
        <p className="text-sm">Do you require Home Loan assistance?</p>
      </div>
      <div className="flex h-full items-end pt-16">
        <div className="flex gap-2 justify-around w-full border-t pt-4">
          <CustomButton
            type="secondary"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full justify-center"
          >
            Get Enquired <Icons.phone />
          </CustomButton>
          <CustomButton
            type="primary"
            onClick={handleSubmit}
            disabled={loading}
            className="w-full justify-center"
          >
            Book Now <Icons.rightArrow />
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
