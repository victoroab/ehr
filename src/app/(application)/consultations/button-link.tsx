'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export function ButtonLink({
  children,
  consultationId,
}: {
  children: React.ReactNode
  consultationId: string
}) {
  const router = useRouter()

  return (
    <>
      <Button onClick={() => router.push(`/consultations/${consultationId}`)}>
        {children}
      </Button>
    </>
  )
}
