'use client';
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import Layouts from './Layout'
import data from "/public/data.json"
const inter = Inter({ subsets: ['latin'] })




export default function Faq() {
  const [active, setActive] = useState([false, false, false, false, false]);
  const isSomeActive = active.some((element) => element);
  const handleClick = () => {
    isSomeActive
      ? setActive([false, false, false, false,false])
      : setActive([true, true, true, true, true, true]);
  };

  return (
    <>

      <div className='grid place-items-center w-full'>
      <Layouts
        handleClick={handleClick}
        isSomeActive={isSomeActive}
        data={data}
        turn={active}
        setTurn={setActive}
      />
    </div>

    </>
  )
}