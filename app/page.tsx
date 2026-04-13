"use client"
import React, { useState } from 'react'
import InitialLoadingScreen from '@/components/InitialLoading'
const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      {isLoading &&
        <InitialLoadingScreen/>
      }
    </div>
  )
}

export default page