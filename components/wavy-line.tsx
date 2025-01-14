export default function WavyLine() {
  return (
    <svg
      className="absolute left-1/2 -translate-x-1/2"
      width="400"
      height="400"
      viewBox="0 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200 0C200 100 300 200C300 200 400"
        stroke="currentColor"
        strokeWidth="2"
        className="text-green-600"
        strokeDasharray="5,5"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          from="0"
          to="0 -400"
          dur="20s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

