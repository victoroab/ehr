import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id

  const patient = await prisma.patient.findFirst({
    where: {
      patient_no: id,
    },
    select: {
      firstname: true,
      lastname: true,
      age: true,
      gender: true,
      consultation_history: {
        select: {
          staff_no: true,
          report: true,
          prescriptions: true,
          createdAt: true,
        },
        orderBy: { createdAt: 'desc' },
        take: 5,
      },
    },
  })

  return NextResponse.json(patient)
}
