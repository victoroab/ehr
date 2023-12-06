import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const req = await request.json()
  try {
    await prisma.consultation_history.create({
      data: {
        patient_no: req.patientNo,
        staff_no: req.staffNo,
      },
    })

    return NextResponse.json('booked')
  } catch (e) {
    console.log(e)
  }
}
