import Link from 'next/link'
import { usePathname } from 'next/navigation'



interface Props {
  href: string
  children: React.ReactNode
  text: string
}
export const LinkMenu = ({ href, children, text }: Props) => {
  const pathname = usePathname()

  return (
    <li className="mt-0.5 w-full">
      <Link
        className={`py-2.7 text-sm ease-nav-brand my-0 mx-4 flex items-center whitespace-nowrap px-4 transition-colors ${pathname === href ? 'shadow-soft-xl rounded-lg bg-white px-4 font-semibold text-slate-700' : ''}`}
        href={href}
      >
        <div className={`${pathname === href ? 'bg-gradient-to-tl from-purple-700 to-pink-500' : ''}  shadow-soft-2xl mr-2 flex h-10 w-10 items-center justify-center rounded-lg bg-white bg-center stroke-0 text-center xl:p-2.5`}>
          <div className={`${pathname === href ? 'text-white' : 'text-slate-800 opacity-60'}`}>
            {children}
          </div>
        </div>
        <span className="ml-1 duration-300 opacity-100 pointer-events-none ease-soft">{text}</span>
      </Link>
    </li>
  )
}
