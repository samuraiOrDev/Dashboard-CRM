import { LayoutContext } from '@/context/layout'
import React, { useContext } from 'react'

export const SideNavColors = () => {

    const { changeThemeSidebar, handleThemeSidebar } = useContext(LayoutContext)
    return (
        <>
            <div className='mb-4'>
                <h6 className="mb-0">Sidebar Colors</h6>
                <h6>Theme:
                    {changeThemeSidebar === 'theme-purple' && <span className="text-purple-700 font-bold"> Purple</span>}
                    {changeThemeSidebar === 'theme-black' && <span className="text-black-700 font-bold"> Black</span>}
                    {changeThemeSidebar === 'theme-blue' && <span className="text-blue-700 font-bold"> Blue</span>}
                    {changeThemeSidebar === 'theme-green' && <span className="text-green-700 font-bold"> Green</span>}
                    {changeThemeSidebar === 'theme-yellow' && <span className="text-yellow-700 font-bold"> Yellow</span>}
                    {changeThemeSidebar === 'theme-red' && <span className="text-red-700 font-bold"> Red</span>}
                </h6>
            </div>
            <div>
                <div className="my-2 text-left">

                    <div className={`text-xs rounded-circle h-5.75 mr-1.25 w-5.75  bg-gradient-to-tl from-purple-700 to-pink-500 relative inline-block cursor-pointer whitespace-nowrap border border-solid text-center align-baseline font-bold uppercase leading-none text-white hover:border-slate-700 ${changeThemeSidebar === 'theme-purple' ? 'border-slate-700' : ''}`} onClick={() => handleThemeSidebar("theme-purple")}></div>

                    <div className={`text-xs rounded-circle h-5.75 mr-1.25 w-5.75 bg-gradient-to-tl from-gray-900 to-slate-800 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white  hover:border-slate-700 ${changeThemeSidebar === 'theme-black' ? 'border-slate-700' : ''}`} onClick={() => handleThemeSidebar("theme-black")}></div>

                    <div className={`text-xs rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-blue-600 to-cyan-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700 ${changeThemeSidebar === 'theme-blue' ? 'border-slate-700' : ''}`} onClick={() => handleThemeSidebar("theme-blue")}></div>

                    <div className={`text-xs rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-green-600 to-lime-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700 ${changeThemeSidebar === 'theme-green' ? 'border-slate-700' : ''}`} onClick={() => handleThemeSidebar("theme-green")}></div>

                    <div className={`text-xs rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-red-500 to-yellow-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700 ${changeThemeSidebar === 'theme-yellow' ? 'border-slate-700' : ''}`} onClick={() => handleThemeSidebar("theme-yellow")}></div>

                    <div className={`text-xs rounded-circle h-5.75 mr-1.25 w-5.75 ease-soft-in-out bg-gradient-to-tl from-red-600 to-rose-400 relative inline-block cursor-pointer whitespace-nowrap border border-solid border-white text-center align-baseline font-bold uppercase leading-none text-white transition-all duration-200 hover:border-slate-700 ${changeThemeSidebar === 'theme-red' ? 'border-slate-700' : ''}`} onClick={() => handleThemeSidebar("theme-red")}></div>

                </div>
            </div>
        </>
    )
}
