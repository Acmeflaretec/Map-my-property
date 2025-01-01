import React, { useState } from 'react'

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
  const radius = 110;
  const strokeWidth = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  return (
    <div className="flex flex-col items-center justify-center relative">
      <svg
        className="transform -rotate-90 w-72 h-72"
        width="290"
        height="290"
      >
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
          stroke="currentColor"
          strokeWidth={50}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          className="text-[#F2E6B8] outline-[#8E7D3A]"
        />
      </svg>
    </div>
  )
}

export default ProgressBar