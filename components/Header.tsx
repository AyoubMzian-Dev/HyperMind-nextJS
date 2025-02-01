'use client'
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Bell } from "lucide-react"
import { SearchBar } from "./SearchBar"
import Link from "next/link"
import {usePathname} from "next/navigation";




export const Header = () => {
  const corentPath:string = usePathname()
    const page = corentPath.split('/')[1].split('/')[0];
    return (
      <header className="fixed z-50 w-full self-end  bg-sectionsBackground flex justify-between items-center p-4 ">
          {/* TODO improve the search input*/}
          <h1 className="text-2xl">{page}</h1>
          <SearchBar/>
          <ul className="group-1 flex justify-around items-center">
              <SignedIn>
                  {/* Mount the UserButton component */}
                  <UserButton showName={true}/>
              </SignedIn>

              <Link href={'/notifications'} className="mx-4">
                  <Bell/>
              </Link>
          </ul>

      </header>
  )
}
