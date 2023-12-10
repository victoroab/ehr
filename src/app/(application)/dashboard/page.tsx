import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ReaderIcon, Pencil1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Page() {
  return (
    <section className="w-full min-h-full p-14">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 border-b border-slate-400 text-sm font-semibold dark:border-secondary">
          Dashboard
        </div>
        <div className="flex gap-4 items-center text-slate-800 dark:text-secondary-foreground">
          <Card className="w-1/3 h-36 hover:bg-primary-foreground cursor-pointer">
            <Link href={'/consultations'} className="w-1/3" prefetch={false}>
              <CardHeader>
                <CardTitle className="text-xs font-semibold w-full flex justify-between">
                  Consultations <Pencil1Icon />
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm"></CardContent>
              <CardFooter>
                <span className="text-[0.55rem]">You have pending</span>
              </CardFooter>
            </Link>
          </Card>

          <Card className="h-36 w-1/3 hover:bg-primary-foreground">
            <CardHeader>
              <CardTitle className="text-xs font-semibold w-full flex justify-between">
                History <ReaderIcon />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm"></CardContent>
            <CardFooter>
              <span className="text-[0.55rem]">view history</span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
