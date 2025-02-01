import React from 'react'
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"

export function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <Input
        type="text"
        placeholder="Search tasks, courses, or notes..."
        className="w-full pl-10 pr-4 py-2 border-[0.5px] border-gray-600 outline-none text-sm text-white bg-gray-900 rounded-lg  "
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="w-5 h-5 text-gray-500" />
      </div>
    </div>
  )
}
