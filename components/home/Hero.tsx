"use client"

import { motion } from "framer-motion"
import StarBackground from "./StarBackground"
import { AnimatedCircle } from "./AnimatedCircle"
import { AnimatedTitle } from "./AnimatedTitle"
import { useSession } from "next-auth/react"
import Image from "next/image"

const HeroSection = () => {
  const { data: session } = useSession()

  return (
    <section className="relative h-screen bg-gradient-to-b from-black  overflow-hidden flex items-center">
      <StarBackground />
      <AnimatedCircle />
      <div className="container mx-auto px-4 relative z-10 mt-16">
        <div className="mx-auto text-center md:space-y-16 space-y-36">
          <motion.h1
            initial={{ translateY: 100, scale: 0.8, opacity: 0.5 }}
            animate={{ translateY: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative text-3xl md:text-4xl bg-clip-text font-semibold inline-block text-transparent bg-gradient-to-tr from-purple-400 via-blue-400 to-pink-400">
            We React to What Matter !
          </motion.h1>
          <AnimatedTitle />
          <div className="flex flex-col gap-6 justify-center items-center">
            <motion.p
              className="text-gray-300 md:font-semibold md:text-xl md:px-40 lg:px-72"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
            </motion.p>
            {session?.user && (
              <motion.div
                initial={{ opacity: 0, translateY: 50 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex justify-center items-center text-xl">
                <button className=" rounded-xl text-white py-2 px-6 flex flex-col justify-center items-center gap-2">
                  Welcome,{""}
                  <div className="px-6 font-semibold py-2 flex justify-center items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 via-indigo-400 to-pink-400">
                    <Image
                      src={session?.user?.image as string}
                      width={200}
                      height={200}
                      alt="Profile Image"
                      className="rounded-full w-6 h-6"
                    />
                    {session?.user?.name}
                  </div>
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>

  )
}

export default HeroSection
