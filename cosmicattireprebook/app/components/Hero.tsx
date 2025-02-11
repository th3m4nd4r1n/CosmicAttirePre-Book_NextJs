import React from 'react'
import Image
 from 'next/image'
const Hero = () => {
  return (
    <>
    <div className='w-screen h-screen josefin-sans-custom flex justify-center items-center text-center font-[balle] font-bold -z-10'>
      <Image
      src="/image.png"
      width={1000}
      height={900}
      alt="balle"
      quality={100}
      className='w-screen h-screen -z-20 md:visible invisible' />
      <Image src="/mobilebg.svg" 
      width={440}
      height={956}
      alt="Alpha 1"
      className='absolute h-screen w-screen md:invisible visible -z-20'
      />

        <div className='h-[270vh] w-[3.2vw] absolute right-[46.9vw] top-[100vh] bg-red-600 -z-10'> </div>
        <div className='h-[270vh] w-[3.2vw] absolute right-[46.9vw] top-[100vh] bg-red-600 blur-2xl -z-10'> </div>
    </div>
    
    </>
    
  )
}

export default Hero