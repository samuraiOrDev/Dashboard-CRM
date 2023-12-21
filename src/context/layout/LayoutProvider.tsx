import React, { useState } from 'react'
import { LayoutContext } from './LayoutContext'



export const LayoutProvider = ({ children }: { children: React.ReactNode }) => {
    const [changeThemeSidebar, setChangeThemeSidebar] = useState<string>("theme-purple")
    const [activeSettings, setActiveSetiings] = useState<boolean>(false)
    const [sideNavType, setSideNavType] = useState<boolean>(false)

    const handleThemeSidebar = (theme: string) => setChangeThemeSidebar(theme)
    const handleActiveSettings = () => setActiveSetiings(prevState => !prevState)
    const handleSideNavType = (value: boolean) => setSideNavType(value)
    return (
        <LayoutContext.Provider value={{ changeThemeSidebar, handleThemeSidebar, activeSettings, handleActiveSettings, sideNavType, handleSideNavType }}>
            {children}
        </LayoutContext.Provider>
    )
}
