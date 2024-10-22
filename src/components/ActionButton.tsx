import React from 'react';

interface ActionButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'success' | 'danger' | 'warning' | 'secondary';
}

function ActionButton({ children, onClick, variant = 'secondary' }: ActionButtonProps) {
  const variants = {
    success: 'bg-green-500 hover:bg-green-600',
    danger: 'bg-red-500 hover:bg-red-600',
    warning: 'bg-yellow-500 hover:bg-yellow-600',
    secondary: 'bg-gray-600 hover:bg-gray-700'
  };

  return (
    <button
      onClick={onClick}
      className={`${variants[variant]} text-white font-bold py-3 px-6 rounded-full transform transition-all hover:scale-105 active:scale-95 shadow-lg`}
    >
      {children}
    </button>
  );
}

export default ActionButton;