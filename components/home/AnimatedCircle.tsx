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
      {/* Black circle */}
      <motion.div
        className="w-[120vw] aspect-square border-[3px] rounded-full absolute z-10 -left-[10vw] bottom-[calc(50%)] origin-bottom border-transparent"
        initial={{ scaleY: 1.2, scaleX: 1.2, translateY: 200 }}
        animate={{ scaleY: isMounted ? 0.70 : 1.2, scaleX: isMounted ? 0.70 : 1.2, translateY: 180 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          borderColor: "#5D3FD3",
          boxShadow: `
            0 0 10px #5D3FD3,
            0 0 90px #5D3FD3,
            inset 0 0 10px #5D3FD3,
            inset 0 0 200px #5D3FD3
          `,
          background: "linear-gradient(180deg, rgba(79, 70, 229, 0.6) 0%, rgba(79, 70, 229, 0) 100%)",
        }}
      />
      <motion.div
        className="w-[100vw] aspect-square border-[3px] rounded-full absolute left-0 bottom-1/2 origin-bottom overflow-hidden"
        initial={{ scaleY: 1.2, scaleX: 1.2, translateY: 200 }}
        animate={{ scaleY: isMounted ? 0.9 : 1.2, scaleX: isMounted ? 0.9 : 1.2, translateY: 180 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          borderColor: "#5D3FD3",
          boxShadow: `
            0 0 10px #5D3FD3,
            0 0 20px #4F46E5,
            0 -50px 200px #4F46E5,
            0 -100px 500px #5D3FD3,
            inset 0 0 10px #ffffff,
            inset 0 0 120px #FAF9F6,
            inset 0 0 200px #5D3FD3
          `,
          background: "linear-gradient(180deg, rgba(79, 70, 229, 0.6) 0%, rgba(79, 70, 229, 0) 100%)",
        }}
      >
        <motion.div
          className="w-[40vw] aspect-square border-[3px] rounded-full absolute bottom-0 left-[calc(50%-20vw)] origin-bottom"
          initial={{ scaleY: 2, scaleX: 2, translateY: 300 }}
          animate={{ scaleY: isMounted ? 0.9 : 2, scaleX: isMounted ? 0.9 : 2, translateY: 200 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          style={{
            borderColor: "#5D3FD3",
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
      </motion.div>
    </div>
  )
}

