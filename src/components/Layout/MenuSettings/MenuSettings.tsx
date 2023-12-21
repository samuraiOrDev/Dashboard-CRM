'use client'
import React, { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { IoSettingsSharp } from "react-icons/io5";

import { Title } from './Title';
import { SideNavColors } from './SideNavColors';
import { SideNavType } from './SideNavType';
import { NavBarFixed } from './NavBarFixed';
import { LayoutContext } from '@/context';


export const MenuSettings = () => {
  const { activeSettings, handleActiveSettings } = useContext(LayoutContext)

  return (
    <div >
      <button className="flex items-center justify-center bottom-7.5 right-7.5 text-xl z-990 shadow-soft-lg rounded-full fixed cursor-pointer bg-white px-2 py-2 text-slate-700" onClick={handleActiveSettings}>
        <IoSettingsSharp className="h-6 w-6" />
      </button>
      <AnimatePresence>

        {
          activeSettings && (

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              key="transition-component"
              transition={{ ease: 'easeInOut', duration: 0.5 }}
              className=" transition-component z-sticky shadow-soft-3xl w-90 ease-soft fixed top-0 left-auto flex  h-full min-w-0 flex-col break-words rounded-none border-0 bg-white bg-clip-border px-2.5  right-0">

              <Title handleActive={handleActiveSettings} />
              <hr className="h-px mx-0 my-1 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />
              <div className="flex-auto p-6 pt-0 sm:pt-4">

                <SideNavColors />

                <SideNavType />

                <NavBarFixed />

              </div>

            </motion.div>

          )
        }
      </AnimatePresence>
    </div>
  )
}
