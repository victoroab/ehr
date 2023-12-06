import { prisma } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import { createPatientNo } from '../shared'

export async function POST(request: NextRequest) {
  const req = await request.json()

  try {
    const newPatient = await prisma.patient.create({
      data: {
        address: req.address,
        age: req.age,
        firstname: req.firstname,
        gender: req.gender,
        lastname: req.lastname,
        marital_status: req.maritalStatus,
        next_of_kin: req.nextOfKin,
        occupation: req.occupation,
        phone_no: req.phoneNo,
        email: req.email,
        patient_no: createPatientNo(),
      },
      select: {
        patient_no: true,
      },
    })

    return NextResponse.json(newPatient)
  } catch (e) {
    console.log(e)
  }
}
