"use client";
import React, { useState } from "react";
import CustomButton from "../ui/CustomButton";
import { Icons } from "../common/Icons";
import { ProjectType } from "@/utils/interface";
import toast from "react-hot-toast";
import { sendProjectInquiry } from "@/utils/api";
import DatePicker from "./DatePicker";
import ToggleButton from "../ui/ToggleButton";

const ContactForm: React.FC<{ data: ProjectType }> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const initialState = {
    name: "",
    contactNumber: "",
    email: "",
    date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toDateString(),
    time: "10:00 AM",
    projectId: data?._id,
    mode: "in_person",
    description: "",
  };
  const [formData, setFormData] = useState(initialState);
  const modes = [
    { key: "in_person", label: "In Person", icon: "person" },
    { key: "video_chat", label: "Video Chat", icon: "video" },
  ];
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
      await sendProjectInquiry(formData);
      toast.success("Your inquiry has been sent successfully!");
      setFormData(initialState);
    } catch {
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4 border-2 rounded-3xl p-4">
      <p className="font-semibold">Schedule a Visit</p>
      <DatePicker data={formData} dispatch={setFormData} />
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
      <div className="col-span-2 md:col-span-1">
        <p className="text-sm">How do you require the home tour ?</p>
        <div className="flex gap-2 w-full mt-2">
          {modes.map(({ key, label, icon }) => {
            const Icon = Icons[icon as keyof typeof Icons] || null;
            return (
              <ToggleButton
                key={key}
                selected={formData.mode === key}
                onClick={() => setFormData((prev) => ({ ...prev, mode: key }))}
                className="w-full gap-2"
              >
                {Icon && <Icon />}
                {label}
              </ToggleButton>
            );
          })}
        </div>
      </div>
      <div className="col-span-2 md:col-span-1">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Any specific requirements regarding the visit ?
        </label>
        <textarea
          name="description"
          id="description"
          rows={4}
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter details here"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg outline-none focus:border-[#8E7D3A] focus:bg-[#FFFBEA] block w-full p-2.5"
        />
      </div>
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
  );
};

export default ContactForm;
