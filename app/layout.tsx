import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/footer";

import "./globals.css";
import { SessionProvider } from "next-auth/react";

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Team-Hermetica",
  description: "We React to what matters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <body
          className={`${spaceGrotesk.className} antialiased bg-black`}
        >
          <Navbar />
          {children}
          {/* Footer */}
          <Footer />
        </body>
      </SessionProvider>
    </html>
  );
}
