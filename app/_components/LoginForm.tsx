'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import React, { useState } from 'react'

const LoginForm =  () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    
    const handlesubmit =  (event : any) => {
        event.preventDefault();
        
    }   


  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-10 w-full mx-10">
        <form
          onSubmit={(event: any) => handlesubmit(event)}
          className="flex flex-col gap-6 my-4 mx-10"
        >
          <Label htmlFor="login" className="">
            Login
          </Label>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            type="email"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            type="password"
          />
          <Button>Login</Button>
          <Link className="text-sm mt-3 text-right" href={"/signup"}>
            Don't have an account? <span className="underline">Register</span>
          </Link>
        </form>
      </div>
    </div>
  )
}

export default LoginForm