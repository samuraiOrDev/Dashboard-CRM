import Link from 'next/link'
import React from 'react'

export const Settings = () => {
  return (
    <li className="flex items-center px-4">
      <button className="p-0 transition-all text-sm ease-nav-brand text-slate-500">
        <i className="cursor-pointer fa fa-cog"></i>
      </button>
    </li>
  )
}
