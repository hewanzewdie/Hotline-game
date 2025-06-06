import React from 'react';
import fireIcon from '../assets/fire1.png'; 

const BettingButtons = () => {
  return (
    <div className="flex space-x-2">
      {/* RED button */}
      <button
        className="bg-[#e63946] border-2 border-[#1a1a1a] text-white font-medium text-sm w-28 h-16 flex flex-col items-center justify-center hover:bg-[#f04654] transition-colors relative overflow-hidden"
        style={{
          borderRadius: '25px',
          boxShadow: `
            inset 8px 0 12px -6px rgba(0,0,0,0.6), 
            inset -8px 0 12px -6px rgba(0,0,0,0.6)
          `,
        }}
      >
        <span>RED</span>
        <span className="font-bold">X2</span>
      </button>

      {/* YELLOW button */}
      <button
        className="bg-[#cb903a] border-2 border-[#1a1a1a] text-white font-medium text-sm w-28 h-16 flex flex-col items-center justify-center hover:bg-[#fbb943] transition-colors relative overflow-hidden"
        style={{
          borderRadius: '25px',
          boxShadow: `
            inset 8px 0 12px -6px rgba(0,0,0,0.6), 
            inset -8px 0 12px -6px rgba(0,0,0,0.6)
          `,
        }}
      >
        <img src={fireIcon} alt="fire icon" className="w-6 h-6 mb-1 object-contain" />
        <span className="font-bold">X32</span>
      </button>

      {/* BLACK button */}
      <div className="relative">
        <button
          className="bg-black border-2 border-[#1a1a1a] text-white font-medium text-sm w-28 h-16 flex flex-col items-center justify-center hover:bg-gray-900 transition-colors relative overflow-hidden"
          style={{
            borderRadius: '25px',
          }}
        >
          <span>BLACK</span>
          <span className="font-bold">X2</span>

          <div
            style={{
              position: 'absolute',
              top: 2,
              left: 2,
              right: 2,
              bottom: 2,
              borderTop: '2px solid rgba(255, 255, 255, 0.2)',
              borderLeft: '2px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '25px',
              pointerEvents: 'none',
              boxSizing: 'border-box',
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default BettingButtons;
