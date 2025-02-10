import { div } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
        <div className='w-screen h-[35vh] bg-black border-y-2 border-white flex items-center justify-around'>
            <Image
            src="/Band.jpg"
            width={900}
            height={199}
            alt="band"
            className='h-[25vh] w-[25vw]'
            />
            <Image
            src="/confidence.jpg"
            width={413}
            height={199}
            alt="band"
            className='h-[25vh] w-[25vw]'
            />
            <Image
            src="/range.jpg"
            width={413}
            height={199}
            alt="band"
            className='h-[25vh] w-[25vw]'
            />   

           
        </div>
    </div>
  )
}

export default Photo