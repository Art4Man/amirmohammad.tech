import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "", id }) => (
  <div 
    id={id} 
    className={`rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.04)] p-6 ${className}`}
    style={{ backgroundColor: 'var(--card-background)' }}
  >
    {children}
  </div>
);