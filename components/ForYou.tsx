import React from 'react'
import { ServiceCard } from '@/components/ServiceCard'

const ForYou = () => {
  const services = [
    { imageSrc: '/car_side_view.png', title: 'Trip' },
    { imageSrc: '/bike_side_view.png', title: 'Bike' },
    { imageSrc: '/auto_rickshaw_side_view.png', title: 'Auto' },
    { imageSrc: '/reserve.png', title: 'Reserve' },
    { imageSrc: '/bus_side_view.png', title: 'Bus Ticket' },
    { imageSrc: '/intercity_side_view.png', title: 'Intercity' },
    { imageSrc: '/rentals.png', title: 'Rentals' },
    { imageSrc: '/teens_2.png', title: 'Teens' },
  ];

  return (
    <div>
      <div className='px-4 font-semibold text-lg'>
        For You
      </div>
      <div className='grid p-4 grid-cols-4 gap-3'>
        {services.map((service, index) => (
          <ServiceCard key={index} imageSrc={service.imageSrc} title={service.title} />
        ))}
      </div>
    </div>
  )
}

export default ForYou