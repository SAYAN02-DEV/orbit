'use client'
import React, { useEffect, useRef } from 'react'
import CarouselCard from './CarouselCard'

const HomeCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  const carouselItems = [
    { imageSrc: '/carousel_cards/intercity.jpg', text: 'Explore the world with us', color: 'bg-blue-500' },
    { imageSrc: '/carousel_cards/uber_auto.jpg', text: 'Discover new destinations', color: 'bg-green-500' },
    { imageSrc: '/carousel_cards/uber_bike.jpg', text: 'Book your next adventure', color: 'bg-yellow-400' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          const gap = 16;
          scrollRef.current.scrollBy({ left: clientWidth + gap, behavior: 'smooth' });
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={scrollRef}
      className='mx-4 my-8 flex overflow-x-auto gap-4 snap-x snap-mandatory hide-scrollbar'
      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
    >
      {carouselItems.map((item, index) => (
        <div key={index} className='w-full min-w-[100%] h-48 sm:h-56 md:h-64 flex-shrink-0 snap-center'>
          <CarouselCard imageSrc={item.imageSrc} text={item.text} color={item.color} />
        </div>
      ))}
    </div>
  )
}

export default HomeCarousel