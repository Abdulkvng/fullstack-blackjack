import React from 'react';

interface CardProps {
  value: string;
}

function Card({ value }: CardProps) {
  const isHidden = value === 'hidden';
  
  return (
    <div className={`w-24 h-36 rounded-xl ${
      isHidden 
        ? 'bg-gradient-to-br from-blue-600 to-blue-800 border-2 border-blue-400/30' 
        : 'bg-white'
    } shadow-xl relative transform transition-transform hover:scale-105`}>
      {!isHidden && (
        <div className="absolute inset-2 text-2xl font-bold">
          {value}
        </div>
      )}
      {isHidden && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-blue-400/20" />
        </div>
      )}
    </div>
  );
}

export default Card;