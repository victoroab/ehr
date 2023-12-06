import {
  AvatarIcon,
  DashboardIcon,
  ExitIcon,
  GearIcon,
  Component1Icon,
  Pencil2Icon,
} from '@radix-ui/react-icons'
import { Adamina } from 'next/font/google'
import Link from 'next/link'

const adamina = Adamina({ subsets: ['latin'], weight: '400' })

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="min-h-screen flex w-full text-slate-800">
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav className="min-h-screen flex flex-col items-center border-slate-400 justify-between border w-52">
        <div
          className={`${adamina.className} py-3 flex items-center justify-center border-b w-full border-slate-400`}
        >
          R&apos;Flex Hospital
        </div>
        <span className="text-xs text-gray-500 self-start pl-5 pt-4">
          Profile
        </span>
        <span className="flex items-center gap-2 py-4 font-semibold pl-5">
          <AvatarIcon className="w-4 h-4 ml-[-4.1rem]" />
          <span className="text-xs">dkt-23-lak19</span>
        </span>

        <div className="w-full h-2/4 pl-5 flex flex-col gap-3 justify-start border-y border-slate-400">
          <span className="text-xs text-gray-500 pt-4">Navigation</span>
          <Link href="/dashboard">
            <li className="flex items-center justify-center text-xs cursor-pointer font-semibold gap-2 hover:text-slate-400">
              <DashboardIcon className="w-4 h-4 ml-[-5.1rem]" />
              <span>Dashboard</span>
            </li>
          </Link>
        </div>
        <span className="w-full h-full flex flex-col justify-start pl-5 py-5">
          <span className="text-xs text-gray-500">Account</span>
          <ul className="mt-4 text-xs flex flex-col justify-between gap-3 h-full font-medium">
            <span className="flex flex-col gap-3 cursor-pointer font-semibold">
              <li className="flex items-center justify-center gap-2 hover:text-slate-400">
                <Component1Icon className="w-4 h-4 ml-[-5.1rem]" />
                <span>Overview</span>
              </li>
              <li className="flex items-center justify-center gap-2 hover:text-slate-400">
                <Pencil2Icon className="w-4 h-4 ml-[-5.1rem]" />

                <span>Privileges</span>
              </li>
            </span>

            <li className="justify-self-end font-semibold cursor-pointer flex items-center justify-center gap-2 hover:text-slate-400">
              <GearIcon className="w-4 h-4 ml-[-5.1rem]" />
              <span>Settings</span>
            </li>
          </ul>
        </span>
        <div className="flex w-full items-center font-semibold gap-2 py-4 border-t cursor-pointer justify-center border-slate-400 hover:text-slate-400">
          <ExitIcon className="w-4 h-4 ml-[-4.5rem]" />
          <span className="text-xs">Log Out</span>
        </div>
      </nav>

      {children}
    </section>
  )
}
