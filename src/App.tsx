import React, { useState } from 'react';
import { Cards, Coins, Trophy, RotateCcw } from 'lucide-react';
import GameTable from './components/GameTable';
import Card from './components/Card';
import ActionButton from './components/ActionButton';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const [chips, setChips] = useState(1000);
  const [currentBet, setCurrentBet] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-900 to-emerald-800">
      {/* Header */}
      <header className="bg-black/30 backdrop-blur-sm p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Cards className="h-8 w-8 text-yellow-500" />
            <h1 className="text-2xl font-bold text-white">Royal Blackjack</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
              <Coins className="h-5 w-5 text-yellow-400" />
              <span className="text-yellow-400 font-bold">{chips}</span>
            </div>
            <div className="flex items-center gap-2 bg-black/20 rounded-full px-4 py-2">
              <Trophy className="h-5 w-5 text-purple-400" />
              <span className="text-white font-bold">Level 1</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Game Area */}
      <main className="container mx-auto px-4 py-8">
        <GameTable>
          {/* Dealer's Cards */}
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-gray-300 text-sm">Dealer's Hand</span>
              <div className="flex justify-center gap-2 mt-2">
                <Card value="hidden" />
                <Card value="K♠" />
              </div>
            </div>

            {/* Player's Cards */}
            <div className="text-center mt-16">
              <span className="text-gray-300 text-sm">Your Hand (15)</span>
              <div className="flex justify-center gap-2 mt-2">
                <Card value="8♥" />
                <Card value="7♦" />
              </div>
            </div>
          </div>
        </GameTable>

        {/* Game Controls */}
        <div className="mt-8">
          <ScoreBoard currentBet={currentBet} />
          
          <div className="flex justify-center gap-4 mt-6">
            <ActionButton onClick={() => {}} variant="success">
              Hit
            </ActionButton>
            <ActionButton onClick={() => {}} variant="danger">
              Stand
            </ActionButton>
            <ActionButton onClick={() => {}} variant="warning">
              Double
            </ActionButton>
            <ActionButton onClick={() => {}} variant="secondary">
              <RotateCcw className="h-5 w-5" />
            </ActionButton>
          </div>

          {/* Betting Controls */}
          <div className="flex justify-center gap-2 mt-6">
            {[10, 25, 50, 100].map((amount) => (
              <button
                key={amount}
                onClick={() => setCurrentBet(currentBet + amount)}
                className="chip-button"
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;