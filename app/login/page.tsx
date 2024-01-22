import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'

const Login = () => {
  return (
    <div className='flex flex-col gap-10'>
    <Label htmlFor="login" className='text-center'>Login </Label>
    <form className='flex flex-col gap-6 my-4'>
        <Input placeholder='Enter your name'/>
        <Input placeholder='Enter your password'/>
        <Button>Login</Button>
    </form>
    </div>
  )
}

export default Login