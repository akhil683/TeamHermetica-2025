import React from "react";

const MovingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-purple-300 rounded-full opacity-50 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-yellow-300 rounded-lg opacity-50 animate-float animation-delay-1000"></div>
      <div className="absolute top-3/4 left-1/2 w-8 h-8 bg-pink-300 transform rotate-45 opacity-50 animate-float animation-delay-2000"></div>
      <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,100 Q50,50 100,100 T200,100" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="2">
          <animate attributeName="d" values="M0,100 Q50,50 100,100 T200,100; Q50,150 T200,100" dur="10s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
};

export default MovingShapes;

