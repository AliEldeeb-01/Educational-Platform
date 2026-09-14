import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link, useNavigate } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './styles.css';

// import required modules
import { EffectCards } from 'swiper/modules';
import course1 from '../../../../assets/HiStudy/course-01.jpg'
import course2 from '../../../../assets/HiStudy/course-02.jpg'
import course3 from '../../../../assets/HiStudy/course-03.jpg'
import { DisplayContext } from '../../../../context/DisplayContext';
import LottieLoading from '../../../../components/LottieLoading/LottieLoading';
import CartLottie from '../../../../components/LottieLoading/CartLottie';

export default function Swiiper() {
  const Navigate = useNavigate()
  const { courseData, booksLoader, booksError, dark } = useContext(DisplayContext)
  return (
    <>
      {
        booksLoader ?
          <div className=' col-span-full flex justify-center items-center h-[90vh]' >
            <CartLottie />
          </div>

          :
          booksError ?
            <div className=' col-span-full flex justify-center w-full mt-9 items-center h-[90vh]' >
              <LottieLoading />
            </div>
            :

            <Swiper
              effect="cards"
              grabCursor={true}
              modules={[EffectCards]}
              className="w-[80%] rounded bg-transparent"
            >
              {courseData.map((course) => (
                <SwiperSlide key={course?.id} className='bg-transparent'>
                  <div

                    className={`
                       ${dark == true ?
                        `bg-[#192335] text-white `
                        : `bg-white text-black`} rounded-xl shadow-xl p-4 border border-amber-500`}>

                    <div className="relative rounded-lg overflow-hidden">
                      <img

                        src={course?.image}
                        alt={course?.title}
                        loading="lazy"
                        className="w-full h-auto object-cover"
                      />

                      <div className="absolute bottom-3 right-3 bg-blue-600 text-white text-xs font-bold px-2.5 py-1 rounded-md shadow-md">
                        {course?.discount}%  Off
                      </div>
                    </div>

                    <div className={`mt-4 flex items-center justify-between text-xs text-gray-400 font-medium  `}>
                      <span>{course?.lessons} Lessons</span>
                      <span>{50 - course?.lessons} Students</span>
                    </div>

                    <h3 className={`mt-3 text-lg font-bold  `}>
                      {course?.title}
                    </h3>

                    <p className="mt-1 text-xs line-clamp-2">
                      {course?.description}
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-amber-400 text-xs">
                      <span>⭐⭐⭐⭐⭐</span>
                      <span className="text-[10px] text-gray-400 font-medium ml-1">
                        (15 Reviews)
                      </span>
                    </div>

                    <hr className="my-3 border-gray-100" />

                    <div className="flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-lg font-extrabold ">
                          ${(course?.price - (course?.price * course?.discount / 100)).toFixed(2)}
                        </span>

                        <span className="text-xs text-gray-400 line-through">
                          ${(course?.price).toFixed(2)}
                        </span>
                      </div>

                      <Link
                        to={`/Details/${course.id}`}
                        className="text-xs font-bold  hover:text-amber-200 transition-all duration-300 rounded-xl border border-transparent hover:bg-amber-600 hover:border-amber-400 flex items-center gap-0.5 px-3 py-2"
                      >
                        Learn More
                        <span className="text-[10px]">➔</span>
                      </Link>
                    </div>

                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
      }

    </>


  );
}
