import React from 'react'

export const NavBarFixed = () => {
    return (
        <>
            <div className="mt-4">
                <h6 className="mb-0">Navbar Fixed</h6>
            </div>
            <div className="min-h-6 mb-0.5 block pl-0">
                <input className="rounded-10 duration-250 ease-soft-in-out after:rounded-circle after:shadow-soft-2xl after:duration-250 checked:after:translate-x-5.25 h-5 relative float-left mt-1 ml-auto w-10 cursor-pointer appearance-none border border-solid border-gray-200 bg-slate-800/10 bg-none bg-contain bg-left bg-no-repeat align-top transition-all after:absolute after:top-px after:h-4 after:w-4 after:translate-x-px after:bg-white after:content-[''] checked:border-slate-800/95 checked:bg-slate-800/95 checked:bg-none checked:bg-right" type="checkbox" />
            </div>
        </>
    )
}
