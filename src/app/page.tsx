import { Adamina } from 'next/font/google'
import { SignIn } from './sign-in'

const adamina = Adamina({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className="min-h-screen flex">
      <div className="w-1/2 flex items-center justify-center min-h-screen border-r">
        <span
          className={`${adamina.className} "font-semibold flex flex-col flex-wrap gap-6"`}
        >
          <span className="font-bold text-4xl">R&apos;Flex Hospital</span>
          <span className="mt-6">
            <i>EHR</i>
          </span>
        </span>
      </div>
      <div
        className={`${adamina.className} w-1/2 flex items-center justify-center min-h-screen`}
      >
        <SignIn />
      </div>
    </main>
  )
}
