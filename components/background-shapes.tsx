export default function BackgroundShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Circles */}
      {/* <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" /> */}
      {/* <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" /> */}
      {/* <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" /> */}

      {/* Lines */}
      <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2">
          <animate attributeName="y2" values="100%;0%;100%" dur="20s" repeatCount="indefinite" />
        </line>
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="rgba(245, 158, 246, 0.3)" strokeWidth="2">
          <animate attributeName="x2" values="0;100%;0" dur="25s" repeatCount="indefinite" />
        </line>
        <path d="M0,50 Q50,0 100,50 T200,50" fill="none" stroke="rgba(236, 72, 153, 0.6)" strokeWidth="2">
          <animate attributeName="d" values="M0,50 Q50,0 100,50 T200,50; Q50,100 T200,50" dur="30s" repeatCount="indefinite" />
        </path>
      </svg>

      {/* Shapes */}
      {/* <div className="absolute top-1/3 left-1/6 w-12 h-12 bg-purple-300 rounded-lg transform rotate-45 animate-spin-slow" /> */}
      {/* <div className="absolute bottom-1/4 right-1/5 w-16 h-16 bg-yellow-300 rounded-full animate-bounce" /> */}
      {/* <div className="absolute top-2/3 right-1/3 w-8 h-8 border-4 border-pink-300 rounded-full animate-pulse" /> */}
    </div>
  )
}

