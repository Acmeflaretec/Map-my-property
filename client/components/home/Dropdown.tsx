import React, { useState } from "react";

interface DropdownItem {
  label: string;
  value: string;
}

interface DropdownProps {
  value: string;
  options: DropdownItem[];
  onSelect: (key: string) => void;
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({
  value,
  options,
  onSelect,
  children,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownVisible(false);
  };

  return (
    <div
      className="relative inline-block w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        id="dropdownHoverButton"
        className="w-full flex items-center justify-between bg-gr"
        type="button"
      >
        {children}
      </button>

      {isDropdownVisible && (
        <div
          id="dropdownHover"
          className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow max-w-44 min-w-28"
        >
          <ul className="py-2 text-sm">
            {options.map((item, index) => (
              <button
                key={index}
                className={`w-full px-4 py-2 text-gray-900 hover:bg-gray-100 ${
                  value === item.value && "bg-gray-200"
                }`}
                onClick={() => onSelect(item.value)}
              >
                {item.label}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
