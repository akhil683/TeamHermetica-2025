import React from "react";

const CardBackgroundShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-purple-300 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-yellow-300 rounded-lg opacity-30 animate-bounce-slow"></div>
      <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="rgba(139, 92, 246, 0.2)" strokeWidth="2">
          <animate attributeName="d" values="M0,50 Q25,25 50,50 T100,50; Q25,75 T100,50" dur="10s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
};

export default CardBackgroundShapes;

