import React, { useContext } from 'react'
import { FaStar, FaRegBookmark, FaBookOpen, FaArrowRight, FaShoppingCart } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import course1 from '../../../assets/HiStudy/course-01.jpg'
import course2 from '../../../assets/HiStudy/course-02.jpg'
import course3 from '../../../assets/HiStudy/course-03.jpg'
import client1 from '../../../assets/HiStudy/client-01.png'
import client2 from '../../../assets/HiStudy/client-02.png'
import client3 from '../../../assets/HiStudy/client-03.png'
import { DisplayContext } from '../../../context/DisplayContext'
import CartLottie from '../../../components/LottieLoading/CartLottie'
import LottieLoading from '../../../components/LottieLoading/LottieLoading'


export default function PopularC() {

  const { courseData, booksLoader, booksError, dark } = useContext(DisplayContext)

  const { id } = useParams()

  return (
    <section className={`py-12
        ${dark == true ?
        `bg-[#192335] text-gray-100 `
        : `bg-[#e6e6e647] text-[#192335]`} px-4 md:px-8 popularC   `}>
      <div className='w-full flex flex-col justify-center items-center gap-3 mb-12'>
        <span className='text-purple-600 bg-purple-100 px-4 py-1.5 text-xs font-bold tracking-wide rounded-full cursor-pointer uppercase'>
          Top Popular Course
        </span>
        <h2 className='w-[85%] md:w-[60%] text-center text-2xl font-bold md:text-4xl lg:text-[42px] leading-tight'>
          Histudy Course student can join with us.
        </h2>
      </div>


      <div className="max-w-7xl mx-auto">

        {/* شبكة الكروت المتجاوبة */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center ">

          {
            booksLoader ? (
              <CartLottie />
            ) : booksError ? (
              <LottieLoading />
            ) : (
              courseData.slice(0, 3).map((course) => (
                <div
                  key={course?.id}
                  className="hover:-translate-y-2 transition-all cursor-pointer rounded-xl overflow-hidden  hover:shadow-md duration-300 border shadow-[0_0_2px_2px_#DCBF56] flex flex-col justify-between"
                >
                  <div className="relative overflow-hidden group">
                    <img
                      src={course?.image}
                      alt={course?.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>

                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1 text-orange-400 text-sm">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />

                         
                        </div>

                        <button className=" cursor-pointer  hover:text-gray-600 transition-colors">
                          <FaRegBookmark className="w-4 h-4" />
                        </button>
                      </div>

                      <h3 className="text-xl font-bold  mb-2 hover:text-indigo-600 cursor-pointer transition-colors">
                        {course?.title}
                      </h3>

                      <div className="flex items-center gap-4 text-xs  mb-3">
                        <div className="flex items-center gap-1">
                          <FaBookOpen className="text-indigo-500" />
                          <span>{course?.lessons} Lessons</span>
                        </div>

                        <div className="flex items-center gap-1">
                          <span>{course?.students} Students</span>
                        </div>
                      </div>

                      <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                        {course?.description}
                      </p>

                    </div>

                    <div className="border-t border-gray-100 pt-4 mt-auto">

                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">

                          <img
                            src={course?.image}
                            alt={course?.instructor}
                            className="w-7 h-7 rounded-full object-cover"
                          />

                          <span className="text-xs  font-medium">
                            By {course?.author}
                          </span>

                        </div>
                      </div>

                      <div className="flex items-center justify-between">

                        <div className="flex items-baseline gap-2">

                          <span className="text-xl font-bold text-indigo-600">
                            ${(course?.price - (course?.price * course?.discount / 100)).toFixed(2)}
                          </span>

                          <span className="text-sm text-gray-400 line-through">
                            ${(course?.price).toFixed(2)}
                          </span>

                        </div>

                        <Link
                          to={`/Details/${course.id}`}
                          onClick={() => window.scrollTo(0, 0)}
                          className="flex items-center gap-1 text-xs font-semibold  hover:text-amber-600 p-2 transition-colors group cursor-pointer group">
                          Learn More
                          <FaArrowRight className="w-3 h-3 group-hover:translate-x-1  group-hover:rotate-180 group-hover:scale-110 transition-all duration-300" />
                        </Link>

                      </div>

                    </div>

                  </div>
                </div>
              ))
            )
          }

          {/* الكارت الثاني: PHP Beginner + Advanced
          <div className=" hover:-translate-y-2 transition-all cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md  duration-300 border border-gray-100 flex flex-col justify-between">
            <div className="relative overflow-hidden group">
              <img src={course2} alt="PHP Beginner + Advanced" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-orange-400 text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="text-gray-500 text-xs ml-1">(15 Reviews)</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <FaRegBookmark className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 cursor-pointer transition-colors">
                  PHP Beginner + Advanced
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1"><FaBookOpen className="text-indigo-500" /><span>12 Lessons</span></div>
                  <div className="flex items-center gap-1"><span>50 Students</span></div>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                  It is a long established fact that a reader will be distracted by the readable.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img src={client2} alt="Angela" className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-xs text-gray-600 font-medium">
                      By <span className="text-gray-800 font-semibold">Angela</span> In <span className="text-gray-500">Development</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-indigo-600">$60</span>
                    <span className="text-sm text-gray-400 line-through">$120</span>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-indigo-600 transition-colors">
                    <FaShoppingCart className="w-3 h-3" /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          <div className="bg-white hover:-translate-y-2 transition-all rounded-xl overflow-hidden shadow-sm hover:shadow-md cursor-pointer  duration-300 border border-gray-100 flex flex-col justify-between">
            <div className="relative overflow-hidden group">
              <img src={course3} alt="Angular Zero to Mastery" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5 flex-grow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-orange-400 text-sm">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="text-gray-500 text-xs ml-1">(5 Reviews)</span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 transition-colors">
                    <FaRegBookmark className="w-4 h-4" />
                  </button>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-indigo-600 cursor-pointer transition-colors">
                  Angular Zero to Mastery
                </h3>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1"><FaBookOpen className="text-indigo-500" /><span>8 Lessons</span></div>
                  <div className="flex items-center gap-1"><span>30 Students</span></div>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
                  Angular Js long fact that a reader will be distracted by the readable.
                </p>
              </div>
              <div className="border-t border-gray-100 pt-4 mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <img src={client3} alt="Slaughter" className="w-7 h-7 rounded-full object-cover" />
                    <span className="text-xs text-gray-600 font-medium">
                      By <span className="text-gray-800 font-semibold">Slaughter</span> In <span className="text-gray-500">Languages</span>
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl font-bold text-indigo-600">$80</span>
                    <span className="text-sm text-gray-400 line-through">$100</span>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-semibold text-gray-700 hover:text-indigo-600 transition-colors group">
                    Learn More <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div> */}

        </div>
      </div>

      <div className='w-full flex justify-center items-center h-36'>
        <Link
          to={'/shopcourses'}
          onClick={() => window.scrollTo(0, 0)}
          className="bg-amber-500 hover:scale-105 cursor-pointer transition-all duration-300 text-white px-6  rounded-lg flex flex-row gap-1.5 py-5 group" >
          View All Courses
          <FaArrowRight className=' group-hover:rotate-180 translate-y-1.5 duration-300 transition-all ' />
        </Link>
      </div>
    </section>
  )
}