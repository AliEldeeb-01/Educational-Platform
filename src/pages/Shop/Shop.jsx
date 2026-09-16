import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './Shop.css'
import CoursesData from './CoursesData';
import { IoArrowForward } from "react-icons/io5";
import { MdArrowForwardIos } from "react-icons/md";
import { GiClick } from "react-icons/gi";
import { DisplayContext } from '../../context/DisplayContext';


export default function Shop() {
  const { dark } = useContext(DisplayContext)

  return (
    <section className={`transition-colors duration-200 ${dark ? 'bg-gray-900 text-gray-100' : 'bg-[#F8F8F9] text-gray-800'}`} >
      <div className=' min-h-[90vh] '>


        <div className={`header-shop min-h-[90vh] flex flex-col px-20 py-32 w-full mx-auto ${dark ? 'header-shop-dark' : ''}`}>
          <div className=' flex flex-col gap-6'>
            <div className={`flex flex-row gap-1 text-sm items-center ${dark ? 'text-gray-400' : 'text-gray-400'}`}>
              <Link to={'/'} className={`cursor-pointer hover:text-blue-600 active:text-blue-600 transition-all duration-200 ${dark ? 'text-gray-400' : 'text-gray-500'}`} >
                Home
              </Link>
              <MdArrowForwardIos className={`size-4 ${dark ? 'text-gray-500' : 'text-gray-300'}`} />
              <span> All Products </span>
            </div>
            <span className=' block text-5xl font-bold my-2.5'>All Products</span>
            <p className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-700'}`}>Products that help beginner designers become true unicorns. </p>
            <p className={`items-center text-sm flex flex-row gap-2 ${dark ? 'text-indigo-400' : 'text-indigo-700'}`}>
              <GiClick className='' />Select the book image to view its details.
            </p>
          </div>

        </div>
        <div className='p-5'>

          <div className='  w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 -mt-22'>
            <CoursesData />
          </div>
        </div>
      </div>
    </section>
  )
}