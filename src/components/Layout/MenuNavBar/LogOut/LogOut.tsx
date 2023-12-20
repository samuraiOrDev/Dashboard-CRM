import Link from 'next/link'
import React from 'react'

export const LogOut = () => {
  return (
    <li className="flex items-center">
      <Link href="#" className="block px-0 py-2 font-semibold transition-all ease-nav-brand text-sm text-slate-500">
        <i className="fa fa-user sm:mr-1"></i>
        <span className="hidden sm:inline">Log out</span>
      </Link>
    </li>
  )
}
