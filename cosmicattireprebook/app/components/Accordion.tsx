'use client';
import Image from 'next/image'
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'


type Props = {
    question: string,
    answer: string,
    turn: boolean[],
    setTurn: Dispatch<SetStateAction<boolean[]>>,
    idx: number
}

const Accordion = ({question, answer, turn, setTurn, idx}: Props) => {

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(contentRef.current){
            contentRef.current.style.maxHeight = turn![idx] ? `${contentRef.current.scrollHeight}px`:"0px"
        }

    },[contentRef, turn, idx])

    const toggleAccordion = () => {
        let newTurn = [...turn!]
        newTurn[idx] = !newTurn[idx]
        setTurn!(newTurn)
    }
  return (
    <div className='flex flex-col items-center justify-center w-full px-2 text-lg pt-4 lg:text-base'>
      <button onClick={toggleAccordion}
       className={`bg-[rgba(84,84,84,0.16)] rounded-full px-5 shadow cursor-pointer w-full h-full ${turn![idx]}`}>
        <div className='py-3'>
           <div className='flex items-center justify-between h-14 text-left'>
              <span className=' ml-2 font-medium lg:font-semibold lg:text-xl text-sm text-white font-[balle]font-semibold'>{question}</span>
              <div>
               { turn![idx] ? <Image src="/minus.svg" alt="" width={40} height={40}/> :
                <Image src="/down.svg" alt="" width={40} height={40} />}

              </div>
           </div>
           <div ref={contentRef} className='mx-4 overflow-hidden text-left transition-all duration-500 h-full'>
              <p className='py-1 font-normal leading-normal text-justify whitespace-pre-line text-xs lg:text-lg'>
                {answer}
              </p>
           </div>
        </div>
      </button>
    </div>
  )
}

export default Accordion