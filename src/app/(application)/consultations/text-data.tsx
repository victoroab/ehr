'use client'

import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import { useParams } from 'next/navigation'
import React, { useState, useRef } from 'react'
import { Axios } from '@/lib/axios'
import { useMutation } from '@tanstack/react-query'

export function TextData() {
  const params = useParams()

  const reportRef = useRef<any>(null)
  const prescriptionsRef = useRef<any>(null)

  const [success, setSuccess] = useState()

  const createReport = async () => {
    try {
      return await (
        await Axios.put(
          `/consultation/create-report/${params.id}`,
          {
            report: reportRef.current.value,
            prescriptions: prescriptionsRef.current.value,
          },
          { withCredentials: true }
        )
      ).data
    } catch (e) {
      console.error(e)
    }
  }

  const reportMutation = useMutation({
    mutationFn: createReport,
    onSuccess: (data) => {
      setSuccess(data)
      reportRef.current.value = ''
      prescriptionsRef.current.value = ''
      console.log(data)
    },
  })

  return (
    <>
      <section className="w-full flex gap-3 pb-3">
        <Card className="w-1/2">
          <CardHeader>
            <CardDescription>Enter patient&apos;s complaint</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Textarea
              className="h-56 max-h-56"
              placeholder="max: 400 characters"
              ref={reportRef}
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card className="w-1/2">
          <CardHeader>
            <CardDescription>
              Enter patient&apos;s prescriptions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Textarea
              className="max-h-56"
              placeholder="max: 200 characters"
              ref={prescriptionsRef}
            />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
      <Button className="w-1/2" onClick={() => reportMutation.mutate()}>
        Send
      </Button>
    </>
  )
}
