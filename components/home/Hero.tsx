"use client"

import { Button } from "@/components/ui/Button"
import { FlaskRoundIcon as Flask, Award, Loader2 } from "lucide-react"
import { SpaceBackground } from "../SpaceBackground"
import { motion, spring } from "framer-motion"
import { useState } from "react"
import { signIn, useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import StarToMoonAnimation from "../StartToMoon"
import Particles from "./Particles"
import StarBackground from "./StarBackground"
import { AnimatedCircle } from "./AnimatedCircle"
import { AnimatedTitle } from "./AnimatedTitle"

const HeroSection = () => {
  const { data: session } = useSession()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSignIn = async () => {
    setLoading(true)
    try {
      await signIn("google")
    } catch (SignInError) {
      console.log("Error during signin: ", SignInError)
      toast({
        title: "Error !",
        description: "Failed to signin."
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="relative h-screen bg-gradient-to-b from-black  overflow-hidden flex items-center">
      <StarBackground />
      <AnimatedCircle />
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto text-center space-y-12">
          <AnimatedTitle />
          <motion.p
            className="text-xl text-gray-400 md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Team Hermetica, established in 2014, represents the Department of Chemical Engineering in the annual tech-fest NIMBUS at National Institute of Technology, Hamirpur.
          </motion.p>
          <motion.button
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Sign Up
          </motion.button>
        </div>
      </div>
    </section>

  )
}

export default HeroSection
