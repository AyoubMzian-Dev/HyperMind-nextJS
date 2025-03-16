'use client'
import React from 'react'
import { SignedIn, UserButton } from '@clerk/nextjs'
import { Bell, ChevronLeft } from "lucide-react"
import { SearchBar } from "./SearchBar"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from './ui/button'
import Image from "next/image"
import Logo from '@/public/logo.png'

export const Header = () => {
  const pathname = usePathname()
  const router = useRouter()
  const isLessonPage = pathname?.includes('/lessons/')
  const page = pathname.split('/')[1]?.charAt(0).toUpperCase() + pathname.split('/')[1]?.slice(1) || 'Dashboard'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-14  w-full bg-gray-950/80 backdrop-blur-sm border-b border-gray-800`}>
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center gap-3">
          {isLessonPage ? (
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-gray-800 h-8 w-8 p-0"
              onClick={() => router.back()}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          ) : (
            <Link href="/" className="flex items-center lg:w-48 gap-2">
              <Image src={Logo} alt="HyperMind Logo" width={28} height={28} className="object-contain" />
              <h1 className="text-lg font-semibold"><span className="text-green-500">Hyper</span>Mind</h1>
            </Link>
          )}
          <div className="h-6 w-px bg-gray-800" />
          <h1 className="text-md font-medium text-gray-400">{page}</h1>
        </div>

        <div className="flex items-center gap-4">
          <SearchBar />
          
          <div className="flex items-center gap-2">
            <Link href="/notifications">
              <Button variant="ghost" size="sm" className="hover:bg-gray-800 h-8 w-8 p-0">
                <Bell className="h-4 w-4" />
              </Button>
            </Link>
            
            <div className="border border-gray-800 rounded-md bg-gray-900/50">
              <SignedIn>
                <UserButton
                  showName={true}
                  appearance={{
                    elements: {
                      userButtonBox: "hover:bg-gray-800 rounded-md transition-colors",
                      userButtonTrigger: "p-0.5",
                      userButtonAvatarBox: "w-6 h-6"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
