import React, { useContext } from 'react'

import { IoApps, IoLogInOutline } from "react-icons/io5"
import { MdOutlineTask } from "react-icons/md"
import { CgProfile } from "react-icons/cg";
import { TbEdit } from "react-icons/tb";

import { LinkMenu } from './LinkMenu'
import { BarMenu } from './BarMenu'


export const Menu = () => {

  const linkMenuArray = [
    {
      href: '/dashboard',
      text: 'Dashboard',
      children: <IoApps className="h-5 w-5" />,
    },
    {
      href: '/tables',
      text: 'Tables',
      children: <MdOutlineTask className="h-5 w-5" />
    }
  ]
  const accountPagesArray = [
    {
      href: '/profile',
      text: 'Profile',
      children: <CgProfile className="h-5 w-5" />
    },
    {
      href: '/login',
      text: 'Sign In',
      children: <IoLogInOutline className="h-5 w-5" />
    },
    {
      href: '/register',
      text: 'Sign Up',
      children: <TbEdit className="h-5 w-5" />
    },
  ]

  return (
    <div className="items-center block w-auto max-h-screen overflow-auto h-sidenav grow basis-full">
      <ul className="flex flex-col pl-0 mb-0">
        {
          linkMenuArray.map((linkMenu, index) => (
            <LinkMenu key={index} href={linkMenu.href} text={linkMenu.text}>
              {linkMenu.children}
            </LinkMenu>
          ))
        }
        <BarMenu text="Account Pages" />
        {
          accountPagesArray.map((linkMenu, index) => (
            <LinkMenu key={index} href={linkMenu.href} text={linkMenu.text}>
              {linkMenu.children}
            </LinkMenu>
          ))
        }

      </ul>
    </div>
  )
}
