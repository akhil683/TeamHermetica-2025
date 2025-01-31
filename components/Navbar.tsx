"use client"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { FlaskRoundIcon as Flask, Instagram, Linkedin, Loader2, LogOut, Menu, Youtube } from "lucide-react"
import Image from "next/image"
import logo from "../public/hermetica-logo.jpg"
import { signIn, signOut, useSession } from "next-auth/react"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "./ui/sheet"


export function Navbar() {

  const { data: session } = useSession()

  const [loading, setLoading] = useState(false)
  const [logoutLoading, setLogoutLoading] = useState(false)

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

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ]

  return (
    <>
      <motion.header
        initial={{ translateY: -100, scaleX: 0.8, opacity: 40 }}
        animate={{ translateY: 0, opacity: 100, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="fixed top-0 left-0 right-0 flex justify-center gap-2 py-4 px-4 md:px-20 z-50" >
        <nav className="flex items-center justify-between px-3 py-2 bg-black/40  text-black backdrop-blur-md rounded-full">
          <Sheet>
            <SheetTrigger asChild>
              <Button aria-label="mobile-menu" variant="ghost" className="bg-indigo-700 rounded-full text-white hover:text-white hover:bg-purple-600">
                <Menu className="h-12 w-12" />
              </Button>
            </SheetTrigger>
            <SheetContent side={"left"} style={{
              background: "linear-gradient(0deg, #1A001F, #3E065F, #700B97, #8E05C2)"
            }}>
              <SheetTitle></SheetTitle>
              <div className="text-white my-4">
                <div className="flex flex-col gap-4">
                  <SheetClose asChild>
                    <Link
                      href="/projects"
                      className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                    >
                      Projects
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/events"
                      className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                    >
                      Events
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/guest-lectures"
                      className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                    >
                      Guest Lectures
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/members"
                      className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                    >
                      Members
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/gallery"
                      className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                    >
                      Gallery
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      href="/about"
                      className="text-lg font-medium hover:text-purple-400 transition-colors text-center py-3"
                    >
                      About Us
                    </Link>
                  </SheetClose>
                  {session?.user ? (
                    <SheetClose asChild className="text-center">
                      <div
                        className="md:hidden bg-purple-500 hover:bg-purple-600 text-white text-center rounded-full px-6 py-6 mt-2 flex justify-center items-center"
                        onClick={handleSignOut}
                      >
                        <span className="relative text-center z-10 flex gap-2">
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
                      </div>
                    </SheetClose>
                  ) : (
                    <SheetClose asChild>
                      <div
                        className="md:hidden bg-purple-500 hover:bg-purple-600 text-center flex justify-center items-center text-white rounded-full px-6 py-4 mx-4 mt-2"
                        onClick={handleSignIn}
                      >
                        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                        Sign In
                      </div>
                    </SheetClose>
                  )}
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                {socialLinks.map((social, _) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center hover:bg-purple-600 transition-colors hover:scale-110 duration-200"
                  >
                    <social.icon className="w-5 h-5 text-white" />
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </nav>
        <nav className="flex items-center justify-between px-3 md:px-8 py-2 bg-black/40  text-black backdrop-blur-md rounded-full w-[95%]">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Hermetica Logo"
              width={100}
              height={100}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-lg md:text-xl font-bold text-white">
              Hermetica
            </span>
          </Link>
          <div className="flex items-center gap-4">
          </div>
        </nav>
        <nav className="flex items-center justify-between px-3 py-2 bg-black/40  text-black backdrop-blur-md rounded-full">

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
                {/* LOG OUT */}
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
        </nav>
      </motion.header >
    </>
  )
}

