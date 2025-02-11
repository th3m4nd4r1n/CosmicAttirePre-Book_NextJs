import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='h-[40vh] bg-[#1f1f1f] flex justify-center items-center '>
        <div className='flex w-screen justify-around'>
          <div className='
          flex
          w-1/2
          flex-col
          justify-around
          h-[30vh]'>
          <a href="https://instagram.com/_cosmic_attire"> -&gt;Instagram</a>
          <a href="mailto:attirecosmic@gmail.com">-&gt;Mail Us</a>
          <a className='mt-[1%]' href="/terms_condition">-&gt;Terms and Conditions</a>
          <a className='mt-[1%]' href="/contact">-&gt;Contact Us</a>
          </div>
        </div>
    </div>
  )
}

export default Footer