'use client'
import { Logo } from "./Logo"
import { Bar } from "./Bar"
import { Menu } from "./Menu"

const SideNav = () => {
  return (
    <aside className="max-w-62.5 ease-nav-brand z-990 fixed inset-y-0 my-4 ml-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
      <Logo />
      <Bar />
      <Menu />
    </aside>
  )
}

export { SideNav }