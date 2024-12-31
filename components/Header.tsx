import { Button } from "@/components/ui/button"
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Plus } from "lucide-react"
import { SearchBar } from "./SearchBar"

export const Header = () => {
  return (
    <header className="w-full bg-sidebar bg-gray-900 flex justify-between items-center p-4 ">
        <ul className="group-1">
            
            <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
            </SignedIn>
        </ul>

        <SearchBar/>

        <ul className="group-2 flex items-center">
            <Button variant="secondary" className="bg-green-600 text-gray-200 hover:bg-green-700"><Plus className=""/>Create new task </Button>
            
        </ul>
    </header>
  )
}
