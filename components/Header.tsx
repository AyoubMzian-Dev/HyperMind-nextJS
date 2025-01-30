
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Bell } from "lucide-react"
import { SearchBar } from "./SearchBar"
import Link from "next/link"




export const Header = () => {
  return (
    <header className="fixed z-20 w-[calc(100%-12rem)] self-end bg-sidebar bg-gray-900 flex justify-between items-center p-4 ">
      <ul className="group-1 flex justify-around items-center">

        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>

        <Link href={'/notifications'} className="mx-4">
          <Bell />
        </Link>
      </ul>

      <SearchBar />
      
    <div>
      <Link href={'/profile'} className="text-white text-2xl font-bold">user profile</Link>
    </div>


    </header>
  )
}
