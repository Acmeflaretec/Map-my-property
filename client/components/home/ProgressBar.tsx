import React from "react";

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  const radius = 110;
  const strokeWidth = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg className="transform -rotate-90 w-72 h-72" width="290" height="290">
        <defs>
          <radialGradient
            id="gradient1"
            cx="50%"
            cy="90%"
            r="90%"
            fx="1%"
            fy="99%"
          >
            <stop offset="0%" stopColor="#FFF4CA" />
            <stop offset="100%" stopColor="#C2AF64" />
          </radialGradient>
        </defs>
        <circle
          cx="145"
          cy="145"
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
          className="text-gray-200"
        />
        <circle
          cx="145"
          cy="145"
          r={radius}
          stroke="url(#gradient1)"
          strokeWidth={50}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
