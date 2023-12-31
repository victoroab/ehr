import {
  Table,
  TableBody,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { ConsultationData } from './consultation-data'

export default function Page() {
  return (
    <section className="min-h-full w-full p-14">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 border-b border-slate-400 text-sm font-semibold dark:border-secondary">
          Consultations
        </div>
        <Table>
          <TableCaption>Your consultations for the day.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">SN</TableHead>
              <TableHead>Consultation id</TableHead>
              <TableHead>Patient No</TableHead>
              <TableHead>First Name</TableHead>
              <TableHead>Last Name</TableHead>
              <TableHead className="text-right">Time</TableHead>
              <TableHead className="text-right"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <ConsultationData />
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
