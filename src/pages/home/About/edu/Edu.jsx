import React, { useContext } from 'react'

//note: if any library do not work with you import it as a module with *
import * as MarqueeModule from "react-fast-marquee";

import facebook from '../../../../assets/HiStudy/facebook.png'
import yelp from '../../../../assets/HiStudy/yelp.png'
import google from '../../../../assets/HiStudy/google.png'
import bing from '../../../../assets/HiStudy/bing.png'
import client1 from '../../../../assets/HiStudy/client-01.png'
import client2 from '../../../../assets/HiStudy/client-02.png'
import client3 from '../../../../assets/HiStudy/client-03.png'
import client4 from '../../../../assets/HiStudy/client-04.png'
import client5 from '../../../../assets/HiStudy/client-05.png'
import client6 from '../../../../assets/HiStudy/client-06.png'
import { DisplayContext } from '../../../../context/DisplayContext';

export default function Edu() {
  const Marquee = MarqueeModule.default.default
  // console.log(Marquee)
  const { dark } = useContext(DisplayContext)

  return (
    <section className={`
      ${dark == true ?
        `bg-[#192335] text-gray-100  `
        : `bg-white text-[#192335] `} py-8`}>

      <div className=' flex flex-col justify-center items-center py-6 pb-9 gap-2.5'>
        <span className=' bg-blue-100 text-blue-600 px-2.5 py-1.5 text-[13px] rounded-3xl'> EDUCATION FOR EVERYONE </span>
        <span className=' font-bold text-4xl md:w-[60%] w-[80%] lg:w-[40%] text-center'>People like histudy education.
          No joking - here’s the proof! </span>
      </div>

      <Marquee autoFill pauseOnClick speed={30}   >
        <div className=' w-[1400px] grid grid-cols-3'>

          <div className={` shrink-0 mx-5 rounded-xl col-span-1 gap-3.5 p-10  z-10 flex flex-col items-center justify-center ${dark ? `shadow-[0_0_2px_2px_#DCBF56] border border-amber-400 z-10`:'shadow'} `}>
            <img src={facebook} className='h-12 w-12' alt="" />
            <p className='text-center'>People says about, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.</p>
            <div className='flex flex-row gap-1.5 items-center'>
              <img src={client1} className=' h-8 w-8 rounded-full' alt="" />
              <span>Valerie J., CEO</span>
            </div>
          </div>
          <div className='shrink-0 mx-5 rounded-xl bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 col-span-1 gap-3.5 p-10  z-10 flex flex-col items-center justify-center'>
            <img src={yelp} className=' object-contain size-20 ' alt="" />
            <p className='text-center text-white'>Our educational, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.</p>
            <div className='flex flex-row gap-1.5 items-center'>
              <img src={client2} className=' h-8 w-8 rounded-full' alt="" />
              <span className='text-white'>Hannah R., CEO</span>
            </div>
          </div>
          <div className={` ${dark ? `shadow-[0_0_2px_2px_#DCBF56] border border-amber-400 z-10`:'shadow'}shrink-0 mx-5 rounded-xl col-span-1 gap-3.5 p-10  z-10 flex flex-col items-center justify-center`}>
            <img src={google} className=' object-contain size-25 ' alt="" />
            <p className='text-center'>Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.</p>
            <div className='flex flex-row gap-1.5 items-center'>
              <img src={client3} className=' h-8 w-8 rounded-full' alt="" />
              <span>Michael D., CEO</span>
            </div>
          </div>

        </div>
      </Marquee>
      <Marquee autoFill pauseOnClick direction='right' speed={30}  >

        <div className=' w-[1400px] my-9 grid   grid-cols-3  '>
          <div className='  from-indigo-500  text-white bg-linear-to-r via-purple-500 to-pink-500 mx-5 rounded-xl col-span-1 gap-3.5 p-10  flex flex-col items-center justify-center'>
            <img src={bing} className='h-12 w-12' alt="" />
            <p className='text-center'>People says about, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.</p>
            <div className='flex flex-row gap-1.5 items-center'>
              <img src={client4} className=' h-8 w-8 rounded-full' alt="" />
              <span>Pearl B. Hill, Marketing</span>
            </div>
          </div>
          <div className={` mx-5 rounded-xl   col-span-1 gap-3.5 p-10  flex flex-col items-center justify-center ${dark ? `shadow-[0_0_2px_2px_#DCBF56] border border-amber-400 z-10`:'shadow'} `}>
            <img src={yelp} className=' object-contain size-20 ' alt="" />
            <p className='text-center'>Our educational, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.</p>
            <div className='flex flex-row gap-1.5 items-center'>
              <img src={client5} className=' h-8 w-8 rounded-full' alt="" />
              <span className=''>Pearl B. Hill, Marketing</span>
            </div>
          </div>
          <div className=' bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white mx-5 rounded-xl col-span-1 gap-3.5 p-10  flex flex-col items-center justify-center'>
            <img src={google} className=' object-contain size-25 ' alt="" />
            <p className='text-center'>Histudy education, vulputate at sapien sit amet, auctor iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus velit.</p>
            <div className='flex flex-row gap-1.5 items-center'>
              <img src={client6} className=' h-8 w-8 rounded-full' alt="" />
              <span>Hannah R., CEO</span>
            </div>
          </div>

        </div>
      </Marquee>

    </section>
  )
}
