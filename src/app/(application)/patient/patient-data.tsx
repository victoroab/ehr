'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Axios } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

export function HistoryTable() {
  const paramas = useParams()

  const getPatientData = async () => {
    try {
      const response = await Axios.get(
        `/consultation/view-patient/${paramas.id}`,
        {
          withCredentials: true,
        }
      )
      return response.data
    } catch (e) {
      console.error(e)
    }
  }

  const patientDataQuery = useQuery({
    queryKey: ['patientData'],
    queryFn: getPatientData,
  })

  return (
    <>
      <div className="w-full flex justify-between items-center text-sm mb-3">
        <span>
          Name: {patientDataQuery.data?.firstname}{' '}
          {patientDataQuery.data?.lastname}
        </span>
        <span>Age: {patientDataQuery.data?.age}</span>
        <span>Gender: {patientDataQuery.data?.gender}</span>
        <span>Consultation History:</span>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">SN</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Report</TableHead>
            <TableHead>Prescriptions</TableHead>
            <TableHead>Consultant</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {patientDataQuery.data?.consultation_history.map(
            (item: any, idx: any) => {
              return (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{idx + 1}</TableCell>
                  <TableCell className="cursor-pointer">
                    {item.createdAt}
                  </TableCell>
                  <TableCell className="cursor-pointer">
                    {item.report}
                  </TableCell>
                  <TableCell>{item.prescriptions}</TableCell>
                  <TableCell>{item.staff_no}</TableCell>
                </TableRow>
              )
            }
          )}
        </TableBody>
      </Table>
    </>
  )
}

export function PatientName() {
  const params = useParams()
  return <span className="">{params.id}</span>
}
