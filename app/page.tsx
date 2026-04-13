"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import InitialLoadingScreen from '@/components/InitialLoading'

const page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      router.push('/home');
    }
  }, [isLoading, router]);

  return (
    <div>
      {isLoading ? <InitialLoadingScreen /> : null}
    </div>
  )
}

export default page