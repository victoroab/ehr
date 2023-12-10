'use client'

import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'

import { Axios } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

export function TextLink() {
  const params = useParams()
  const router = useRouter()

  // fetch user info with params.id
  const getPatientInfo = async () => {
    try {
      const patientInfo = await Axios.get('/consultation/get-single', {
        withCredentials: true,
        headers: { 'x-consultation-id': params.id },
      })
      return patientInfo.data
    } catch (e) {
      console.error(e)
    }
  }

  const patientInfoQuery = useQuery({
    queryKey: ['patientInfo'],
    queryFn: getPatientInfo,
  })

  return (
    <span
      className="cursor-pointer dark:hover:text-muted-foreground"
      onClick={() =>
        router.push(`/patient/${patientInfoQuery.data?.patient.patient_no}`)
      }
    >
      {patientInfoQuery.data?.patient.firstname}{' '}
      {patientInfoQuery.data?.patient.lastname} -{' '}
      {patientInfoQuery.data?.patient.patient_no}
    </span>
  )
}
