"use client";
import React from "react";
import { Icons } from "./Icons";

const Model: React.FC<{
  isModalOpen: boolean;
  toggleModal: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}> = ({ isModalOpen, toggleModal, children }) => {
  return (
    <>
      {isModalOpen && (
        <div
          className="fixed inset-0 z-40 flex justify-center items-center w-full h-full bg-white md:bg-black md:bg-opacity-50"
          aria-labelledby="popup-modal"
          aria-hidden={!isModalOpen}
        >
          <div className="relative h-full md:h-fit max-w-[100vw] md:max-w-4xl">
            <div className="relative rounded-3xl h-full bg-white md:max-h-[75vh] overflow-y-scroll pt-20 md:pt-0">
              <button
                onClick={toggleModal}
                type="button"
                className="flex md:hidden text-gray-600 bg-transparent p-2 rounded-lg text-sm justify-center items-center"
              >
                <Icons.leftArrow /> Back
                <span className="sr-only">Close modal</span>
              </button>
              <button
                onClick={toggleModal}
                type="button"
                className="absolute hidden md:flex z-20 top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 justify-center items-center"
              >
                <Icons.close />
                <span className="sr-only">Close modal</span>
              </button>
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
