"use client"
import React from 'react'
import { MenuSettings, NavBar, SideNav } from '..'
import { LayoutProvider } from '@/context'

interface Props {
    children: React.ReactNode
}
export const Content = ({ children }: Props) => {
    return (
        <LayoutProvider>
            {/* SideNav */}
            <SideNav />
            <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl">
                <NavBar />
                {children}
            </main>
            <MenuSettings />
        </LayoutProvider>
    )
}
