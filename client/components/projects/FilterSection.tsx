import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const Button: React.FC<ButtonProps> = ({ selected, children, ...props }) => (
  <button
    {...props}
    className={`gap-2 flex items-center z-20 h-fit w-full justify-center text-sm p-2 rounded-lg border-2 text-black ${
      selected ? "border-[#8E7D3A] bg-[#FFFBEA]" : "bg-white border-stone-400"
    }`}
  >
    {children}
  </button>
);

const FilterSection: React.FC<{
  options: string[];
  selectedKey: string;
  onSelect: (key: string) => void;
}> = ({ options, selectedKey, onSelect }) => (
  <div className="flex gap-2">
    {options.map((option) => (
      <Button
        key={option}
        selected={selectedKey === option}
        onClick={() => onSelect(option)}
      >
        {option?.charAt(0)?.toUpperCase() + option?.slice(1)}
      </Button>
    ))}
  </div>
);

export default FilterSection;
