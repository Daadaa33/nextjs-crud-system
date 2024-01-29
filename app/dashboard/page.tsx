import Image from 'next/image'
import React from 'react'
import banner from "../../public/school2.png"
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Dashboard", 
    description: "welcome to the dashboard",
  };

const page = () => {
  return (
    <div className='flex justify-center items-center'>
        <Image alt='dashboard' width={999} height={999} src={banner} className='cursor-default object-contain'/>
    </div>
  )
}

export default page