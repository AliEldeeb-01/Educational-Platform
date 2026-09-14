import React, { useContext } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import yelp from '../../../assets/HiStudy/yelp.png';
import smartphone from '../../../assets/HiStudy/smartphone.png';
import server from '../../../assets/HiStudy/server.png';
import personal from '../../../assets/HiStudy/personal.png';
import pantone from '../../../assets/HiStudy/pantone.png';
import designweb from '../../../assets/HiStudy/web-design.png';
import videoweb from '../../../assets/HiStudy/video-01.jpg';
import infographic from '../../../assets/HiStudy/infographic.png';
import { DisplayContext } from '../../../context/DisplayContext';
import { useNavigate } from 'react-router-dom';

export default function Categories() {
  const navigate = useNavigate();
  const { dark } = useContext(DisplayContext);

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // ينتقل للأعلى عند النقر
  };

  const categoryList = [
    { img: personal, title: 'Web Design', count: '25' },
    { img: pantone, title: 'Graphic Design', count: '30' },
    { img: videoweb, title: 'Personal Development', count: '20' },
    { img: designweb, title: 'IT and Software', count: '15' },
    { img: yelp, title: 'Sales Marketing', count: '15' },
    { img: infographic, title: 'Art & Humanities', count: '15' },
    { img: server, title: 'Mobile Application', count: '15' },
    { img: smartphone, title: 'Finance & Accounting', count: '15' },
  ];

  return (
    <section className={`relative w-full pt-24 pb-16 px-4 md:px-8 flex flex-col rounded-t-[20px] md:rounded-t-[20px] -mt-7 lg:-mt-7 md:-mt-7 sm:-mt-9 z-10 
      ${dark === true ? 'bg-[#192335] text-gray-100' : 'bg-white text-[#192335]'}`}>

      {/* الجزء الخاص بالعنوان والـ Badge */}
      <div className='w-full flex flex-col justify-center items-center gap-3 mb-12'>
        <span className='text-blue-600 bg-blue-100/60 px-4 py-1.5 text-xs font-bold tracking-wide rounded-full cursor-pointer uppercase'>
          CATEGORIES
        </span>
        <h2 className='w-[85%] md:w-[60%] text-center text-2xl font-bold md:text-4xl lg:text-[42px] leading-tight'>
          Explore Top Courses Categories That Change Yourself
        </h2>
      </div>

      {/* الجريد الـ Responsive (4, 3, 2, 1) */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {categoryList.map((cat, idx) => (
          <div
            key={idx}
            onClick={() => handleNavigate('/shopCourses')}
            className="group flex flex-col justify-center items-center p-8 rounded-xl shadow-[0_0_2px_2px_#FDD95C] border border-gray-100/50 cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-[0_0_5px_5px_#FDD95C]">
            <div className="mb-4 p-4 rounded-lg bg-white transition-colors duration-300 group-hover:bg-blue-50/50">
              <img src={cat.img} className="w-[100px] h-[100px] object-contain" alt={cat.title} />
            </div>
            <h3 className="font-bold text-[18px] mb-3 text-center transition-colors duration-300 group-hover:text-blue-600">
              {cat.title}
            </h3>
            <span className="relative flex items-center gap-2 text-sm font-medium text-gray-500 pb-1 transition-all duration-300 group-hover:text-blue-600">
              <span>{cat.count} Courses</span>
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}