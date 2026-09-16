import React, { useContext } from 'react';
import bg1 from '../../../assets/HiStudy/bg-g1.webp';
import banner from '../../../assets/HiStudy/banner-01.png';
import Swiiper from './Swiper/Swiper';
import { Link } from 'react-router-dom';
import { DisplayContext } from '../../../context/DisplayContext';
import bgDark from '../../../assets/HiStudy/Bg-darkMode.jpg'
import blackTshert from '../../../assets/HiStudy/Darkbg-girl.png'

export default function Header() {
  const { dark } = useContext(DisplayContext)
  
  return (
    // سكشن الهيرو الأساسي
    <section
      className="relative min-h-[90vh] bg-cover bg-center flex items-center pb-16 overflow-hidden mt-8 "
      style={{ backgroundImage: `url(${dark ? bgDark : bg1})`, backgroundColor: '#f5f0fa' }}
    >
      {/* حاوية صورة البنت (مطلقة لتستقر في الأسفل وتأخذ أبعاد التصميم) */}

      {/* الحاوية الرئيسية للمحتوى */}
      <div className="container mx-auto px-4 md:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 pt-15 items-center relative sm:grid-cols-2 z-20 md:grid-cols-4">

        {/* الجزء الأيسر: النصوص والزر */}
        <div className="lg:col-span-3 lg:h-auto sm:col-span-2 flex md:col-span-4 flex-col items-start space-y-6 text-start">
          <div className={`flex items-center gap-2 
           ${dark == true ?
              `bg-[#192335] text-white `
              : `bg-white text-black`} shadow-[0_0_5px_4px_#FFD43B] px-4 py-2 rounded-md border border-purple-50`}>
            <span className="text-sm font-semibold flex items-center gap-1">
              🏆 The Leader in Online Learning
            </span>
          </div>

          <h1 className={`text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold leading-[1.15]  
          ${dark == true ?
              ` text-white `
              : ` text-black`} `}>
            Build The Skills <br />
            <span className={` 
            ${dark == true ?
                ` text-white `
                : ` text-black`}`}>To Drive Your Career.</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat.
          </p>

          <Link
            to={'/shopcourses'}
            className={` cursor-pointer scale-95 hover:scale-100 active:scale-100 
            ${dark ?
                `hover:bg-amber-600 active:bg-amber-600 bg-amber-700 `
                : `bg-indigo-400 hover:bg-blue-500 active:bg-blue-500 `} group text-white font-medium px-8 py-3.5 rounded-md flex items-center gap-2 shadow-lg shadow-purple-200 duration-300 transition-all`}>
            View Courses
            <span className="text-xl rotate-0 group-hover:rotate-180 group-active:rotate-180 transition-all duration-300 group-hover:translate-y-1.5 group-active:translate-y-1.5 group-hover:scale-110 group-active:scale-110 ">→</span>
          </Link>
        </div>

        <div className=" lg:col-span-5 h-[100%] md:block sm:block sm:col-span-1 md:col-span-2 hidden lg:block z-10">
          {/* التوهج الوردي خلف البنت */}
          <div className="flex w-full bg-pink-200/30 rounded-full filter blur-3xl -z-10"></div>

          <img
            src={dark ? blackTshert : banner}
            alt="Student Banner"
            className=" lg:w-full md:w-full sm:h-[100%] sm:w-full md:h-[100%] translate-y-9 lg:h-[100%] object-contain "
          />
        </div>

        {/* الجزء الأيمن: السلايدر */}
        <div className=" md:col-span-2 sm:col-span-1 sm:items-end sm:justify-end lg:col-span-4 flex justify-center lg:items-end lg:justify-end w-full relative md:items-end md:justify-end lg:h-auto ">
          <div className="swiper myHeroSwiper w-full relative">
            {/* بطاقات وهمية خلف السلايدر لتعطي تأثير 3D المزدوج */}
            <div className=" w-full h-full bg-transparent rounded-xl -z-20 transform rotate-2 hidden sm:block"></div>
            <div className=" w-full h-full bg-transparent rounded-xl -z-10 transform rotate-1 hidden sm:block"></div>

            <Swiiper />
            <div className="swiper-pagination !bottom-[-35px]"></div>
          </div>
        </div>
      </div>

    </section>
  );
}