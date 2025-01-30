"use client"
import { FaqType } from '@/utils/interface';
import React, { useState } from 'react'

const Faqs: React.FC<{ data: FaqType[] }> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col border rounded-2xl overflow-hidden bg-gray-50">
        <p className="font-bold p-4">
          FREQUENTLY ASKED QUESTIONS
        </p>
      <div className="w-full flex flex-col">
        {data.map((item, index) => (
          <div
            key={index}
            className={`overflow-hidden border-t-2 transition-all duration-500 text-gray-500 ${
              activeIndex === index &&
              "bg-white"
            }`}
          >
            <h2 id={`accordion-collapse-heading-${index}`}>
              <button
                type="button"
                className={`flex items-center justify-between w-full p-5 font-medium ${
                  index === activeIndex ? "" : "hover:bg-gray-100"
                } gap-3`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-start">{item.questions}</span>
                <svg
                  data-accordion-icon
                  className={`w-3 h-3 shrink-0 transform transition-transform duration-500 ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                  />
                </svg>
              </button>
            </h2>
            <div
              className={`overflow-hidden transition-max-height duration-200 ease-in-out ${
                activeIndex === index ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <p className="px-5 pb-8">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs