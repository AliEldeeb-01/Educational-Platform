import React, { useContext } from 'react'
import Event from '../Event/Event'
import { DisplayContext } from '../../../context/DisplayContext'

export default function EventMain() {
  const { dark } = useContext(DisplayContext)
  return (
    <section className={` lg:h-[950px] h-[950px]  flex flex-col
      ${dark == true ?
        `bg-[#192335] text-gray-100  `
        : `bg-[#96A3F3] text-[#192335]`}`}>
      <div className=' flex flex-col gap-4 justify-center items-center mt-25 mb-10' >
        <p className=' p-3 bg-[#A9A9EE] inline-block w-fit rounded-3xl text-white'> STIMULATED TO TAKE PART IN? </p>
        <p className='text-white text-4xl lg:text-5xl font-bold '>Upcoming Events</p>
      </div>
      <div className='h-[55%]'> <Event /></div>
    </section>
  )
}
