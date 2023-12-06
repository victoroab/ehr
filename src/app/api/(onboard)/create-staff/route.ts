import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { CreateStaff, createStaffNo } from '../shared'

export async function POST(request: NextRequest) {
  const res: CreateStaff = await request.json()
  try {
    const newStaff = await prisma.staff.create({
      data: {
        firstname: res.firstname,
        lastname: res.lastname,
        gender: res.gender,
        phone_no: res.phoneNo,
        email: res.email,
        staff_no: createStaffNo(res.role),
        role: res.role,
      },
    })
    return NextResponse.json(newStaff)
  } catch (e) {
    console.log(e)
  }
}
