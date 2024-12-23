import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

const SignUpPage = () => {
  return (
    <div className='flex min-h-screen flex-col justify-center items-center'>
      <div className='sm:w-[350px] w-full'>
        <h2 className='text-3xl'>Create your new Account</h2>
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
          <div className='space-y-1'>
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <Input
              id='confirmPassword'
              type='password'
              required
            />
          </div>
          <Button className='mt-2'>Sign Up</Button>
        </form>
        <div className='flex justify-between'>
          <p>Already have an account?</p>
          <Link href={"/sign-in"} className='text-green-600'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
