import React, { ButtonHTMLAttributes } from "react";
import cn from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

const ToggleButton: React.FC<ButtonProps> = ({
  selected,
  children,
  className,
  ...props
}) => (
  <button
    {...props}
    className={cn(
      `flex items-center z-20 h-fit w-fit min-w-20 justify-center text-sm p-2 rounded-lg border-2 text-black ${
        selected ? "border-[#8E7D3A] bg-[#FFFBEA]" : "bg-white border-stone-400"
      }`,
      className
    )}
  >
    {children}
  </button>
);

export default ToggleButton;
