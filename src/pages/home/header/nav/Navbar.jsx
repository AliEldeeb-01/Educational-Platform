import React, { useEffect, useState } from 'react'
import logo from '../../../../assets/HiStudy/logo.png'
import { BiSolidCategoryAlt } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

import { FaRegUser } from "react-icons/fa";
// import Marquee from "react-marquee-slider";
import { UserDropdown } from '../../../../components/UserDropdown/UserDropdown';
import Drop1 from '../../../../components/drops/Drop1/Drop1';
import Drop2 from '../../../../components/drops/Drop2/Drop2';
import Drop3 from '../../../../components/drops/Drop3/Drop3';
import Drop4 from '../../../../components/drops/Drop4/Drop4';
import Drop5 from '../../../../components/drops/Drop5/Drop5';
import Drop6 from '../../../../components/drops/Drop6/Drop6';
import Drop7 from '../../../../components/drops/Drop7/Drop7';
import { BiCategory } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import NavAcc from '../../../../components/Navacc/Navacc';
import { useContext } from 'react';
import { CartContext } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { DisplayContext } from '../../../../context/DisplayContext';
import Switch from '../../../../components/DarkMode/DarkMode';

export default function Navbar() {

  const [isHandle, setIsHandle] = useState(false)
  // const [numOfProduct, setNumOfProduct] = useState(null)
  const { records, cartIdes } = useContext(CartContext)
  const NUM = Object.keys(cartIdes).length
  console.log(NUM);

  // function getFromLocalDStorage() {
  // }

  const Navigate = useNavigate()

  useEffect(
    () => {
      const handleScroll = window.addEventListener('scroll', () => {
        if (window.scrollY >= 20) {
          setIsHandle(true)
        } else {
          setIsHandle(false)
        }
        // النقطة اللي كانت فايتاني حاجتين ان (addevenlistener) بتشتغل علطول مش بتشتغل وتقفل
        // الحاجة التانيه ان الافيكت بتشغل حاجه بغض النظر الحاجة اللي جواها هتشتغل كام مره
      })
      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
    , []
  )

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { dark, setDark } = useContext(DisplayContext)

  return (

    <section className={`fixed left-0 right-0 w-full z-40 ${dark == false ? `bg-white text-black` : `bg-[#1C2833] text-white`}
      ${isHandle == true ? ` transition duration-200 top-0` : `top-auto`
      }
    
    `}>
      <div className='flex justify-between flex-row items-center w-full h-20 pl-2 py-5 shadow '>
        <div className='shrink-0 flex-row flex items-center gap-1'>
          <img src={logo} className=' h-8 sm:h-12' alt="" />
          <span className=' group/drop1 lg:hidden relative flex flex-row justify-between items-center cursor-pointer lg:text-base xl:text-[18px] font-semibold transition-all duration-200 rounded-4xl h-full '>
            <Switch />
          </span>
          {/* هعمله زرار الوضع الداكن */}
        </div>

        <div className=' h-full hidden sm:hidden md:hidden lg:flex flex-row justify-between items-center lg:gap-3 xl:gap-5'>
          <span className=' group/drop1 relative flex flex-row justify-between items-center cursor-pointer lg:text-base xl:text-[18px] font-semibold p-4 transition-all duration-200 rounded-4xl h-full '>
            <Switch />
          </span>

          <span className={` group/drop1 relative flex flex-row justify-between items-center cursor-pointer lg:text-base xl:text-[18px] font-semibold p-4 transition-all duration-200 rounded-4xl h-full ${dark == false ? `bg-white text-black` : `bg-blue-950 text-gray-50`} `}>
            <BiSolidCategoryAlt /> Category
            <Drop1 />
          </span>

          <span className='flex flex-row justify-between items-center hover:text-blue-600 cursor-pointer lg:text-[14px] xl:text-base transition-all duration-200 group/home relative h-full py-10'>
            Home<MdKeyboardArrowDown className=' group-hover/home:rotate-180 transition-all duration-300' />
            <Drop2 isHandle={isHandle} setIsHandle={setIsHandle} />
          </span>

          <span className='flex flex-row justify-center items-center hover:text-blue-400 cursor-pointer group/drop3 relative lg:text-[14px] xl:text-base py-7.5 transition-all duration-200'>
            Courses<MdKeyboardArrowDown className=' group-hover/drop3:rotate-180 transition-all duration-300' />
            <Drop3 />
          </span>

          <span className='flex flex-row justify-between items-center hover:text-blue-600 cursor-pointer py-7.5 lg:text-[14px] xl:text-base group/drop4 relative transition-all duration-200'>
            Dashboard<MdKeyboardArrowDown className=' group-hover/drop4:rotate-180 transition-all duration-300' />
            <Drop4 />
          </span>

          <span className='flex flex-row justify-between items-center hover:text-blue-600 cursor-pointer py-7.5 lg:text-[14px] xl:text-base transition-all duration-200 group/drop5 relative'>
            Pages<MdKeyboardArrowDown className=' group-hover/drop5:rotate-180 transition-all duration-300' />
            <Drop5 />
          </span>

          <span className='flex flex-row justify-between items-center hover:text-blue-600 cursor-pointer lg:text-[14px] xl:text-base transition-all duration-200 group/drop6 relative'>
            Element<MdKeyboardArrowDown className=' group-hover/drop6:rotate-180 transition-all duration-300' />
            <Drop6 />
          </span>

          <span className='flex flex-row justify-between items-center hover:text-blue-600 cursor-pointer py-7.5 lg:text-[14px] xl:text-base transition-all duration-200 group/drop7 relative'>
            Blog<MdKeyboardArrowDown className=' group-hover/drop7:rotate-180 transition-all duration-300' />
            <Drop7 />
          </span>
        </div>

        <div className='hidden sm:hidden md:hidden lg:flex flex-row justify-between items-center gap-2 pr-1'>
          <CiSearch className={` size-9 cursor-pointer transition-all duration-300 hover:transition-all p-2 hover:text-white hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full sm:flex hidden `} />
          <span className=' relative'>
            <CiShoppingCart
              onClick={() => Navigate('/cartPage')}
              className=' size-9 cursor-pointer transition duration-200 p-2 lg:mr-2 hover:text-white hover:bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full ' />
            <span className=" absolute top-0 -right-1 bg-blue-700 text-white rounded-full
             flex text-center size-4 overflow-hidden items-center text-sm justify-center p-0.5 lg:mr-2"> {NUM} </span>
          </span>

        </div>

        <div className='flex flex-row gap-[1px] justify-between items-center '>
          <div className='flex flex-row gap-[1px] justify-center items-center cursor-pointer rounded-2xl transition-all duration-200 '>
            <CiSearch className=' size-9 cursor-pointer transition duration-200 p-2 hover:text-blue-500 hover:bg-[#e1e1e1] rounded-full lg:hidden sm:flex hidden ' />
            <span className='relative'>
              <CiShoppingCart
                onClick={() => Navigate('/cartPage')}
                className=' size-9 cursor-pointer transition duration-200 p-2 hover:text-blue-500 hover:bg-[#e1e1e1] rounded-full lg:hidden block ' />
              <span className=" lg:hidden absolute top-0 -right-1 bg-blue-700 text-white rounded-full flex text-center size-4 overflow-hidden items-center text-sm justify-center p-0.5"> {NUM} </span>
            </span>

            <UserDropdown />
            <CiMenuBurger className='lg:hidden flex hover:text-blue-600 hover:bg-gray-100 text-[35px] p-1.5 rounded-full' onClick={() => setIsMenuOpen(true)} />
          </div>

          <div className='hidden sm:hidden md:hidden xl:flex p-[1px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer transition-all duration-200 mr-2 '>
            <div className='p-[2px] rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer transition-all duration-200 w-[70px] overflow-hidden h-9 flex items-center relative'>
              <div className='bg-white text-blue-600 w-[100%] h-full rounded-[10px] font-bold text-xs flex items-center overflow-hidden relative' >

                <div className='absolute flex gap-4 whitespace-nowrap animate-[marquee_6s_linear_infinite] [animation-delay:-3s]'>
                  <span className='mx-4'>ENROLL NOW</span>
                  <span className='mx-4'>ENROLL NOW</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <NavAcc isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

    </section>
  )
}