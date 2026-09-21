import React, { useContext } from 'react'
import { MdClose } from "react-icons/md";
import { CiPhone } from "react-icons/ci";
import { HiOutlineMail } from "react-icons/hi";
import imagg from '../../assets/HiStudy/logo.png'
import { Acc } from './Acc/Acc';
import { FiLinkedin } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { AuthContext } from '../../context/supabaseContext';
import { DisplayContext } from '../../context/DisplayContext';

export default function NavAcc({ isMenuOpen, setIsMenuOpen }) {
  const { currentUser } = useContext(AuthContext)
  const { dark } = useContext(DisplayContext)

  return (



    <section className={`w-full  
      `} >
      {
        isMenuOpen &&
        <div
          onClick={() => setIsMenuOpen(false)}
          className={`fixed right-0 left-0 bottom-0 
            ${scrollY <= 20 ? `top-50` : `top-20`}
             z-40 bg-black/40 backdrop-blur-sm
            `}
        />
      }
      <div
        className={`w-[80%] z-50 
           ${scrollY <= 20 ? ` -translate-y-2` : ``}
          lg:hidden md:absolute md:w-[60%] sm:w[75%]  p-5 absolute  left-0 ${dark == true ?
            `bg-[#192335] text-gray-100 `
            : `bg-white text-[#192335]`}

         shadow-2xl h-[calc(100vh-5rem)] overflow-y-auto transition-all duration-300 ease-in-out z-50 
         ${isMenuOpen ? "translate-x-0"
            : "-translate-x-full"
          }`}>

        <div className={`sticky top-0  -translate-y-5 ${dark == true ?
          `bg-[#192335] text-white `
          : `bg-white text-[#192335]`} z-10  pl-1 w-full py-2  `}>
          <div className='flex-row justify-between items-center items- mb-4 flex'>

            <img src={imagg} className=' w-32 h-[75px]' alt="" />
            <span>
              <MdClose onClick={() => setIsMenuOpen(false)} className={` p-2 rounded-full  cursor-pointer size-10 transition-all duration-400 ${dark ? `bg-red-600 text-red-200 hover:bg-red-200 active:bg-red-200 hover:text-red-600 active:text-red-600` : `bg-red-200 text-red-600 hover:bg-red-600 active:bg-red-600 hover:text-red-200 active:text-red-200`}  `} />
            </span>
          </div>
        </div>

        <div className='flex flex-col gap-4 text-gray-400'>
          <div>
            <p>Histudy is a education website template. You can customize all.</p>
          </div>
          <div className='flex flex-col md:flex-row opacity-100 gap-1.5  '>
            <a className=' cursor-pointer  hover:opacity-100 active:opacity-100 hover:text-blue-800 active:text-blue-800 flex flex-row items-center justify-center gap-0.5 transition-all duration-200 '>
              <HiOutlineMail />
              <span>{currentUser?.email}</span>
            </a>
            <a className=' cursor-pointer hover:opacity-100 active:opacity-100 hover:text-blue-800 active:text-blue-800 flex flex-row items-center justify-center gap-0.5 transition-all duration-200  '>
              <CiPhone />
              <span>{currentUser?.phone}</span>
            </a>
          </div>
        </div>

        <div className='flex justify-center items-center '>
          <Acc setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
        </div>

        <div className='flex justify-center items-center w-full cursor-pointer'>
          <div className=' w-[80%] bg-gradient-to-r rounded-2xl from-blue-600 via-purple-500 to-pink-500 p-[3px] flex justify-center items-center'>
            <div className={`h-10 w-[100%] ${dark == true ?
              `bg-[#192335] text-gray-100 `
              : `bg-white text-[#192335]`} p-4 rounded-[11px] flex justify-center items-center`}>
              <span className=' '>
                Enroll Now
              </span>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-start items-center flex-row'>
            <span className='opacity-50 border-b-2 border-gray-100 py-4 px-4'>Find With Us.</span>
          </div>
          <div className='flex flex-row gap-1 items-center justify-center'>
            <FiFacebook className=' p-3.5 size-12 rounded-2xl hover:bg-blue-500 active:bg-blue-500  hover:text-white active:text-white cursor-pointer opacity-70 hover:opacity-100 active:opacity-100 transition-all duration-300 ' />
            <FiTwitter className=' p-3.5 size-12 opacity-70 hover:opacity-100 active:opacity-100 transition-all duration-300 rounded-2xl hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white cursor-pointer ' />
            <FaInstagram className=' p-3.5 size-12 opacity-70 hover:opacity-100 active:opacity-100 transition-all duration-300 rounded-full hover:bg-blue-500 active:bg-blue-500 hover:text-white active:text-white cursor-pointer ' />
            <FiLinkedin className=' p-3.5 size-12 opacity-70 hover:opacity-100 active:opacity-100 transition-all duration-300 rounded-xl hover:bg-blue-500 active:bg-blue-500  hover:text-white active:text-white cursor-pointer ' />
          </div>

        </div>
      </div>


    </section>



  )
}
