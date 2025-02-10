import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='h-[30vh] bg-[#1f1f1f] flex justify-center items-center '>
        <div className='flex flex-wrap-reverse w-screen justify-around'>
          <a href="https://instagram.com/_cosmic_attire"><Image
          src="/insta.svg"
          width={200}
          height={200}
          alt="Instagram"
          className='md:h-[7vh] h-[7vh]'
           /></a>
          <a href="mailto:attirecosmic@gmail.com"><Image
          src="/mail.svg"
          width={200}
          height={200}
          alt="Instagram"
          className='md:h-[7vh] h-[7vh]'
           /></a>
          <a className='mt-[1%]' href="/terms_condition">Terms and Conditions</a>
          <a className='mt-[1%]' href="/contact">Contact Us</a>
        </div>
    </div>
  )
}

export default Footer