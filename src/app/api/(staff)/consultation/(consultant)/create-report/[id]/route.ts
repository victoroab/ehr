import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const req = await request.json()

  const id = params.id

  try {
    await prisma.consultation_history.update({
      where: { id },
      data: {
        report: req.report,
        prescriptions: req.prescriptions,
      },
    })

    return NextResponse.json('record created')
  } catch (e) {
    console.log(e)
  }
}
