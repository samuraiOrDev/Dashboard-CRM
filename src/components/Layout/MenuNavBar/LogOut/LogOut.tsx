import React from 'react'
import { FaUserLarge } from "react-icons/fa6";

export const LogOut = () => {
  return (
    <li className="flex items-center px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500">
      <FaUserLarge className="w-4 h-4 mr-2" />
      <span className="hidden sm:inline">Log out</span>
    </li>
  )
}
