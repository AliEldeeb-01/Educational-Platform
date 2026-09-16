import React, { useContext } from 'react';
import blog1 from '../../../assets/HiStudy/blog-card-01.jpg';
import blog2 from '../../../assets/HiStudy/blog-card-02.jpg';
import blog3 from '../../../assets/HiStudy/blog-card-03.jpg';
import blog4 from '../../../assets/HiStudy/blog-card-04.jpg';
import { IoIosArrowRoundForward } from "react-icons/io";
import { useInView } from "react-intersection-observer"
import { DisplayContext } from '../../../context/DisplayContext';


export default function BlogPost() {
  const { dark } = useContext(DisplayContext)

  const { inView, ref } = useInView(
    {
      threshold: 0.1,
      triggerOnce: true,
    }

  )
  return (
    <section
      ref={ref}
      className={`
    transition-all duration-1000
    ${dark == true ?
      `bg-[#192335] text-gray-100 `
      : `bg-white text-[#192335]`}
    ${inView ? "opacity-100 translate-y-0 " : "opacity-0 -translate-y-8"}
  `}
    >
      <div className="py-16  overflow-hidden">
        <div className="container  mx-auto px-4 lg:px-8 max-w-7xl">

          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <span className="inline-block bg-pink-100 text-pink-600 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4">
                Blog Post
              </span>
              <h2 className="text-4xl md:text-5xl font-bold ">
                Post Popular Post.
              </h2>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-8 py-3.5 rounded-md font-semibold flex items-center hover:text-blue-300 active:text-blue-300 hover:opacity-90 active:opacity-90 cursor-pointer group transition-all duration-300 shadow-sm">
              See All Articles <span className="ml-2 font-bold"><IoIosArrowRoundForward className='group-hover:rotate-180 group-active:rotate-180 transition-all duration-300' /></span>
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1  lg:grid-cols-12 items-center gap-8">

            {/* Main Large Card (Left) */}
            <div className="lg:col-span-7 hover:scale-105 active:scale-105  rounded-xl  hover:shadow-md active:shadow-md transition-all duration-300 overflow-hidden flex shadow-[0_0_2px_2px_#DCBF56] flex-col group">
              <div className="overflow-hidden ">
                <img
                  src={blog1}
                  alt="React Students"
                  className="w-full h-full object-cover transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-3xl font-bold  mb-2">React</h3>
                <p className="text-gray-400 text-lg mb-3">
                  It is a long established fact that a reader.
                </p>
                <a href="#" className=" duration-300 hover:text-blue-400 active:text-blue-400 font-bold flex group/1 items-center transition-colors">
                  Learn More <span className="ml-2 transform transition-transform"><IoIosArrowRoundForward className='group-hover/1:rotate-180 group-active/1:rotate-180 transition-all duration-300' /></span>
                </a>
              </div>
            </div>

            {/* Smaller Cards List (Right) */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              {/* Small Card 1 */}
              <div className=" rounded-xl hover:scale-105 active:scale-105  hover:shadow-md active:shadow-md transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group h-full shadow-[0_0_2px_2px_#DCBF56]">
                <div className="w-full sm:w-2/5 overflow-hidden  sm:min-h-full">
                  <img src={blog2} alt="Why Is Education So Famous?" className="w-full h-full object-cover  transition-transform duration-500" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center w-full sm:w-3/5">
                  <h3 className="text-xl font-bold  mb-6 leading-tight">
                    Why Is Education So Famous?
                  </h3>
                  <a href="#" className="  duration-300 hover:text-blue-400 active:text-blue-400 font-semibold text-sm flex items-center  transition-colors">
                    Read Article <span className="ml-2 transform transition-transform"><IoIosArrowRoundForward /></span>
                  </a>
                </div>
              </div>

              {/* Small Card 2 */}
              <div className=" rounded-xl hover:scale-105 active:scale-105  hover:shadow-md active:shadow-md transition-all duration-300 overflow-hidden flex flex-col sm:flex-row group h-full  shadow-[0_0_2px_2px_#DCBF56]">
                <div className="w-full sm:w-2/5 overflow-hidden min-h-[200px] sm:min-h-full">
                  <img src={blog3} alt="Difficult Things About Education." className="w-full h-full object-cover  transition-transform duration-500" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center w-full sm:w-3/5">
                  <h3 className="text-xl font-bold  mb-6 leading-tight">
                    Difficult Things About Education.
                  </h3>
                  <a href="#" className=" font-semibold duration-300 text-sm flex items-center  transition-colors hover:text-blue-400 active:text-blue-400">
                    Read Article <span className="ml-2 transform  transition-transform"><IoIosArrowRoundForward /></span>
                  </a>
                </div>
              </div>

              {/* Small Card 3 */}
              <div className=" rounded-xl  hover:shadow-md active:shadow-md transition-all hover:scale-105 active:scale-105 duration-300 overflow-hidden flex flex-col sm:flex-row group h-full  shadow-[0_0_2px_2px_#DCBF56]">
                <div className="w-full sm:w-2/5 overflow-hidden min-h-[200px] sm:min-h-full">
                  <img src={blog4} alt="Education Is So Famous, But Why?" className="w-full h-full object-cover  transition-transform duration-500" />
                </div>
                <div className="p-6 sm:p-8 flex flex-col justify-center w-full sm:w-3/5">
                  <h3 className="text-xl font-bold  mb-6 leading-tight">
                    Education Is So Famous, But Why?
                  </h3>
                  <a href="#" className=" hover:text-blue-400 active:text-blue-400 font-semibold text-sm flex items-center duration-300 transition-colors">
                    Read Article <span className="ml-2 transform transition-transform"><IoIosArrowRoundForward /></span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}