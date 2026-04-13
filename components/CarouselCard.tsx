import React from 'react'
import { CarouselCardProps } from '@/lib/types'
const CarouselCard = ({ imageSrc, text, color }: CarouselCardProps) => {
  return (
    <div className='grid grid-cols-10 rounded-xl overflow-hidden h-full'>
      <div className={`${color} col-span-7 border poppins-bold text-2xl border-gray-300 p-4 h-full flex items-center`}>{text}</div>
      <div className='col-span-3 border border-gray-300 h-full'>
        <img src={imageSrc} alt='Carousel Image' className='w-full h-full object-cover' />
      </div>
    </div>
  )
}

export default CarouselCard