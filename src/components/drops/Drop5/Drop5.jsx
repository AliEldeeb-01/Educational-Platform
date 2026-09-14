import React, { useContext } from 'react'
import cat1 from '../../../assets/HiStudy/category-1.png'
import cat4 from '../../../assets/HiStudy/category-4.png'
import cat9 from '../../../assets/HiStudy/category-9.png'
import { Link } from 'react-router-dom'
import { DisplayContext } from '../../../context/DisplayContext'
export default function Drop5() {
  const { dark } = useContext(DisplayContext)
  return (

    <section className={`opacity-0 invisible group-hover/drop5:opacity-100 group-hover/drop5:visible absolute top-[100%] left-1/2 -translate-x-1/2    p-8 rounded-2xl border border-amber-500 shadow-2xl w-[450px] transition-all duration-300 ease-in-out grid grid-cols-[1fr_1fr_1fr_320px] gap-8 z-50 -translate-y-2  ${dark == true ?
       `bg-[#192335] text-gray-200 `
       :`bg-white text-blue-950`} `}>

      <div className="flex flex-col gap-4 w-[360px]">
        <ul className="flex flex-col overflow-y-scroll gap-3 text-[14px] font-medium w-full ">
          <Link to={'/'} className="hover:text-white border-l border-amber-500  rounded-lg  cursor-pointer p-3 w-full transition-all duration-400  h-full
          z-20 overflow-hidden items-center flex
          group relative">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            Home
          </Link>

          <Link to={'/Details/7'}  className="hover:text-white border-l border-amber-500  p-3 h-full  w-full rounded-lg z-20 overflow-hidden items-center flex   cursor-pointer transition-all duration-500 group relative">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            Course details
          </Link>

          <Link to={'/CartPage'} className="hover:text-white border-l border-amber-500  p-3  w-full rounded-lg   cursor-pointer transition-all duration-300
          z-20 overflow-hidden items-center flex
          group relative h-full">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            Cart Page
          </Link>
          <Link to={'/Shop'} className="hover:text-white border-l border-amber-500  p-3 h-full  w-full rounded-lg z-20 overflow-hidden items-center flex   cursor-pointer transition-all duration-500 group relative">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            Shop Books
          </Link>
          <Link to={'/ShopCourses'} className="hover:text-white border-l border-amber-500  p-3 h-full  w-full rounded-lg z-20 overflow-hidden items-center flex   cursor-pointer transition-all duration-500 group relative">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            Shop Courses
          </Link>
          <Link to={'/SingleProduct'} className="hover:text-white border-l border-amber-500  p-3 h-full  w-full rounded-lg z-20 overflow-hidden items-center flex   cursor-pointer transition-all duration-500 group relative">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            SingleProduct
          </Link>
          <Link to={'/Register'} className="hover:text-white border-l border-amber-500  p-3 h-full  w-full rounded-lg z-20 overflow-hidden items-center flex   cursor-pointer transition-all duration-500 group relative">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            Register
          </Link>
          <Link to={'/Login'} className="hover:text-white border-l border-amber-500  p-3 h-full  w-full rounded-lg z-20 overflow-hidden items-center flex   cursor-pointer transition-all duration-500 group relative">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            Login
          </Link>
          <Link to={'/profile'} className="hover:text-white border-l border-amber-500  p-3 h-full  w-full rounded-lg z-20 overflow-hidden items-center flex   cursor-pointer transition-all duration-500 group relative">
            <span className='h-full w-0 group-hover:w-full transition-all duration-500  absolute top-0 left-0  z-[-1] bg-gradient-to-r from-fuchsia-500 to-cyan-500 '></span>
            Profile
          </Link>

        </ul>
      </div>
    </section >
  )
}