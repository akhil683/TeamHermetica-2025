"use client"

import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Star } from 'lucide-react'
import React, { useState } from 'react'

const Review = () => {

  const [review, setReview] = useState("")

  const reviews = [
    {
      id: 1,
      author: "Rahul Kumar",
      rating: 5,
      comment: "Excellent research on sustainable construction materials. The combination of agro-waste and fly ash shows promising results.",
      date: "2024-01-15"
    },
    {
      id: 2,
      author: "Priya Singh",
      rating: 4,
      comment: "Very innovative approach to eco-friendly construction materials. Would love to see more detailed results.",
      date: "2024-01-14"
    }
  ]


  return (
    < div className="max-w-4xl mx-auto" >
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-indigo-200 to-indigo-500 bg-clip-text text-transparent">
        Project Reviews
      </h2>

      {/* Review Form */}
      <form className='space-y-6 my-12'>
        <Input
          className='bg-gray-500/20 py-6 text-xl placeholder:text-gray-400 border-2 border-gray-700 focus:border-gray-400 text-white'
          placeholder='Give a Review'
          onChange={(e) => setReview(e.target.value)}
        />
        <Button type='submit' className='w-full bg-gradient-to-tr from-indigo-500 via-indigo-800 to-indigo-500 text-xl py-6'>
          SUBMIT
        </Button>
      </form>

      {/* Reviews List */}
      <div className="space-y-6">
        <span className='text-2xl text-white'>Reviews</span>
        {reviews.map((review) => (
          <Card key={review.id} className="bg-white/5 border-none p-6 rounded-3xl">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-white font-medium mb-1">{review.author}</h4>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${index < review.rating
                        ? 'fill-[#ffd700] text-[#ffd700]'
                        : 'fill-none text-gray-400'
                        }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-400">
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-300">{review.comment}</p>
          </Card>
        ))}
      </div>
    </div >
  )
}

export default Review
