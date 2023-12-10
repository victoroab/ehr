import { Adamina } from 'next/font/google'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'

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
        <section className="w-auto h-auto p-10 border rounded-md gap-4 flex flex-col items-center justify-center">
          <Label className="text-xl font-bold mb-7">Welcome</Label>
          <span className="flex flex-col gap-4">
            <Input placeholder="Staff No"></Input>
            <Input placeholder="Password" type={'password'}></Input>
            <Button>
              <span className="flex items-center gap-3 justify-center">
                <span>Sign In</span>
                <ArrowRightIcon />
              </span>
            </Button>
          </span>
        </section>
      </div>
    </main>
  )
}
