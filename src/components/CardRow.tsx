import React from "react";
import fireIcon from "../assets/fire2.png";

const CardRow = () => {
  const cards = [0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 0, 1];

  let blackCardCount = 0;
  let highlightIndex = -1;

  for (let i = 0; i < cards.length; i++) {
    if (cards[i] === 0) {
      blackCardCount++;
      if (blackCardCount === 4) {
        highlightIndex = i;
        break;
      }
    }
  }

  return (
    <div className="relative border border-white/20 w-full py-12 bg-gradient-to-r from-[#2c3f79] to-[#2a3e7a] rounded-lg">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-t-[12px] border-t-white border-r-[12px] border-r-transparent" />
      </div>

      <div className="flex justify-center items-center py-4 px-2">
        <div className="flex flex-wrap justify-center gap-2 w-full">
          {cards.map((type, index) => {
            let bgColor = "";
            let borderColor = "";
            let bottomStripColor = "";

            if (type === 0) {
              bgColor = "bg-[#0f1b33]";
              borderColor = "border-[#2a3657]";
              bottomStripColor = "bg-[#0a1428]";
            } else if (type === 1) {
              bgColor = "bg-[#e63946]";
              borderColor = "border-[#f17c84]";
              bottomStripColor = "bg-[#a6023d]";
            } else {
              bgColor = "bg-[#f9a825]";
              borderColor = "border-[#ffe066]";
              bottomStripColor = "bg-[#8c2c00]";
            }

            const isHighlighted = index === highlightIndex;

            return (
              <div className="relative w-16" key={index}>
                {!(isHighlighted && type === 0) && (
                  <div
                    className={`absolute w-16 h-2 ${bottomStripColor} rounded-b-md -bottom-1 z-0`}
                  />
                )}

                <div
                  className={`relative z-10 w-16 h-20 rounded-md flex justify-center items-center border-4 ${
                    isHighlighted ? "border-yellow-400" : borderColor
                  } ${bgColor}`}
                >
                  {type === 0 && (
                    <div className="w-8 h-8 rounded-full bg-[#232f5a]/80" />
                  )}
                  {type === 1 && (
                    <div className="w-8 h-8 rounded-full bg-[#f07380]" />
                  )}
                  {type === 2 && (
                    <img
                      src={fireIcon}
                      alt="fire icon"
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <div className="w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-white border-r-[12px] border-r-transparent" />
      </div>
    </div>
  );
};

export default CardRow;
