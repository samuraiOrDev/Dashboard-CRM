import React from 'react'

import { IoClose } from "react-icons/io5";
interface Props {
    handleActive: () => void;
}
export const Title = ({ handleActive }: Props) => {
    return (
        <div className="px-6 pt-4 pb-0 mb-0 bg-white border-b-0 rounded-t-2xl flex items-center justify-between w-full">
            <div className="">
                <h5 className="mt-4 mb-0">UI Configurator</h5>
                <p>See our dashboard options.</p>
            </div>
            <div className="mt-6">
                <button className="inline-block p-0 mb-4 text-xs font-bold text-center uppercase align-middle bg-transparent border-0 rounded-lg shadow-none cursor-pointer bg-150 bg-x-25 active:opacity-85 text-slate-700" onClick={handleActive}>
                    <IoClose className="h-5 w-5" />
                </button>
            </div>
        </div>
    )
}
