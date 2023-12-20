import { usePathname } from 'next/navigation'
import React from 'react'

export const BreadCrumb = () => {

  const pathname = usePathname()
  return (
    <div>
      <ol className="flex flex-wrap pt-1 mr-12 bg-transparent rounded-lg sm:mr-16">
        <li className="leading-normal text-sm">
          <span className="opacity-50 text-slate-700">Pages</span>
        </li>
        <li className="text-sm pl-2 capitalize leading-normal text-slate-700 before:float-left before:pr-2 before:text-gray-600 before:content-['/']" aria-current="page">{pathname.split('/')[1]}</li>
      </ol>
      <h6 className="mb-0 font-bold capitalize">{pathname.split('/')[1]}</h6>
    </div>
  )
}


