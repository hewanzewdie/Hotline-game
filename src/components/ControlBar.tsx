import React from "react";
const ControlBar = () => {
  return (
    <div className="flex items-center justify-between bg-[#1f3f84] text-white rounded-full w-full max-w-3xl shadow-md">
      <div className="flex space-x-1">
        <div className="w-5 h-5 rounded-full bg-black" />
        <div className="w-5 h-5 rounded-full bg-black" />
        <div className="w-5 h-5 rounded-full bg-[#e63946]" />
        <div className="w-5 h-5 rounded-full bg-[#e63946]" />
        <div className="w-5 h-5 rounded-full bg-black" />
      </div>

      <button className="flex items-center border border-[#0f2a63] gap-1 bg-[#194eae] px-3 py-1 rounded-full hover:bg-[#324166] transition-colors mr-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-history-icon lucide-history"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
          <path d="M12 7v5l4 2" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-chevron-down-icon lucide-chevron-down"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
};

export default ControlBar;
