export default function AnimatedCharacter() {
  return (
    <svg
      className="absolute -z-10 opacity-10"
      width="200"
      height="200"
      viewBox="0 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="4" className="text-purple-500">
        <animate attributeName="r" from="80" to="90" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="70" r="20" fill="currentColor" className="text-yellow-500">
        <animate attributeName="cy" from="70" to="75" dur="1s" repeatCount="indefinite" />
      </circle>
      <path d="M70 120 Q100 150 130" stroke="currentColor" strokeWidth="4" className="text-purple-500">
        <animate attributeName="d" 
                 values="M70 120 Q100 150 130 120; 140" 
                 dur="2s" 
                 repeatCount="indefinite" />
      </path>
    </svg>
  )
}

