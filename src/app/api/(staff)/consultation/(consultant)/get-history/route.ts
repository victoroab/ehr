import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const staffNo = request.headers.get('x-staff-no')!
  try {
    const history = await prisma.consultation_history.findMany({
      where: {
        staff_no: staffNo,
      },
      select: {
        id: true,
        patient_no: true,
        createdAt: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json(history)
  } catch (e) {
    console.log(e)
  }
}
