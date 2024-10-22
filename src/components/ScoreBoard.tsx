import React from 'react';

interface ScoreBoardProps {
  currentBet: number;
}

function ScoreBoard({ currentBet }: ScoreBoardProps) {
  return (
    <div className="flex justify-center gap-8">
      <div className="bg-black/30 rounded-xl px-6 py-3 text-center">
        <span className="text-gray-400 text-sm block">Current Bet</span>
        <span className="text-yellow-400 text-xl font-bold">${currentBet}</span>
      </div>
    </div>
  );
}

export default ScoreBoard;