import React, { useState } from "react";
import icon from "../assets/riskIcon.png";

const RiskModeToggle = () => {
  const [isHighRiskMode, setIsHighRiskMode] = useState(false);

  return (
    <div className="relative bg-[#0a367f] rounded-full py-1.5 px-0 w-64 h-8 flex items-center shadow-lg">
      <img
        src={icon}
        alt="icon"
        className="w-6 h-6 ml-0 pl-0 object-contain z-10"
      />

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
        <button
          className="w-10 h-5 bg-[#5475aa] rounded-full p-0.5 cursor-pointer"
          onClick={() => setIsHighRiskMode(!isHighRiskMode)}
        >
          <div
            className={`w-4 h-4 rounded-full bg-white transform transition-transform duration-200 ${
              isHighRiskMode ? "translate-x-5" : "translate-x-0"
            }`}
          ></div>
        </button>
        <span className="text-white text-xs font-medium whitespace-nowrap">
          High risk mode
        </span>
      </div>
    </div>
  );
};

export default RiskModeToggle;
