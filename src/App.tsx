import React, { useState } from "react";
import CardRow from "./components/CardRow";
import BetControls from "./components/BetControls";
import BettingButtons from "./components/BettingButtons";
import RiskModeToggle from "./components/RiskModeToggle";
import ControlBar from "./components/ControlBar";

export function App() {
  const [betAmount, setBetAmount] = useState(0.3);

  const increaseBet = () => {
    setBetAmount((prev) => parseFloat((prev + 0.1).toFixed(2)));
  };

  const decreaseBet = () => {
    setBetAmount((prev) =>
      prev > 0.1 ? parseFloat((prev - 0.1).toFixed(2)) : prev
    );
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#3b5097] to-[#214ea9] shadow-2xl space-y-10 flex flex-col justify-center items-center p-3 w-full">
      <ControlBar />
      <CardRow />
      <div className="flex justify-center">
        <RiskModeToggle />
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 bg-gradient-to-r from-[#2c3f79] to-[#2a3e7a] py-3 w-full rounded-lg">
        <BetControls
          betAmount={betAmount}
          onIncrease={increaseBet}
          onDecrease={decreaseBet}
        />
        <BettingButtons />
      </div>
    </div>
  );
}
