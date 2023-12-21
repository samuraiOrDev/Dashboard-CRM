import React from 'react'
import { Search } from './Search'
import Link from 'next/link'
import { LogOut } from './LogOut'
import { Settings } from './Settings'
import { Notifications } from './Notifications'

export const MenuNavBar = () => {
  return (
    <div className="flex items-center mt-2 grow sm:mt-0 sm:mr-6 md:mr-0 lg:flex lg:basis-auto">
      <Search />
      <ul className="flex flex-row items-center justify-end pl-0 mb-0 list-none md-max:w-full">
        <LogOut />
        {/* Notifications */}
        <li className="flex items-center pl-4 xl:hidden">
          <Link href="#" className="block p-0 transition-all ease-nav-brand text-sm text-slate-500">
            <div className="w-4.5 overflow-hidden">
              <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
              <i className="ease-soft mb-0.75 relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
              <i className="ease-soft relative block h-0.5 rounded-sm bg-slate-500 transition-all"></i>
            </div>
          </Link>
        </li>
        <Settings />
        <Notifications />
      </ul>
    </div>
  )
}
