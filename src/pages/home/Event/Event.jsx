import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdTime } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import grid1 from '../../../assets/HiStudy/grid-type-01.jpg'
import grid2 from '../../../assets/HiStudy/grid-type-02.jpg'
import grid3 from '../../../assets/HiStudy/grid-type-05.jpg'
import grid4 from '../../../assets/HiStudy/grid-type-04.jpg'
import { IoArrowRedo } from "react-icons/io5";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
//  note : if you want to add (navigation,pagination,....) you must import it`s css file too, to work right with you
import './Event.css';


// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import { DisplayContext } from '../../../context/DisplayContext';

export default function Event() {
  const { dark } = useContext(DisplayContext)
  return (
    <section className='h-full w-[80%] mx-auto transition-all duration-200  relative group ' >

      <button className='prev absolute opacity-0  group-hover:opacity-100 transition-all duration-300 left-[2%] top-[44%] -translate-y-1/2   p-5 rounded-full z-10 bg-blue-600 text-white cursor-pointer shadow'>
        <MdOutlineArrowBackIosNew />
      </button>
      <button className='next opacity-0  group-hover:opacity-100  absolute right-[2%] top-[44%] -translate-y-1/2 z-10 bg-blue-600 text-white cursor-pointer p-5 rounded-full shadow'>
        <MdOutlineArrowForwardIos />
      </button>

      <Swiper
        // slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}

        centeredSlides={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        modules={[FreeMode, Pagination, Navigation]}
        className={`w-[100%] h-full    `}
      >

        <SwiperSlide  >
          <div className={` group w-full shadow-sm scale-90 hover:scale-95 shadow-amber-200 transition-all duration-300 flex flex-col items-start  rounded-lg p-7 gap-4 ${dark ?` `:`bg-indigo-400 text-white`} `}>
            <img src={grid1} className='rounded-lg' alt="" />
            <div className='opacity-70 flex flex-row gap-2 '>
              <div className=' gap-1  flex flex-row justify-center items-center'>
                <IoLocationOutline />
                <span>IAC Building</span>
              </div>
              <div className=' gap-1 flex flex-row justify-center items-center'>
                <IoMdTime />
                <span>8:00 am - 5:00 pm</span>
              </div>
            </div>
            <p className=' font-bold text-2xl'>International Education Fair 2024</p>
            <button className='z-40 py-2 px-6 cursor-pointer hover:bg-blue-100 transition-all duration-200 hover:text-blue-600 flex flex-row items-center justify-center gap-2  border-gray-100  rounded-3xl border-2'> Get ticket <IoArrowRedo /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={` hover:scale-[0.98] shadow-sm shadow-amber-200 scale-95 transition-all duration-300 flex flex-col items-start  rounded-lg p-7 gap-4 ${dark ?` `:`bg-indigo-400 text-white`}`}>
            <img src={grid4} className='rounded-lg' alt="" />
            <div className='opacity-70 flex flex-row gap-2 '>
              <div className=' gap-1  flex flex-row justify-center items-center'>
                <IoLocationOutline />
                <span></span>
              </div>
              <div className=' gap-1 flex flex-row justify-center items-center'>
                <IoMdTime />
                <span>8:00 am - 5:00 pm</span>
              </div>
            </div>
            <p className=' font-bold text-2xl'>Elegant Light Box Paper Cut Dioramas in</p>
            <button className=' z-40 py-2 px-6 cursor-pointer hover:bg-blue-100 transition-all duration-200 hover:text-blue-600 flex flex-row items-center justify-center gap-2  border-gray-100  rounded-3xl border-2'> Get ticket <IoArrowRedo /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide >
          <div className={` hover:scale-95 scale-90 shadow-sm shadow-amber-200 transition-all duration-300 flex flex-col items-start  rounded-lg p-7 gap-4 ${dark ?` `:`bg-indigo-400 text-white`} `}>
            <img src={grid2} className='rounded-lg' alt="" />
            <div className='opacity-70 flex flex-row gap-2 '>
              <div className=' gap-1  flex flex-row justify-center items-center'>
                <IoLocationOutline />
                <span>Vancouver</span>
              </div>
              <div className=' gap-1 flex flex-row justify-center items-center'>
                <IoMdTime />
                <span>8:00 am - 5:00 pm</span>
              </div>
            </div>
            <p className=' font-bold text-2xl'>Painting Art Contest 2020</p>
            <button className=' z-40 py-2 px-6 cursor-pointer hover:bg-blue-100 transition-all duration-200 hover:text-blue-600 flex flex-row items-center justify-center gap-2  border-gray-100  rounded-3xl border-2'> Get ticket <IoArrowRedo /></button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={` hover:scale-95 scale-90 shadow-sm shadow-amber-200 transition-all duration-300 flex flex-col items-start  rounded-lg p-7 gap-4 ${dark ?` `:`bg-indigo-400 text-white`}`}>
            <img src={grid3} className='rounded-lg' alt="" />
            <div className='opacity-70 flex flex-row gap-2 '>
              <div className=' gap-1  flex flex-row justify-center items-center'>
                <IoLocationOutline />
                <span>Vancouver</span>
              </div>
              <div className=' gap-1 flex flex-row justify-center items-center'>
                <IoMdTime />
                <span>8:00 am - 5:00 pm</span>
              </div>
            </div>
            <p className=' font-bold text-2xl'>Most Effective Ways for Education's Problem</p>
            <button className='z-40 py-2 px-6 cursor-pointer hover:bg-blue-100 transition-all duration-200 hover:text-blue-600 flex flex-row items-center justify-center gap-2  border-gray-100  rounded-3xl border-2'> Get ticket <IoArrowRedo /></button>
          </div>
        </SwiperSlide>


      </Swiper>
    </section>
  );
}
