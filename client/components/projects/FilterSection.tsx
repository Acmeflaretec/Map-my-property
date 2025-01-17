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

interface FilterOption {
  key: string;
  label: string;
}
export const bedroomOptions: FilterOption[] = [
  { key: "1BHK", label: "1 BHK" },
  { key: "2BHK", label: "2 BHK" },
  { key: "3BHK", label: "3 BHK" },
  { key: "4BHK", label: "4 BHK" },
  { key: "studio", label: "Studio" },
];

export const residentTypeOptions: FilterOption[] = [
  { key: "apartments", label: "Apartments" },
  { key: "villas", label: "Villas" },
  { key: "plots", label: "Plots" },
  { key: "townships", label: "Townships" },
];

const FilterSection: React.FC<{
  options: FilterOption[];
  selectedKey: string;
  onSelect: (key: string) => void;
}> = ({ options, selectedKey, onSelect }) => (
  <div className="flex gap-2">
    {options.map((option) => (
      <Button
        key={option.key}
        selected={selectedKey === option.key}
        onClick={() => onSelect(option.key)}
      >
        {option.label}
      </Button>
    ))}
  </div>
);

export default FilterSection;
