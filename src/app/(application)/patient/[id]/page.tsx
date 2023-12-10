import { HistoryTable, PatientName } from '../patient-data'

export default function Page() {
  return (
    <section className="min-h-full w-full p-14">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 border-b border-slate-400 text-sm font-semibold dark:border-secondary dark:text-secondary-foreground">
          <PatientName />
        </div>
        <HistoryTable />
      </div>
    </section>
  )
}
