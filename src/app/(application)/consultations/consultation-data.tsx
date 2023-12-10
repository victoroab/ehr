'use client'

import { TableCell, TableRow } from '@/components/ui/table'
import { Axios } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'
import { ButtonLink } from './button-link'
import { useRef } from 'react'

export function ConsultationData() {
  const getConsultations = async () => {
    try {
      const consultations = await Axios.get('/consultation/get-history', {
        withCredentials: true,
        headers: { 'x-staff-no': 'dts-23-0cae3' },
      })
      return consultations.data
    } catch (e) {
      console.error(e)
    }
  }

  const consultationsQuery = useQuery({
    queryKey: ['consultations'],
    queryFn: getConsultations,
  })

  return (
    <>
      {consultationsQuery?.data?.map((consultation: any, idx: any) => {
        return (
          <TableRow key={idx}>
            <TableCell className="font-medium">{idx + 1}</TableCell>
            <TableCell className="cursor-pointer">{consultation.id}</TableCell>
            <TableCell className="cursor-pointer">
              {consultation.patient_no}
            </TableCell>
            <TableCell>{consultation.patient.firstname}</TableCell>
            <TableCell>{consultation.patient.lastname}</TableCell>
            <TableCell className="text-right">
              {consultation.createdAt.slice(11, 19)}
            </TableCell>
            <TableCell className="text-right">
              <ButtonLink consultationId={consultation.id}>View</ButtonLink>
            </TableCell>
          </TableRow>
        )
      })}
    </>
  )
}
