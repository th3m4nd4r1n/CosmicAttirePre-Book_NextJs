import React from 'react'
import Image from 'next/image'
import { console } from 'node:inspector'
const Description = () => {
  
    return (
        <>
            <div className='w-screen h-[85vh] bg-black z-10 flex justify-center items-center'>
                <div className='flex justify-center items-center w-[80vw] h-[80vh] border-y-[1px] border-[#D9D9D9] z-50'>
                    <div className='flex items-center'>

                    <div className='w-[70vw] h-[79vh] flex flex-col justify-start'>
                        <h2 className='h-fit font-semibold md:text-[3vw] text-[7vw] font-[balle] uppercase'>Cosmic Attire <br /> <span className='md:text-[1.5vw] text-[5vw]'> presents:</span>
                        </h2>
                        <h1 className='h-fit text-red-600 md:text-[5vw] text-[10vw]  font-[k2d] md:mb-0 mb-5'>
                            ALPHA 1
                        </h1>
                        <h3 className='md:text-[1.5vw] text-[4vw] uppercase font-[k2d]'>
                            sometimes, <span className='text-red-600 font-[k2d] hover:text-white'>3 seconds</span> is all it takes 
                        </h3>
                        <br /><br />
                        <h4 className='md:text-[1.2vw] text-[3vw] w-[40vw]'>
                        "The next generation of wearable technology enables instant, effortless communication, seamlessly integrating into daily life. With intuitive controls and advanced features, it allows for real-time connectivity, making interactions more convenient and efficient."
                        </h4>
                        <br /><br /><br />
<a href="https://payments-test.cashfree.com/forms/alpha-1"><button className='md:text-[1.5vw] text-[5vw] rounded-full md:w-1/3 w-full bg-red-600 hover:bg-black hover:text-red-600 text-black duration-150 ease-linear '>BOOK NOW</button></a>
                    </div>
                    <Image
                    src="/tap.svg"
                    width={900}
                    height={600}
                    alt="Balle balle"	
                    className='w-[30vw] h-[60vh]'
                    />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Description