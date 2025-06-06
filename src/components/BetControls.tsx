import React from "react";

interface BetControlsProps {
  betAmount: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const BetControls = ({
  betAmount,
  onIncrease,
  onDecrease,
}: BetControlsProps) => {
  return (
    <div className="flex items-center">
      <div className="relative bg-[#194eae] border border-[#0f2a63] rounded-full flex items-center h-12 pr-1 overflow-hidden">
        <div className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-full border-t border-l border-white/20 pointer-events-none z-10" />
        <div className="py-1 px-4 rounded-l-full flex flex-col items-center justify-center z-20">
          <div className="text-white/80 text-[11px]">Bet USD</div>
          <div className="text-white font-medium text-sm bg-[#113679] border border-[#111111] w-40 text-center rounded-full">
            {betAmount.toFixed(2)}
          </div>
        </div>

        <div className="flex space-x-1 z-20">
          {[
            { label: "-", onClick: onDecrease },
            { label: "icon", svg: true },
            { label: "+", onClick: onIncrease },
          ].map((btn, idx) => (
            <div key={idx} className="relative w-8 h-8">
              <button
                onClick={btn.onClick}
                className="bg-[#194eae] border border-[#0f2a63] w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#445ca3] transition-colors z-20 relative"
              >
                {btn.svg ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    color="white"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                  </svg>
                ) : (
                  <span className="text-white text-lg font-medium">
                    {btn.label}
                  </span>
                )}
                <div className="absolute top-[1px] left-[1px] right-[1px] bottom-[1px] rounded-full border-t border-l border-white/20 pointer-events-none z-10" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BetControls;
