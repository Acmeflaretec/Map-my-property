import React, { useEffect, useRef, useState } from "react";

interface RangeSliderProps {
  min: number;
  max: number;
  setFilter: (value: { min: number; max: number }) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, setFilter }) => {
  const [fromValue, setFromValue] = useState(min);
  const [toValue, setToValue] = useState(max);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateSliderBackground();
    setFilter({ min: fromValue, max: toValue });
  }, [fromValue, toValue]);

  const updateSliderBackground = () => {
    if (sliderRef.current) {
      const rangeDistance = max - min;
      const fromPosition = ((fromValue - min) / rangeDistance) * 100;
      const toPosition = ((toValue - min) / rangeDistance) * 100;

      sliderRef.current.style.background = `linear-gradient(
        to right,
        #C6C6C6 0%,
        #C6C6C6 ${fromPosition}%,
        #25daa5 ${fromPosition}%,
        #25daa5 ${toPosition}%,
        #C6C6C6 ${toPosition}%,
        #C6C6C6 100%
      )`;
    }
  };

  const handleFromInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > toValue) {
      setToValue(value);
    } else {
      setFromValue(value);
    }
  };

  const handleToInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value < fromValue) {
      setFromValue(value);
    } else {
      setToValue(value);
    }
  };

  return (
    <div className="flex items-center justify-between gap-1 w-full mx-auto">
      <p className="w-1/4 text-xs md:text-sm text-center rounded-lg border-2 py-2 border-stone-400">
        {fromValue.toLocaleString()}
      </p>
      <div
        ref={sliderRef}
        className="w-2/4 sliders_control relative min-h-[50px]"
      >
        <input
          id="fromSlider"
          type="range"
          min={min}
          max={max}
          value={fromValue}
          onChange={handleFromInputChange}
          className="absolute w-full appearance-none h-0 pointer-events-auto multi-range-slider"
        />
        <input
          id="toSlider"
          type="range"
          min={min}
          max={max}
          value={toValue}
          onChange={handleToInputChange}
          className="absolute w-full appearance-none h-0 pointer-events-auto z-1 multi-range-slider"
        />
      </div>
      <p className="w-1/4 text-xs md:text-sm text-center rounded-lg border-2 py-2 border-stone-400">
        {toValue.toLocaleString()}
      </p>
    </div>
  );
};

export default RangeSlider;
