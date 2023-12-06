'use client'
import { useParams } from 'next/navigation'

export default function Page() {
  const params = useParams()
  return <h1 className="text-black">{params.id}</h1>
}
