"use client"; // Ensure this is a client component
import Link from 'next/link';
import Image from 'next/image';
import {  usePathname } from 'next/navigation';
import Logo from "@/public/logo.png"
import { GoHomeFill } from "react-icons/go";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiBook } from "react-icons/tfi";
import { GrTask } from "react-icons/gr";



export const LeftSideBar = () => {
  const pathname = usePathname();
  const commonButtonClasses = "p-3 pl-8 m-1 flex items-center rounded-lg hover:bg-gray-700 cursor-pointer";

  const getLinkClasses = (path: string) => {
    return pathname === path ? `${commonButtonClasses} bg-green-700` : commonButtonClasses;
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white w-64 p-4">
      <div className="flex items-center mb-6">
        <div className="rounded-full px-2 pt-2 text-center flex justify-center" aria-label="IT logo">
          <Image alt='img-logo' src={Logo} width={44}/>
        </div>
        <h1 className="ml-2 text-xl font-bold">Intrack</h1>
      </div>
      <div className="flex flex-col  justify-between h-full">
        <div className=' flex flex-col space-y-2'>
            <Link href="/app" className={getLinkClasses('/app')}><GoHomeFill className='mr-2  text-xl'/>Home</Link>
            <Link href="/app/dashboard" className={getLinkClasses('/app/dashboard')}><LuLayoutDashboard className='mr-2  text-xl'/> Dashboard</Link>
            <Link href="/app/subjects" className={getLinkClasses('/app/subjects')}><TfiBook className='mr-2  text-xl'/>Subjects</Link>
            <Link href="/app/tasks" className={getLinkClasses('/app/tasks')}><GrTask className='mr-2  text-xl'/>Tasks</Link>
            <hr className="border-t border-gray-600 my-2"/>
        </div>
        <div className="mt-auto p-4 bg-gray-800 rounded-lg">
            <h2 className="text-lg font-semibold">Upgrade Plan</h2>
            <p className="text-sm">Get special offers up to 12 months</p>
            <button className="mt-2 w-full bg-green-600 p-2 rounded-lg" aria-label="Upgrade Plan">Upgrade</button>
        </div>
        <div className='flex flex-col'>
            <Link href="/team" className={getLinkClasses('/team')}>Team</Link>
            <Link href="/clients" className={getLinkClasses('/clients')}>Clients</Link>
            <Link href="/settings" className={getLinkClasses('/settings')}>Settings</Link>
        </div>
      </div>
      
    </div>
  )
}
