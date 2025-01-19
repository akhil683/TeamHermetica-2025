"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { FlaskRoundIcon as Flask, Loader2, LogOut, Menu } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import logo from "../public/hermetica-logo.jpg"
import { signIn, signOut, useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"



export function Navbar() {

  const { data: session } = useSession()

  const [isOpen, setIsOpen] = useState(false)

  const [loading, setLoading] = useState(false)
  const [logoutLoading, setLogoutLoading] = useState(false)

  const { toast } = useToast()

  const toggleMenu = () => setIsOpen(!isOpen)

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

  const handleSignOut = async () => {
    setLogoutLoading(true)
    try {
      await signOut()
      toast({
        title: "Logout Success !",
        description: "You are logged out successfully"
      })

    } catch (SignOutError) {
      console.log("Error during signout: ", SignOutError)
      toast({
        title: "Error !",
        description: "Unexpected error during signout."
      })
    } finally {
      setLogoutLoading(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 flex justify-center p-4 z-50" >
        <nav className="flex items-center justify-between px-3 md:px-8 py-2 bg-gray-800/80  text-black backdrop-blur-md rounded-full w-[95%]">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Hermetica Logo"
              width={100}
              height={100}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-lg md:text-xl font-bold text-white">
              Team Hermetica
            </span>
          </Link>
          <div className="flex items-center gap-4">
            {session?.user ? (
              <Button
                className="max-md:hidden bg-indigo-700 text-white hover:bg-gray-800 px-6 md:py-5 py-3 rounded-full group relative overflow-hidden"
                onClick={handleSignOut}
                disabled={logoutLoading}
              >
                <span className="relative z-10 flex gap-2">
                  <Image
                    src={session.user.image as string}
                    alt={session.user.name as string}
                    width={100}
                    height={100}
                    className="w-5 h-5 rounded-full"
                  />
                  LOG OUT
                  <LogOut className="h-4 w-4" />
                </span>
                <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
              </Button>
            ) : (
              <Button
                className="max-md:hidden bg-indigo-700 text-white hover:bg-gray-800 px-6 md:py-5 py-3 rounded-full group relative overflow-hidden"
                disabled={loading}
                onClick={handleSignIn}
              >
                <span className="relative z-10 flex gap-2">
                  {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                  SIGN IN
                </span>
                <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
              </Button>

            )}
            <Button variant="ghost" className="bg-indigo-700 rounded-full text-white hover:text-white hover:bg-purple-600" onClick={toggleMenu}>
              <Menu className="h-12 w-12" />
            </Button>
          </div>
        </nav>
      </header >

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            />
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "100%" }}
              transition={{ type: "spring", damping: 40, stiffness: 500 }}

              className="fixed bottom-0 left-0 right-0 bg-gray-900/80 text-white backdrop-blur-xl p-6 rounded-t-3xl border border-neutral-200 border-purple-500/20 z-50 dark:border-neutral-800"
            >
              <div className="flex flex-col gap-4">
                <Link
                  href="/projects"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
                <Link
                  href="/events"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Events
                </Link>
                <Link
                  href="/guest-lectures"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Guest Lectures
                </Link>
                <Link
                  href="/members"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Members
                </Link>
                <Link
                  href="/gallery"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  Gallery
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                {session?.user ? (
                  <Button
                    className="md:hidden bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-6 mt-2"
                    onClick={handleSignOut}
                  >
                    <span className="relative z-10 flex gap-2">
                      <Image
                        src={session.user.image as string}
                        alt={session.user.name as string}
                        width={100}
                        height={100}
                        className="w-5 h-5 rounded-full"
                      />
                      LOG OUT
                      <LogOut className="h-4 w-4" />
                    </span>
                    <div className="absolute inset-0 bg-purple-600 transform translate-y-full group-hover:translate-y-0 transition-transform" />
                  </Button>
                ) : (
                  <Button
                    className="md:hidden bg-purple-500 hover:bg-purple-600 text-white rounded-full px-6 py-6 mt-2"
                    onClick={handleSignIn}
                    disabled={loading}
                  >
                    {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                    Sign In
                  </Button>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

