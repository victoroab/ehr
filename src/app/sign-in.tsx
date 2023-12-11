'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ArrowRightIcon } from '@radix-ui/react-icons'

import { useRouter } from 'next/navigation'

import { useRef } from 'react'
import { supabase } from '@/lib/auth'

export function SignIn() {
  const router = useRouter()

  const emailRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    })

    router.replace('/dashboard')
  }

  return (
    <section className="w-auto h-auto p-10 border rounded-md gap-4 flex flex-col items-center justify-center">
      <Label className="text-xl font-bold mb-7">Welcome</Label>
      <span className="flex flex-col gap-4">
        <Input placeholder="Email" ref={emailRef}></Input>
        <Input
          placeholder="Password"
          type={'password'}
          ref={passwordRef}
        ></Input>
        <Button onClick={() => signInWithEmail()}>
          <span className="flex items-center gap-3 justify-center">
            <span>Sign In</span>
            <ArrowRightIcon />
          </span>
        </Button>
      </span>
    </section>
  )
}
