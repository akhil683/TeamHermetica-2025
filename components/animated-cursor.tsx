"use client"

import { useEffect, useState } from "react"

export default function AnimatedCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <svg
      className="pointer-events-none fixed inset-0 z-50 h-full w-full"
      style={{ position: "fixed" }}
    >
      <path
        d="M 0 L"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-purple-500"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "'transform 0.1s ease-out'",
        }}
      />
    </svg>
  )
}

