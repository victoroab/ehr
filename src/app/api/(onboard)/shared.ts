import { v4 } from 'uuid'

type Role =
  | 'DOCTOR'
  | 'SURGEON'
  | 'DENTIST'
  | 'NURSE'
  | 'RECEPTIONIST'
  | 'PAYMENT'
  | 'PHARMACY'

export type CreateStaff = {
  firstname: string
  lastname: string
  gender: string
  phoneNo: string
  email: string
  role: Role
}

const roleCodes = {
  DOCTOR: 'dct-',
  SURGEON: 'srg-',
  DENTIST: 'dts-',
  NURSE: 'nrs-',
  RECEPTIONIST: 'rcp-',
  PAYMENT: 'pmt-',
  PHARMACY: 'phr-',
}

export function createStaffNo(ROLE: Role) {
  return `${roleCodes[ROLE]}${new Date()
    .getFullYear()
    .toLocaleString()
    .slice(3)}-${v4().slice(0, 5)}`
}

export function createPatientNo() {
  return `pts-${new Date()
    .getFullYear()
    .toLocaleString()
    .slice(3)}-${v4().slice(0, 5)}`
}
