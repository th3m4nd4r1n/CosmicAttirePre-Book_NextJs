// import { div } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-screen bg-black z-50 fixed flex md:justify-end justify-between h-[10vh] items-center'>

      <h2 className='md:absolute text-center  text-white animate-pulse md:w-screen w-auto duration-75 font-[k2d] md:text-[2vw]'>
        <span className='underline hover:text-red-600 md:mx-auto mx-2'>
          PRE-SALES</span> ARE NOW OPEN
      </h2>
      {/* <Image src="/pre.gif" width={3800} height={94} alt="presales live" /> */}
      <a href='https://rzp.io/rzp/H5JYxZr' className='z-50'><button className='z-50 mx-6 text-black md:text-[1.1vw] md:w-auto font-[balle] bg-red-600 rounded-xl' > <span className='text-transparent'>&gt;</span> BOOK NOW <span className='text-transparent'>&gt;</span> </button></a>
    </div>
  )
}

export default Header
