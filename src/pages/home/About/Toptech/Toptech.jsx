import React, { useContext } from 'react'
import video from '../../../../assets/HiStudy/video-01.jpg'
import { DisplayContext } from '../../../../context/DisplayContext'

export default function Toptech() {
  const { dark } = useContext(DisplayContext)
  return (
    <section className={` py-20 px-4 md:px-12 ${dark == true ?
      `bg-[#192335] text-gray-100 `
      : `bg-white text-[#192335]`}`}>

      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>

        {/* الكرت الأيسر (Online Courses) */}
        <div className=' rounded-2xl h-full shadow-[0_0_2px_2px_#DCBF56]  p-8 md:p-12  grid grid-cols-1 md:grid-cols-2 gap-6 items-center'>
          <div className='space-y-4 w-[80%] '>
            <span className='inline-block bg-[#f0f4f9] text-[#2f57ef] font-medium text-sm px-4 py-1.5 rounded-full'>
              New Collection
            </span>
            <h2 className='text-3xl font-bold  leading-tight'>
              Online Courses from Histudy
            </h2>
            <p className=' text-sm'>
              Top instructors from around the world
            </p>
          </div>

          {/* حاوية الصورة وزر التشغيل */}
          <div className=' lg:w-[120%] lg:-translate-x-8  relative rounded-xl overflow-hidden group cursor-pointer'>
            <img
              src={video}
              className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-105'
              alt="Course Preview"
            />
            {/* زر التشغيل السحري بصيغة CSS Pure */}
            <div className='absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors'>
              <div className='relative flex items-center justify-center w-16 h-16 bg-white rounded-full text-[#2f57ef] shadow-lg'>
                {/* طبقات النبض الخلفية المحاكية للـ GIF */}
                <span className='absolute inset-0 rounded-full bg-white opacity-40 animate-ping' style={{ animationDuration: '2s' }}></span>
                <span className='absolute inset-[-10px] rounded-full border border-white/50 opacity-70 animate-pulse'></span>

                {/* أيقونة مثلث التشغيل */}
                <svg className='w-5 h-5 fill-current translate-x-0.5' viewBox='0 0 24 24'>
                  <path d='M8 5v14l11-7z' />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* الكرت الأيمن (Free Online Courses) */}
        <div className=' rounded-2xl col-span-1  p-8 md:p-12 shadow-[0_0_2px_2px_#DCBF56] space-y-6'>
          <span className='inline-block bg-[#fbf4ec] text-[#fa8425] font-medium text-sm px-4  rounded-full'>
            Top Teacher
          </span>
          <h2 className='text-3xl md:text-4xl font-bold  leading-tight max-w-md'>
            Free Online Courses from Histudy School To Education
          </h2>
          <p className='text-gray-500 text-sm'>
            Top instructors from around the world
          </p>
          <button className=' bg-[#7042f8]  hover:bg-[#943aff] duration-300 transition-all cursor-pointer scale-95 hover:scale-100 font-medium px-8 py-3.5 rounded-xl hover:opacity-90  shadow-md shadow-purple-200'>
            Join Now

          </button>

        </div>

      </div>
    </section>
  )
}