import React, { useContext } from 'react'
import { FaHeartbeat } from "react-icons/fa";
import { FaBookAtlas } from "react-icons/fa6";
import { FaArrowRight } from 'react-icons/fa'
import about1 from '../../../assets/HiStudy/about-01.png'
import about2 from '../../../assets/HiStudy/about-02.png'
import about3 from '../../../assets/HiStudy/about-03.png'
import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react";
import Toptech from './Toptech/Toptech';
import Count from './Count/Count';
import Edu from './edu/Edu';
import { DisplayContext } from '../../../context/DisplayContext';

export default function About() {
  const { dark } = useContext(DisplayContext)
  const ref = useRef()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-15, 15])
  const y3 = useTransform(scrollYProgress, [0, 1], [-20, 20])

  return (
    <>
      <section>
        <div ref={ref} className={` grid lg:grid-cols-2 grid-cols-1 w-full justify-between items-center min-h-[950px] ${dark == true ?
          `bg-[#192335] text-gray-100 `
          : `bg-[#e6e6e647] text-[#192335]`}`}>
          <div className=' col-span-1 gap-5 items-start min-h-[500px] sm:min-h-[900px] relative h-full '>

            <motion.img style={{ y: y1 }} className=' rounded transition-all duration-300 absolute top-3.5 sm:-translate-x-0 sm:left-0 left-[50%] -translate-x-[50%] ' src={about1} alt="" />
            <motion.img style={{ y: y2 }} className=' rounded transition-all duration-300 lg:absolute lg:block top-2 z-10 right-0 hidden' src={about2} alt="" />
            <motion.img style={{ y: y3 }} className=' rounded transition-all duration-300 sm:absolute sm:right-5 sm:block hidden top-75 md:right-20 lg:-right-16' src={about3} alt="" />

          </div>
          <div className='col-span-1'>
            <div className=' px-10 lg:w-[90%] min-h-[800px] items-start justify-center flex flex-col pr-10 text-start'>
              <span className='p-3 block w-fit mb-1.5 rounded-3xl text-amber-500 uppercase font-semibold'>
                Know About Us
              </span>
              <span className='lg:text-4xl md:text-3xl sm:text-3xl text-2xl capitalize font-bold'>
                Know About Histudy Learning Platform
              </span>
              <span className='opacity-60 w-fit block mt-2 leading-relaxed'>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
              </span>
              
              <div className='p-5 transition duration-300 rounded-[10px] flex flex-row gap-3 hover:scale-105 hover:bg-amber-700/20 mt-4'>
                <div><FaHeartbeat className='text-5xl bg-red-100 text-red-600 rounded-full p-2.5' /></div>
                <div className='flex flex-col gap-2'>
                  <span className='text-[18px] font-bold'>Flexible Classes</span>
                  <span className='opacity-65 text-sm leading-relaxed'>It is a long established fact that a reader will be distracted by this on readable content.</span>
                </div>
              </div>

              <div className='p-5 transition duration-300 rounded-[10px] flex flex-row gap-3 hover:scale-105 hover:bg-amber-700/20'>
                <div><FaBookAtlas className=' text-shadow-black text-blue-600 rounded-2xl opacity-75 p-2.5 text-5xl' /></div>
                <div className='flex flex-col gap-2'>
                  <span className='text-[18px] font-bold'>Learn From Anywhere</span>
                  <span className='opacity-65 text-sm leading-relaxed'>Sed distinctio repudiandae eos recusandae laborum eaque non eius iure suscipit.</span>
                </div>
              </div>

              <div className='w-full flex justify-start items-center h-36'>
                <button className="bg-gradient-to-l from-blue-500 to-purple-600 hover:scale-105 cursor-pointer transition-all duration-300 text-white px-6 rounded-lg flex flex-row items-center gap-2 py-4 group font-medium" >
                  <span>More About Us</span>
                  <FaArrowRight className='group-hover:rotate-180 transition-all duration-300' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Toptech />
      <Count />
      <Edu />
    </>
  )
}