"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export const AnimatedCircle = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
      <motion.div
        className="w-[100vw] aspect-square border-[3px] rounded-full absolute bottom-1/2 left-0 origin-bottom"
        initial={{ scaleY: 2, scaleX: 2, translateY: 300 }}
        animate={{ scaleY: isMounted ? 0.9 : 2, scaleX: isMounted ? 0.9 : 2, translateY: 200 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        style={{
          borderColor: "#4F46E5",
          boxShadow: `
            0 0 10px #5D3FD3,
            0 0 20px #4F46E5,
            0 -50px 200px #4F46E5,
            0 -100px 500px #5D3FD3,
            inset 0 0 10px #5D3FD3,
            inset 0 0 120px #4F46E5,
            inset 0 0 200px #5D3FD3
          `,
          background: "linear-gradient(180deg, rgba(79, 70, 229, 0.6) 0%, rgba(79, 70, 229, 0) 100%)",
        }}
      />
    </div>
  )
}

