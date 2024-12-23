import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const SignInPage = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
      <div className='sm:w-[350px] w-full'>
        <h2 className='text-3xl'>Sign In to your Account</h2>
        <p className='text-gray-600'>Welcome to team hermetica again !</p>
        <form className='my-4 flex flex-col gap-2'>
          <div className='space-y-1'>
            <label htmlFor='email'>Email</label>
            <Input
              id='email'
              type='email'
              placeholder='akhilpalsra@gmail.com'
              required
            />
          </div>
          <div className='space-y-1'>
            <label htmlFor='password'>Password</label>
            <Input
              id='password'
              type='password'
              required
            />
          </div>
          <Link href={"/"} className='text-green-600'>Forgot Password ?</Link>
          <Button className='mt-2'>Sign In</Button>
        </form>
        <div className='flex justify-between'>
          <p>Don't have an account?</p>
          <Link href={"/sign-up"} className='text-green-600'>Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
