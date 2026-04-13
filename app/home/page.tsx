import React from 'react'
import ForYou from '@/components/ForYou'
import HomePageSearchBox from '@/components/HomePageSearchBox'
import CarouselCard from '@/components/CarouselCard'
import HomeCarousel from '@/components/HomeCarousel'
const page = () => {
  return (
    <div className=''>
      <HomePageSearchBox/>
      <ForYou/>
      <HomeCarousel/>
    </div>
  )
}

export default page