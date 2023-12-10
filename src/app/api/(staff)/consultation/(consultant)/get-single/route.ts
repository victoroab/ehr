import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const consultationId = request.headers.get('x-consultation-id')!
  try {
    const history = await prisma.consultation_history.findFirst(
      {
        where: {id: consultationId},
        select: {
          patient: {
            select: {firstname: true, lastname: true, patient_no: true}
          }
        }
      }
    )

    return NextResponse.json(history)
  } catch (e) {
    console.log(e)
  }
}
