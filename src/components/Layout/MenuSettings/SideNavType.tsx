import { LayoutContext } from '@/context'
import React, { useContext } from 'react'

export const SideNavType = () => {
    const { handleSideNavType, sideNavType } = useContext(LayoutContext)
    const bgPurple = " bg-gradient-to-tl from-purple-700 to-pink-500 bg-fuchsia-500 hover:border-fuchsia-500 text-white"
    const bgWhite = "border-fuchsia-500 bg-none text-fuchsia-500 hover:border-fuchsia-500"
    return (
        <>
            <div className="mt-4">
                <h6 className="mb-0">Sidenav Type</h6>
                <p className="text-sm leading-normal">Choose between 2 different sidenav types.</p>
            </div>
            <div className="flex">
                <button className={`inline-block w-full px-4 py-3 mb-2 text-xs font-bold text-center uppercase align-middle transition-all border border-transparent border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 ${!sideNavType ? bgPurple : bgWhite}`} onClick={() => handleSideNavType(false)}>Transparent</button>
                <button className={`inline-block w-full px-4 py-3 mb-2 ml-2 text-xs font-bold text-center uppercase align-middle transition-all bg-transparent border border-solid rounded-lg cursor-pointer xl-max:cursor-not-allowed xl-max:opacity-65 xl-max:pointer-events-none xl-max:bg-gradient-to-tl xl-max:from-purple-700 xl-max:to-pink-500 xl-max:text-white xl-max:border-0 hover:scale-102 hover:shadow-soft-xs active:opacity-85 leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 ${sideNavType ? bgPurple : bgWhite}`} onClick={() => handleSideNavType(true)}>White</button>
            </div>
            <p className="block mt-2 text-sm leading-normal xl:hidden">You can change the sidenav type just on desktop view.</p>
        </>
    )
}
