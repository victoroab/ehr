import { prisma } from '@/lib/db'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query')!

  const prescription = await prisma.consultation_history.findFirst({
    where: {
      patient_no: query,
    },
    select: {
      prescriptions: true,
      createdAt: true,
    },
    take: 1,
    orderBy: {
      createdAt: 'desc',
    },
  })

  return Response.json(prescription)
}
