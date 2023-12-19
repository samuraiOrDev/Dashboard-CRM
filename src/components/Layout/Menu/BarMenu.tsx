import React from 'react'

export const BarMenu = ({ text }: { text: string }) => {
  return (
    <li className="w-full mt-4">
      <h6 className="pl-6 ml-2 text-xs font-bold leading-tight uppercase opacity-60">{text}</h6>
    </li>
  )
}
