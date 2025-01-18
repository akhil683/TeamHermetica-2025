"use client"

import { addReview } from '@/actions/addReview'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/input'
import React, { FormEvent, useState } from 'react'
import { useToast } from '@/hooks/use-toast'

const Review = ({ projectId }: { projectId: string | null }) => {


  const [review, setReview] = useState("")
  const { toast } = useToast()

  const onSubmitHandler = async (e: FormEvent) => {
    e.preventDefault()

    const result = await addReview(review, projectId as string)
    // if (result.success) {
    //   setReview("")
    //   toast({
    //     title: "Success !",
    //     description: "Review is submitted Successfully"
    //   })
    // } else {
    //   toast({
    //     title: "Success !",
    //     description: "Review is submitted Successfully"
    //   })
    // }
  }


  return (
    <form onSubmit={onSubmitHandler} className='space-y-6 my-12'>
      <Input
        className='bg-gray-500/20 py-6 text-xl placeholder:text-gray-400 border-2 border-gray-700 focus:border-gray-400 text-white'
        placeholder='Give a Review'
        type='text'
        onChange={(e) => setReview(e.target.value)}
        required
      />
      <Button type='submit' className='w-full bg-gradient-to-tr from-indigo-500 via-indigo-800 to-indigo-500 text-xl py-6'>
        SUBMIT
      </Button>
    </form>
  )
}

export default Review
