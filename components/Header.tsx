
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Plus, Bell } from "lucide-react"
import { SearchBar } from "./SearchBar"
import Link from "next/link"
import SideBarForm from './sideBarForm'



export const Header = () => {
  return (
    <header className="w-[calc(100%-12rem)] self-end bg-sidebar bg-gray-900 flex justify-between items-center p-4 ">
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
      <SideBarForm>
      <Plus className="mr-2 w-4"/>Create new task 
      </SideBarForm>



    </header>
  )
}
