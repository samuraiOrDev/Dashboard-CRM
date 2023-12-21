
import { LayoutContext } from '@/context';
import React, { useContext } from 'react'
import { IoSettingsSharp } from "react-icons/io5";
export const Settings = () => {
  const { handleActiveSettings } = useContext(LayoutContext)
  return (
    <li className="flex items-center px-4">
      <button className="p-0 transition-all text-sm ease-nav-brand text-slate-500" onClick={handleActiveSettings}>
        <IoSettingsSharp className="w-4 h-4" />
      </button>
    </li>
  )
}
