import React, { useState } from "react";
import { Icons } from "../common/Icons";
import ToggleButton from "../ui/ToggleButton";

interface Props {
  data: {
    date: string;
    time: string;
  };
  dispatch: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      contactNumber: string;
      description: string;
      date: string;
      time: string;
      projectId: string;
      mode: string;
    }>
  >;
}
const DatePicker: React.FC<Props> = ({ data, dispatch }) => {
  const timeSlots = [
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
  ];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentTimeIndex, setCurrentTimeIndex] = useState<number>(0);

  const handleClick = (name: string, value: string) => {
    dispatch((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div>
      <div className="relative mx-2">
        <div className="overflow-hidden">
          <div
            className="relative w-full flex gap-2 py-2 lg:py-4"
            style={{
              transform: `translateX(-${currentIndex * 10}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {Array.from({ length: 5 }, (_, i) => {
              const date = new Date();
              date.setDate(date.getDate() + i + 1);
              return (
                <ToggleButton
                  key={i}
                  selected={data.date === date.toDateString()}
                  onClick={() => handleClick("date", date.toDateString())}
                  className="h-20 text-sm p-3"
                >
                  {date.toDateString()}
                </ToggleButton>
              );
            })}
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 -left-5 z-30 flex items-center justify-center h-full group focus:outline-none"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? 4 : prevIndex - 1
            )
          }
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
            <Icons.leftArrow />
          </span>
        </button>
        <button
          className="absolute top-0 -right-5 z-30 flex items-center justify-center h-full group focus:outline-none"
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 4 ? 0 : prevIndex + 1
            )
          }
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
            <Icons.rightArrow />
          </span>
        </button>
      </div>
      <div className="relative mx-2">
        <div className="overflow-hidden ml-4">
          <div
            className="relative w-full flex gap-1 py-2 lg:py-4"
            style={{
              transform: `translateX(-${(currentTimeIndex / 5) * 100}%)`,
              transition: "transform 0.3s ease-in-out",
            }}
          >
            {timeSlots.map((time) => (
              <ToggleButton
                key={time}
                selected={data.time === time}
                onClick={() => handleClick("time", time)}
              >
                {time}
              </ToggleButton>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="absolute top-0 -left-5 z-30 flex items-center justify-center h-full group focus:outline-none"
          onClick={() =>
            setCurrentTimeIndex((prevIndex) =>
              prevIndex === 0 ? 12 : prevIndex - 1
            )
          }
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
            <Icons.leftArrow />
          </span>
        </button>
        <button
          className="absolute top-0 -right-5 z-30 flex items-center justify-center h-full group focus:outline-none"
          onClick={() =>
            setCurrentTimeIndex((prevIndex) =>
              prevIndex === 12 ? 0 : prevIndex + 1
            )
          }
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border-2 bg-white group-hover:bg-gray-100">
            <Icons.rightArrow />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
