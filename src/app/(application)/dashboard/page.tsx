import {
  Card,
  CardContent,
  CardDescription,
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
        <div className="mb-5 pb-2 border-b border-slate-400 text-sm font-semibold">
          Dashboard
        </div>
        <div className="flex gap-4 items-center text-slate-800">
          <Card className="w-1/3 h-36 bg-gray-100 hover:bg-gray-200 cursor-pointer">
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

          <Card className="h-36 w-1/3 bg-gray-100 hover:bg-gray-200">
            <CardHeader>
              <CardTitle className="text-xs font-semibold w-full flex justify-between">
                Reports <ReaderIcon />
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm"></CardContent>
            <CardFooter>
              <span className="text-[0.55rem]">generate reports</span>
            </CardFooter>
          </Card>

          {/* <Card className="h-36 w-1/3 bg-gray-100 hover:bg-gray-200">
            <CardTitle className="text-xs font-semibold p-3"></CardTitle>
          </Card> */}
        </div>
      </div>
    </section>
  )
}
