// import { div } from 'framer-motion/client'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-screen bg-black z-50 fixed flex justify-end h-[10vh] items-center'>
      
  <h2 className='absolute text-center  text-red-600 animate-pulse w-screen duration-75 font-[k2d] text-[2vw]'>
      PRE-SALES ARE NOW LIVE
    </h2>
    {/* <Image src="/pre.gif" width={3800} height={94} alt="presales live" /> */}
  <a href='https://rzp.io/rzp/H5JYxZr' className='z-50'><button  className='z-50 mx-6 text-black text-[1.1vw] font-[balle] bg-red-600 rounded-xl' > <span className='text-transparent'>&gt;</span> BOOK NOW <span className='text-transparent'>&gt;</span> </button></a>
    </div>
  )
}

export default Header
