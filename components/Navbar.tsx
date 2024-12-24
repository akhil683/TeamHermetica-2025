import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-16 flex justify-between px-6 items-center border-b border-solid border-gray-200'>
      <div>
        <span>
          Team Hermetica
        </span>
      </div>
      <div>
        <ul className='flex justify-center items-center gap-4'>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/projects"}>Projects</Link>
          </li>
          <li>
            <Link href={"/guest-lectures"}>Guest Lectures</Link>
          </li>
          <li>
            <Link href={"/about-us"}>About Us</Link>
          </li>

        </ul>

      </div>
    </nav>
  )
}

export default Navbar
