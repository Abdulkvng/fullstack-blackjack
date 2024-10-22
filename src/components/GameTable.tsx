import React from 'react';

interface GameTableProps {
  children: React.ReactNode;
}

function GameTable({ children }: GameTableProps) {
  return (
    <div className="relative w-full max-w-4xl mx-auto h-[500px] rounded-[40px] bg-gradient-to-b from-emerald-700 to-emerald-600 shadow-2xl border border-emerald-500/20">
      <div className="absolute inset-4 rounded-[32px] bg-emerald-800/40 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}

export default GameTable;