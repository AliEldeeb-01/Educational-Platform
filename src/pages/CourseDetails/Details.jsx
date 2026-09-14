import React, { useContext, useEffect, useRef, useState } from 'react'
// import bgImage from '../../assets/HiStudy/bg-image-10.webp'
import { Link, useParams } from 'react-router-dom'
import '../CourseDetails/Details.css'
import { IoIosArrowForward } from "react-icons/io";
import cardIcon from '../../assets/HiStudy/card-icon-1.png'
import avater2 from '../../assets/HiStudy/avatar-02.png'
import { RiStarSFill } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { FiAward } from "react-icons/fi";
import video1 from '../../assets/HiStudy/video-01.jpg'
import play1 from '../../lottieFiles/Play button.json'
import { FaRegEye } from "react-icons/fa";
import { Player } from '@lottiefiles/react-lottie-player';
import { IoMdTime } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineReplay } from "react-icons/md";
import course1 from '../../assets/HiStudy/course-01.jpg'
import { AccordionDetails } from './AccordionDetails/AccordionDetails';
import instructor from '../../assets/HiStudy/client-06.png'
import { IoCheckmark } from "react-icons/io5";
import { IoIosVideocam } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaRegFaceGrinWink } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { LuLinkedin } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { RiStarSLine } from 'react-icons/ri';

import testion4 from '../../assets/HiStudy/testimonial-1.jpg'
import testion3 from '../../assets/HiStudy/testimonial-3.jpg'
import testion2 from '../../assets/HiStudy/testimonial-6.jpg'
import testion1 from '../../assets/HiStudy/testimonial-8.jpg'
import { BiDislike } from "react-icons/bi";
import { BiLike } from "react-icons/bi";
import axios from 'axios';
import { CartContext } from '../../context/CartContext';
import { DisplayContext } from '../../context/DisplayContext';
import { supabase } from '../../clientSupabase';

export default function Details() {
  const [scroll, setScroll] = useState(0)
  const [handleShow, setHandleShow] = useState(false)
  const [dataCourses, setDataCourses] = useState([])
  const { handleAddToCartCourses, cartIdes } = useContext(CartContext)

  const { id } = useParams()

  const getSingleCourseData = async () => {
    const { data } = await
      //  axios.get(`http://localhost:3000/products?category=courses&id=${id}`)
      supabase.from('Products').select('*').eq('id', id)
    setDataCourses(data?.[0])
  }

  useEffect(() => {
    getSingleCourseData()
  }, [])

  const [activeSec, setActiveSec] = useState('Overview')

  function handleShowMore() {
    if (handleShow == false) {
      setHandleShow(true)
    } else {
      setHandleShow(false)
    }
  }

  useEffect(
    () => {
      const allSec = document.querySelectorAll('.sec')

      const handleSec = () => {
        allSec.forEach((item) => {
          if (window.scrollY >= item.offsetTop) {
            setActiveSec(item.id)
          }
        })
      }

      const handleFixed = () => {
        setScroll(window.scrollY)
      }

      const handleScroll = () => {
        handleFixed()
        handleSec()
      }

      window.addEventListener('scroll', handleScroll)

      return () => (window.removeEventListener('scroll', handleScroll))
    },
    []
  )

  const { dark } = useContext(DisplayContext)

  return (
    <section
      className={` w-[100%]
        ${dark == true
          ? `bg-[#192335] text-gray-100`
          : `bg-[#e6e6e647] text-[#192335]`
        }`}
    >

      {/* header and fixed card */}

      <div
        className={`h-[600px] w-[100%] ${dark == true
          ? `bg-[#192335] text-gray-100 headerDetails-dark`
          : `bg-[#e6e6e647] text-[#192335] headerDetails`
          } justify-between items-centar my-20 flex pl-8 pt-8`}
      >

        <div className='flex flex-col gap-5 items-start justify-start'>

          <div className='flex flex-row gap-1 items-center justify-center'>
            <Link
              to={'/'}
              className={`hover:text-blue-600 transition-all duration-300 ${dark ? 'text-gray-400' : 'text-gray-500'
                }`}
            >
              Home
            </Link>

            <IoIosArrowForward />

            <span>Web Development</span>
          </div>

          <h1 className='md:text-6xl text-3xl sm:w-[50%] font-semibold'>
            The Complete Histudy 2024: From Zero to Expert!
          </h1>

          <p
            className={`sm:w-[50%] ${dark ? 'text-gray-300' : 'text-gray-600'
              }`}
          >
            Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!
          </p>

          <div className='flex flex-row gap-3 items-center justify-center'>

            <div>

              <div className='flex flex-row justify-center items-center rounded-3xl g py-3 not-even:px-4 bg-pink-600'>
                <img className='w-8' src={cardIcon} alt="" />
                <span>Bestseller</span>
              </div>

              <div className='flex flex-row gap-0.5 items-center justify-center'>
                <span>4.8</span>

                <span className='flex flex-row text-yellow-600'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </span>
              </div>

            </div>

            <div className='flex flex-col sm:flex-row'>
              <span
                className={`p-2 hover:scale-105 rounded-lg ${dark
                  ? 'bg-[#2b374b] text-gray-200'
                  : 'bg-[#f4f4f45f] text-[#192335]'
                  } hover:text-blue-400 hover:bg-blue-100 transition-all duration-300 cursor-pointer text-sm`}
              >
                215,475 rating
              </span>

              <span className='p-2 text-sm rounded-lg'>
                616,029 students
              </span>
            </div>

          </div>

          <div className='flex flex-row gap-3 items-center justify-center'>

            <img
              src={avater2}
              className='w-8 rounded-full cursor-pointer border-2 border-gray-50'
              alt=""
            />

            <div className='flex gap-1'>

              <span className={`${dark ? 'text-amber-400' : 'text-gray-500'}`}>
                By
              </span>

              <span
                className={`cursor-pointer transition-all duration-200 hover:text-blue-400 ${dark ? 'text-gray-100' : 'text-[#192335]'
                  }`}
              >
                Angela
              </span>

              <span className={`${dark ? 'text-amber-400' : 'text-gray-500'}`}>
                IN
              </span>

              <span
                className={`cursor-pointer transition-all duration-200 hover:text-blue-400 ${dark ? 'text-gray-100' : 'text-[#192335]'
                  }`}
              >
                Development
              </span>

            </div>

          </div>

          <div
            className={`${dark ? 'text-amber-400' : 'text-gray-700'
              } flex flex-row gap-2 items-center justify-center`}
          >
            <span className='flex flex-row gap-1 items-center justify-center'>
              <FaRegCalendarAlt />
              Last updated 12/2024
            </span>

            <span className='flex flex-row gap-1 items-center justify-center'>
              <GiWorld />
              English
            </span>

            <span className='flex flex-row gap-1 items-center justify-center'>
              <FiAward />
              Certified Course
            </span>
          </div>

        </div>

        {/* الكارد العائمه */}

        <div
          className={`fixed z-30 right-[30px] w-[30%] overflow-visible ${dark
            ? 'bg-[#202c40] text-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.45)]'
            : 'bg-white text-[#192335] shadow-[0_8px_25px_rgba(0,0,0,0.08)]'
            }`}
        >

          <div
            className={`hidden lg:flex flex-col gap-1 p-2 border-2 rounded-lg ${dark
              ? 'border-purple-400/50 bg-[#202c40]'
              : 'border-[#BA9BE8] bg-white'
              }`}
          >

            {/* الصوره ومحتوياتها */}

            <div className='flex flex-col relative p-5'>

              <img
                src={dataCourses?.image}
                className={`rounded-lg md:hidden lg:flex w-[100%] h-fit ${scroll >= 588 ? `lg:hidden` : `flex`
                  }`}
                alt=""
              />

              <span className='md:hidden lg:flex flex-row justify-center items-center absolute bottom-[15%] left-[28%] text-[#b8b8b8] gap-1'>
                <FaRegEye />
                Preview this course
              </span>

            </div>

            {/* السعر والخصم */}

            <div className='flex flex-row gap-1.5 text-center w-[100%] text-lg justify-center items-center'>

              <span
                className={`font-bold text-[20px] ${dark ? 'text-gray-100' : 'text-gray-500'
                  }`}
              >
                ${(dataCourses?.price - (dataCourses?.price * dataCourses?.discount / 100)).toFixed(2)}
              </span>

              <s
                className={`text-[20px] scale-85 font-bold ${dark ? 'text-gray-500' : 'text-gray-300'
                  }`}
              >
                ${dataCourses?.price}
              </s>

              <span className='flex flex-row justify-center items-center gap-1 px-3 text-red-600 bg-red-100 text-[15px] rounded-lg py-1'>
                <IoMdTime />
                3 days left!
              </span>

            </div>

            {/* fixed (section) */}

            <div className='flex flex-col gap-1 items-center mt-3'>

              {/* buying-buttons */}

              <button
                onClick={() => handleAddToCartCourses(dataCourses)}
                disabled={cartIdes[dataCourses.id] == 1}
                className='disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r hover:bg-gradient-to-l transition-all duration-200 from-fuchsia-600 to-purple-600 group text-white p-5 w-[80%] rounded-2xl flex flex-row items-center gap-1.5 text-center justify-center cursor-pointer'
              >
                Add to card

                <FaArrowRight
                  className={`group-hover:translate-x-0 group-hover:opacity-100 -translate-x-5 opacity-0 transition-all duration-300 ${cartIdes[dataCourses.id] == 1 ? `hidden` : `inline`
                    }`}
                />

              </button>

              {/* <button
                className={`hover:bg-blue-700 border-2 ${dark ? 'border-gray-600 text-gray-100' : 'border-gray-200'
                  } group/buy hover:text-white transition-all duration-300 p-5 w-[80%] rounded-2xl flex flex-row items-center gap-1.5 text-center justify-center cursor-pointer`}
              >
                BUY NOW ?...

                <FaArrowRight className='group-hover/buy:translate-x-0 group-hover/buy:opacity-100 -translate-x-5 opacity-0 transition-all duration-300' />
              </button> */}

              <p
                className={`flex flex-row items-center gap-1 mt-2 w-[80%] text-sm justify-center ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                <MdOutlineReplay />
                30-Day Money-Back Guarantee
              </p>

              <div
                className={`flex flex-row justify-between items-center py-3.5 border-b-[1px] w-[80%] text-sm ${dark
                  ? 'text-gray-300 border-gray-700'
                  : 'text-gray-600 border-gray-200'
                  }`}
              >
                <span>Start Date</span>

                <span
                  className={`rounded p-1 ${dark
                    ? 'bg-[#2b374b] text-gray-200'
                    : 'bg-gray-100'
                    }`}
                >
                  5 Hrs 20 Min
                </span>
              </div>

              <div
                className={`flex flex-row justify-between items-center pb-3.5 border-b-[1px] w-[80%] text-sm ${dark
                  ? 'text-gray-300 border-gray-700'
                  : 'text-gray-600 border-gray-200'
                  }`}
              >
                <span>Enrolled</span>

                <span
                  className={`rounded p-1 ${dark
                    ? 'bg-[#2b374b] text-gray-200'
                    : 'bg-gray-100'
                    }`}
                >
                  100
                </span>
              </div>

              <div
                className={`flex flex-row justify-between items-center pb-3.5 border-b-[1px] w-[80%] text-sm ${dark
                  ? 'text-gray-300 border-gray-700'
                  : 'text-gray-600 border-gray-200'
                  }`}
              >
                <span>Lectures</span>

                <span
                  className={`rounded p-1 ${dark
                    ? 'bg-[#2b374b] text-gray-200'
                    : 'bg-gray-100'
                    }`}
                >
                  {dataCourses?.lessons}
                </span>
              </div>

              <div
                className={`flex flex-row justify-between items-center pb-3.5 border-b-[1px] w-[80%] text-sm ${dark
                  ? 'text-gray-300 border-gray-700'
                  : 'text-gray-600 border-gray-200'
                  }`}
              >
                <span>Skill Level</span>

                <span
                  className={`rounded p-1 ${dark
                    ? 'bg-[#2b374b] text-gray-200'
                    : 'bg-gray-100'
                    }`}
                >
                  Basic
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* All sections other */}

      <div className='felx flex-col gap-5 lg:w-[70%] w-[100%]'>

        {/* card photo */}

        <div className='rounded p-12'>
          <img
            src={dataCourses?.image}
            className={`w-[100%] h-fit rounded-2xl overflow-hidden md:p-12 ${dark
              ? 'shadow-[0_0_18px_rgba(239,172,2,0.18)]'
              : 'shadow-[0_0_8px_rgba(239,172,2,0.35)]'
              }`}
            alt="ERR"
          />
        </div>

        <div className='px-12'>

          <div
            className={`justify-center text-center w-[100%] flex lg:hidden flex-col gap-1  border-2 rounded-lg ${dark
              ? 'border-purple-400/50 bg-[#202c40] text-gray-100'
              : 'border-[#BA9BE8] bg-white text-[#192335]'
              }`}
          >

            <div
              className={`flex flex-row justify-between items-center py-3.5 border-b-[1px] px-2 text-sm ${dark
                ? 'text-amber-400 border-gray-700'
                : 'text-gray-600 border-gray-200'
                }`}
            >
              <span>Start Date</span>

              <span
                className={`rounded p-1 ${dark
                  ? 'bg-[#2b374b] text-gray-200'
                  : 'bg-gray-100'
                  }`}
              >
                5 Hrs 20 Min
              </span>
            </div>

            <div
              className={`flex flex-row justify-between items-center pb-3.5 border-b-[1px] text-sm px-2 ${dark
                ? 'text-amber-400 border-gray-700'
                : 'text-gray-600 border-gray-200'
                }`}
            >
              <span>Enrolled</span>

              <span
                className={`rounded p-1 ${dark
                  ? 'bg-[#2b374b] text-gray-200'
                  : 'bg-gray-100'
                  }`}
              >
                100
              </span>
            </div>

            <div
              className={`flex flex-row justify-between items-center pb-3.5 border-b-[1px] text-sm px-2 ${dark
                ? 'text-amber-400 border-gray-700'
                : 'text-gray-600 border-gray-200'
                }`}
            >
              <span>Lectures</span>

              <span
                className={`rounded p-1 ${dark
                  ? 'bg-[#2b374b] text-gray-200'
                  : 'bg-gray-100'
                  }`}
              >
                {dataCourses?.lessons}
              </span>
            </div>

            <div
              className={`flex flex-row justify-between items-center pb-3.5 border-b-[1px] text-sm px-2 ${dark
                ? 'text-amber-400 border-gray-700'
                : 'text-gray-600 border-gray-200'
                }`}
            >
              <span>Skill Level</span>

              <span
                className={`rounded p-1 ${dark
                  ? 'bg-[#2b374b] text-gray-200'
                  : 'bg-gray-100'
                  }`}
              >
                Basic
              </span>
            </div>

            {/* السعر والخصم */}

            <div className='flex flex-row gap-1.5 text-center text-lg justify-center items-center'>

              <span
                className={`font-bold text-[20px] ${dark ? 'text-gray-100' : 'text-gray-600'
                  }`}
              >
                ${(dataCourses?.price - (dataCourses?.price * dataCourses?.discount / 100)).toFixed(0)}
              </span>

              <s
                className={`text-[20px] scale-85 font-bold ${dark ? 'text-gray-500' : 'text-gray-300'
                  }`}
              >
                ${(dataCourses?.price).toFixed(2)}
              </s>

              <span className='flex flex-row justify-center items-center gap-1 px-3 text-red-600 bg-red-100 text-[15px] rounded-lg py-1'>
                <IoMdTime />
                3 days left!
              </span>

            </div>

            {/* fixed (section) */}

            <div className='flex flex-col gap-1 items-center mt-3'>

              {/* buying-buttons */}

              <button
                onClick={() => handleAddToCartCourses(dataCourses)}
                disabled={cartIdes[dataCourses.id] == 1}
                className='disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r hover:bg-gradient-to-l transition-all duration-200 from-fuchsia-600 to-purple-600 group p-5 w-[80%] rounded-2xl flex flex-row items-center gap-1.5 text-center justify-center cursor-pointer'
              >
                Add to card

                <FaArrowRight
                  className={`group-hover:translate-x-0 group-hover:opacity-100 -translate-x-5 opacity-0 transition-all duration-300 ${cartIdes[dataCourses.id] == 1 ? `hidden` : `inline`
                    }`}
                />
              </button>

             
              <p
                className={`flex flex-row items-center gap-1 mt-2 w-[80%] text-sm justify-center ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                <MdOutlineReplay />
                30-Day Money-Back Guarantee
              </p>

            </div>

          </div>
        </div>

      </div>

      {/* Nav sticky */}

      <nav className='lg:w-[70%] w-[100%] flex sm:sticky sm:top-[50px] pt-10 bg-transparent'>

        <ul
          className={`${dark
            ? 'bg-[#202c40] shadow-[0_6px_25px_rgba(0,0,0,0.4)]'
            : 'bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)]'
            } mx-auto flex flex-row w-[80%] flex-wrap gap-2 justify-center w-fit px-3 py-2 rounded-4xl`}
        >

          <li
            className={`p-4 rounded-3xl nav-link ${dark
              ? 'bg-[#29364b] text-gray-200'
              : 'bg-[#F8F8F9] text-black'
              } hover:bg-blue-600 hover:text-white ${activeSec == 'Overview' ? `active` : ''
              }`}
          >
            <a href='#Overview' className='p-2.5 w-full h-full'>
              Overview
            </a>
          </li>

          <li
            className={`p-4 rounded-3xl nav-link ${dark
              ? 'bg-[#29364b] text-gray-200'
              : 'bg-[#F8F8F9] text-black'
              } hover:bg-blue-600 hover:text-white ${activeSec == 'Course' ? `active` : ''
              }`}
          >
            <a href='#Course' className='p-2.5'>
              Course Content
            </a>
          </li>

          <li
            className={`p-4 rounded-3xl nav-link ${dark
              ? 'bg-[#29364b] text-gray-200'
              : 'bg-[#F8F8F9] text-black'
              } hover:bg-blue-600 hover:text-white ${activeSec == 'Details' ? `active` : ''
              }`}
          >
            <a href='#Details' className='p-2.5'>
              Details
            </a>
          </li>

          <li
            className={`p-4 rounded-3xl nav-link ${dark
              ? 'bg-[#29364b] text-gray-200'
              : 'bg-[#F8F8F9] text-black'
              } hover:bg-blue-600 hover:text-white ${activeSec == 'Intructor' ? `active` : ''
              }`}
          >
            <a href='#Intructor' className='p-2.5'>
              Intructor
            </a>
          </li>

          <li
            className={`p-4 rounded-3xl nav-link ${dark
              ? 'bg-[#29364b] text-gray-200'
              : 'bg-[#F8F8F9] text-black'
              } hover:bg-blue-600 hover:text-white ${activeSec == 'Review' ? `active` : ''
              }`}
          >
            <a href='#Review' className='p-2.5'>
              Review
            </a>
          </li>

        </ul>
      </nav>

      {/* overview section */}

      <div className='relative pt-10 sec' id='Overview'>

        <section
          className={`lg:w-[70%] w-[100%] ${handleShow == false
            ? `h-[400px] overflow-hidden`
            : `h-fit`
            }`}
        >

          <div
            className={`w-[95%] text-lg mx-auto p-6 rounded-lg flex justify-center flex-col items-center ${dark
              ? 'bg-[#202c40] text-gray-300 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
              : 'bg-white text-gray-500 shadow-[0_8px_25px_rgba(0,0,0,0.07)]'
              }`}
          >

            <div
              className={`border-b-2 pb-4 w-full ${dark ? 'border-gray-700' : 'border-gray-100'
                }`}
            >
              <span
                className={`font-bold text-2xl ${dark ? 'text-gray-100' : 'text-black'
                  }`}
              >
                What you'll learn
              </span>
            </div>

            <p className='pt-3'>
              Are you new to PHP or need a refresher? Then this course will help you get all the fundamentals of Procedural PHP, Object Oriented PHP, MYSQLi and ending the course by building a CMS system similar to WordPress, Joomla or Drupal. Knowing PHP has allowed me to make enough money to stay home and make courses like this one for students all over the world.
            </p>

            <div className='flex flex-row justify-between items-center'>

              <div className='flex flex-col justify-between items-center gap-1.5'>

                <p className='flex flex-row gap-1 items-start'>
                  <span>
                    <IoCheckmark className='text-green-500 mt-1' />
                  </span>

                  <span>
                    Become an advanced, confident, and modern JavaScript developer from scratch.
                  </span>
                </p>

                <p className='flex flex-row gap-1 items-start'>
                  <span>
                    <IoCheckmark className='text-green-500 mt-1' />
                  </span>

                  <span>
                    Have an intermediate skill level of Python programming.
                  </span>
                </p>

                <p className='flex flex-row gap-1 items-start'>
                  <span>
                    <IoCheckmark className='text-green-500 mt-1' />
                  </span>

                  <span>
                    Have a portfolio of various data analysis projects.
                  </span>
                </p>

                <p className='flex flex-row gap-1 items-start'>
                  <span>
                    <IoCheckmark className='text-green-500 mt-1' />
                  </span>

                  <span>
                    Use the Jupyter Notebook Environment. JavaScript developer from scratch..
                  </span>
                </p>

              </div>

              <div className='flex flex-col justify-between items-center gap-1.5'>

                <p className='flex flex-row gap-1 items-start'>
                  <span>
                    <IoCheckmark className='text-green-500 mt-1' />
                  </span>

                  <span>
                    Use the numpy library to create and manipulate arrays.
                  </span>
                </p>

                <p className='flex flex-row gap-1 items-start'>
                  <span>
                    <IoCheckmark className='text-green-500 mt-1' />
                  </span>

                  <span>
                    Use the pandas module with Python to create and structure data.
                  </span>
                </p>

                <p className='flex flex-row gap-1 items-start'>
                  <span>
                    <IoCheckmark className='text-green-500 mt-1' />
                  </span>

                  <span>
                    Have a portfolio of various data analysis projects.
                  </span>
                </p>

                <p className='flex flex-row gap-1 items-start'>
                  <span>
                    <IoCheckmark className='text-green-500 mt-1' />
                  </span>

                  <span>
                    Create data visualizations using matplotlib and the seaborn.
                  </span>
                </p>

              </div>

            </div>

            <p className='mt-5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, aliquam voluptas laudantium incidunt architecto nam excepturi provident rem laborum repellendus placeat neque aut doloremque ut ullam, veritatis nesciunt iusto officia alias, non est vitae. Eius repudiandae optio quam alias aperiam nemo nam tempora, dignissimos dicta excepturi ea quo ipsum omnis maiores perferendis commodi voluptatum facere vel vero. Praesentium quisquam iure veritatis, perferendis adipisci sequi blanditiis quidem porro eligendi fugiat facilis inventore amet delectus expedita deserunt ut molestiae modi laudantium, quia tenetur animi natus ea. Molestiae molestias ducimus pariatur et consectetur. Error vero, eum soluta delectus necessitatibus eligendi numquam hic at?
            </p>

          </div>
        </section>

        {/* button showing */}

        <div
          className={`w-full flex justify-center mt-4 pb-6 transition-all duration-300 ${!handleShow
            ? `absolute bottom-0 pt-20 bg-gradient-to-t ${dark
              ? 'from-[#192335] via-[#192335e8] to-transparent'
              : 'from-[#F8F8F9] via-[#f8f8f9f0] to-transparent'
            }`
            : ' -translate-y-4 relative'
            }`}
        >
          <button
            onClick={handleShowMore}
            className={`text-sm font-semibold text-blue-600 hover:text-white hover:bg-blue-600 border-t-2 border border-blue-600 px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${dark
              ? 'shadow-[0_4px_12px_rgba(0,0,0,0.35)]'
              : 'shadow-sm'
              }`}
          >
            {handleShow ? "Show less" : "Show more"}
          </button>
        </div>

      </div>

      {/* Course content section */}

      <div
        className='lg:w-[70%] lg:mx-0 w-[100%] flex '
        id='Course'
      >
        <section className='flex w-[95%] ' id='Course'>
          <AccordionDetails />
        </section>
      </div>

      {/* Details section */}

      <section
        id='Details'
        className='sec rounded-2xl  lg:w-[65%] lg:mx-0 w-[100%] mx-auto flex justify-center'
      >

        <div
          className={`flex flex-col mt-7 w-[95%] shadow-[0_0_2px_2px_#FF8904] rounded-2xl ${dark
            ? 'bg-[#202c40] text-gray-300'
            : 'bg-white text-gray-600'
            }`}
        >

          <div
            className={`flex flex-col md:flex-row justify-between items-start w-[90%] mx-auto px-9 mt-7 text-[18px] pb-7 rounded-2xl gap-8  ${dark
              ? 'bg-[#202c40] text-gray-300'
              : 'bg-white text-gray-600'
              }`}
          >

            {/* العمود الأول: Requirements */}

            <div className='flex flex-col justify-start items-start gap-3 w-full md:w-[45%]'>

              <div
                className={`w-full border-b-2 mb-2 ${dark ? 'border-gray-700' : 'border-gray-100'
                  }`}
              >
                <p
                  className={`text-2xl font-black py-4 ${dark ? 'text-gray-100' : 'text-gray-800'
                    }`}
                >
                  Requirements
                </p>
              </div>

              <p className='flex flex-row gap-2 items-start'>
                <span>
                  <IoCheckmark className='text-green-500 mt-1' />
                </span>

                <span>
                  Become an advanced, confident, and modern JavaScript developer from scratch.
                </span>
              </p>

              <p className='flex flex-row gap-2 items-start'>
                <span>
                  <IoCheckmark className='text-green-500 mt-1' />
                </span>

                <span>
                  Have an intermediate skill level of Python programming.
                </span>
              </p>

              <p className='flex flex-row gap-2 items-start'>
                <span>
                  <IoCheckmark className='text-green-500 mt-1' />
                </span>

                <span>
                  Have a portfolio of various data analysis projects.
                </span>
              </p>

              <p className='flex flex-row gap-2 items-start'>
                <span>
                  <IoCheckmark className='text-green-500 mt-1' />
                </span>

                <span>
                  Use the Jupyter Notebook Environment.
                </span>
              </p>

            </div>

            {/* العمود الثاني: Description */}

            <div className='flex flex-col justify-start items-start gap-3 w-full md:w-[45%]'>

              <div
                className={`w-full border-b-2 mb-2 ${dark ? 'border-gray-700' : 'border-gray-100'
                  }`}
              >
                <p
                  className={`text-2xl font-black py-4 ${dark ? 'text-gray-100' : 'text-gray-800'
                    }`}
                >
                  Description
                </p>
              </div>

              <p className='flex flex-row gap-2 items-start'>
                <span>
                  <IoCheckmark className='text-green-500 mt-1' />
                </span>

                <span>
                  Use the numpy library to create and manipulate arrays.
                </span>
              </p>

              <p className='flex flex-row gap-2 items-start'>
                <span>
                  <IoCheckmark className='text-green-500 mt-1' />
                </span>

                <span>
                  Use the pandas module with Python to create and structure data.
                </span>
              </p>

              <p className='flex flex-row gap-2 items-start'>
                <span>
                  <IoCheckmark className='text-green-500 mt-1' />
                </span>

                <span>
                  Have a portfolio of various data analysis projects.
                </span>
              </p>

              <p className='flex flex-row gap-2 items-start'>
                <span>
                  <IoCheckmark className='text-green-500 mt-1' />
                </span>

                <span>
                  Create data visualizations using matplotlib and seaborn.
                </span>
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Instructor section */}

      <section
        className='lg:w-[65%] sec mt-8 lg:mx-0 w-[100%] mx-auto flex justify-center'
        id='Intructor'
      >

        <div
          className={`flex flex-col w-[95%] shadow-[0_0_2px_2px_#FF8904] mx-auto rounded-lg ${dark
            ? 'bg-[#202c40] text-gray-100 '
            : 'bg-white text-[#192335]'
            }`}
        >

          <div className='w-full'>

            <span
              className={`flex w-full border-b-2 font-black p-2 text-2xl ${dark ? 'border-gray-700' : 'border-gray-100'
                }`}
            >
              Instructor
            </span>

          </div>

          <div className='flex md:flex-row flex-col gap-1'>

            <div className='p-3.5 mr-2.5'>

              <img
                src={dataCourses?.image}
                className='rounded-tl-3xl rounded-br-3xl overflow-hidden lg:h-60 object-cover lg:w-64'
                alt=""
              />

            </div>

            <div className='flex flex-col gap-2 px-2'>

              <span className='font-semibold text-2xl'>
                {dataCourses?.title}
              </span>

              <span className='text-lg text-blue-500'>
                <span
                  className={`${dark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                >
                  Instructor
                </span>
                : {dataCourses?.author}
              </span>

              <div>

                <div
                  className={`flex-row flex gap-2 text-sm ${dark ? 'text-gray-400' : 'text-gray-500'
                    }`}
                >

                  <div className='flex flex-row justify-center items-center rounded-3xlg'>
                    <RiStarSFill className='text-amber-300 text-3xl' />
                    <span>75,237 Reviews</span>
                  </div>

                  <div className='flex flex-row gap-2 items-center justify-center'>

                    <span className='flex flex-row text-yellow-600'>
                      4.4 Rating
                    </span>

                    <span className='flex flex-row gap-1 items-center'>
                      <FaPeopleGroup />
                      912,970 Students
                    </span>

                  </div>

                </div>
              </div>

              <span className='items-center flex flex-row gap-1 font-light'>
                <IoIosVideocam />
                16 Courses
              </span>

              <p
                className={`w-[90%] text-lg ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                {dataCourses?.author}is a brilliant educator, whose life was spent for computer science and love of nature.
              </p>

              <div
                className={`flex flex-row justify-center gap-1.5 pb-2.5 ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                <FaFacebookF className='p-2 cursor-pointer hover:text-blue-600 size-10' />
                <LuLinkedin className='p-2 cursor-pointer hover:text-blue-600 size-10' />
                <FaRegFaceGrinWink className='p-2 cursor-pointer hover:text-blue-600 size-10' />
                <CiTwitter className='p-2 cursor-pointer hover:text-blue-600 size-10' />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Review section */}

      <section
        id='Review'
        className='sec lg:w-[65%] mt-8 lg:mx-0  w-[100%] mx-auto flex flex-col items-cente pb-20'
      >

        <div
          className={`flex flex-col shadow-[0_0_2px_2px_#FF8904] w-[95%] mx-auto rounded-lg p-6 border ${dark
            ? 'bg-[#202c40] text-gray-100 border-gray-700 '
            : 'bg-white text-[#192335] border-gray-100 shadow-sm'
            }`}
        >

          {/* Header */}

          <div className='w-full mb-6'>

            <span
              className={`flex w-full border-b-2 font-bold pb-3 text-2xl ${dark
                ? 'border-gray-700 text-gray-100'
                : 'border-gray-100 text-slate-800'
                }`}
            >
              Review
            </span>

          </div>

          {/* Content Container */}

          <div className='flex flex-col md:flex-row gap-8 items-center md:items-start'>

            {/* Left Column (Course Rating Card) */}

            <div
              className={`flex flex-col items-center justify-center p-6 rounded-2xl min-w-[170px] ${dark
                ? 'bg-orange-500/10 text-orange-400'
                : 'bg-orange-50 text-orange-400'
                }`}
            >

              <span
                className={`text-center py-1 text-6xl font-bold ${dark ? 'text-gray-100' : 'text-slate-900'
                  }`}
              >
                5.0
              </span>

              <span className='flex flex-row text-xl gap-0.5 my-1'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </span>

              <span
                className={`w-full text-center text-sm font-medium mt-1 ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                Course Rating
              </span>

            </div>

            {/* Right Column (Progress Bars Breakdown) */}

            <div className='flex-1 w-full flex flex-col gap-3.5 justify-center'>

              {/* Row 5 Stars - 63% */}

              <div className='flex items-center gap-4 w-full'>

                <div className='flex flex-row text-orange-400 text-lg gap-0.5 w-[95px] shrink-0'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>

                <div
                  className={`h-2 w-full rounded-full overflow-hidden ${dark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                >
                  <div
                    className='bg-orange-500 h-full rounded-full'
                    style={{ width: '63%' }}
                  >
                  </div>
                </div>

                <span className='text-sm font-medium text-gray-400 w-8 text-right shrink-0'>
                  63%
                </span>

              </div>

              {/* Row 4 Stars - 29% */}

              <div className='flex items-center gap-4 w-full'>

                <div className='flex flex-row text-orange-400 text-lg gap-0.5 w-[95px] shrink-0'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />
                </div>

                <div
                  className={`h-2 w-full rounded-full overflow-hidden ${dark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                >
                  <div
                    className='bg-orange-500 h-full rounded-full'
                    style={{ width: '29%' }}
                  >
                  </div>
                </div>

                <span className='text-sm font-medium text-gray-400 w-8 text-right shrink-0'>
                  29%
                </span>

              </div>

              {/* Row 3 Stars - 6% */}

              <div className='flex items-center gap-4 w-full'>

                <div className='flex flex-row text-orange-400 text-lg gap-0.5 w-[95px] shrink-0'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />
                </div>

                <div
                  className={`h-2 w-full rounded-full overflow-hidden ${dark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                >
                  <div
                    className='bg-orange-500 h-full rounded-full'
                    style={{ width: '6%' }}
                  >
                  </div>
                </div>

                <span className='text-sm font-medium text-gray-400 w-8 text-right shrink-0'>
                  6%
                </span>

              </div>

              {/* Row 2 Stars - 1% */}

              <div className='flex items-center gap-4 w-full'>

                <div className='flex flex-row text-orange-400 text-lg gap-0.5 w-[95px] shrink-0'>
                  <RiStarSFill />
                  <RiStarSFill />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />
                </div>

                <div
                  className={`h-2 w-full rounded-full overflow-hidden ${dark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                >
                  <div
                    className='bg-orange-500 h-full rounded-full'
                    style={{ width: '1%' }}
                  >
                  </div>
                </div>

                <span className='text-sm font-medium text-gray-400 w-8 text-right shrink-0'>
                  1%
                </span>

              </div>

              {/* Row 1 Star - 1% */}

              <div className='flex items-center gap-4 w-full'>

                <div className='flex flex-row text-orange-400 text-lg gap-0.5 w-[95px] shrink-0'>

                  <RiStarSFill />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />

                  <RiStarSLine
                    className={`${dark ? 'text-gray-600' : 'text-gray-300'}`}
                  />

                </div>

                <div
                  className={`h-2 w-full rounded-full overflow-hidden ${dark ? 'bg-gray-700' : 'bg-gray-100'
                    }`}
                >
                  <div
                    className='bg-orange-500 h-full rounded-full'
                    style={{ width: '1%' }}
                  >
                  </div>
                </div>

                <span className='text-sm font-medium text-gray-400 w-8 text-right shrink-0'>
                  1%
                </span>

              </div>

            </div>
          </div>

        </div>

        <div
          className={`flex flex-col  w-[95%] mx-auto rounded-lg p-6 mt-8 border 
            shadow-[0_0_2px_2px_#FF8904]
             ${dark
            ? 'bg-[#202c40] text-gray-100 border-gray-700 '
            : 'bg-white text-[#192335] border-gray-100 shadow-sm'
            }`}
        >

          {/* Head */}

          <div className='w-full mb-6'>

            <span
              className={`flex w-full border-b-2 font-bold pb-3 text-2xl ${dark
                ? 'border-gray-700 text-gray-100'
                : 'border-gray-100 text-slate-800'
                }`}
            >
              Featured review
            </span>

          </div>

          {/* openione1 */}

          <div
            className={`flex sm:flex-row flex-col gap-2.5 border-b-2 pb-4 ${dark ? 'border-gray-700' : 'border-gray-200'
              }`}
          >

            {/* right */}

            <div>
              <img
                width={150}
                className='rounded-lg'
                src={testion1}
                alt=""
              />
            </div>

            {/* left */}

            <div className='pl-4'>

              <span className='text-2xl font-bold'>
                Sakib Al Hasan
              </span>

              <span className='flex flex-row text-orange-600 text-xl pt-2'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </span>

              <p
                className={`text-lg w-[90%] pt-2.5 ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
              </p>

              <div className='flex flex-row gap-2 pt-4'>

                <BiLike
                  className={`p-2.5 size-12 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full border transition-all duration-200 ${dark
                    ? 'text-gray-400 border-gray-700'
                    : 'text-gray-500 border-gray-100'
                    }`}
                />

                <BiDislike
                  className={`p-2.5 size-12 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full border transition-all duration-200 ${dark
                    ? 'text-gray-400 border-gray-700'
                    : 'text-gray-500 border-gray-100'
                    }`}
                />

              </div>

            </div>
          </div>

          {/* openione2 */}

          <div
            className={`flex sm:flex-row flex-col gap-2.5 border-b-2 pb-4 pt-5 ${dark ? 'border-gray-700' : 'border-gray-200'
              }`}
          >

            {/* right */}

            <div>
              <img
                width={150}
                className='rounded-lg'
                src={testion2}
                alt=""
              />
            </div>

            {/* left */}

            <div className='pl-4'>

              <span className='text-2xl font-bold cursor-pointer transition-all duration-200 hover:text-red-600'>
                Mohammad Ali
              </span>

              <span className='flex flex-row text-orange-600 text-xl pt-2'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </span>

              <p
                className={`text-lg w-[90%] pt-2.5 ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
              </p>

              <div className='flex flex-row gap-2 pt-4'>

                <BiLike
                  className={`p-2.5 size-12 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full border transition-all duration-200 ${dark
                    ? 'text-gray-400 border-gray-700'
                    : 'text-gray-500 border-gray-100'
                    }`}
                />

                <BiDislike
                  className={`p-2.5 size-12 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full border transition-all duration-200 ${dark
                    ? 'text-gray-400 border-gray-700'
                    : 'text-gray-500 border-gray-100'
                    }`}
                />

              </div>

            </div>
          </div>

          {/* openione3 */}

          <div
            className={`flex sm:flex-row flex-col gap-2.5 border-b-2 pb-4 pt-5 ${dark ? 'border-gray-700' : 'border-gray-200'
              }`}
          >

            {/* right */}

            <div>
              <img
                width={150}
                className='rounded-lg'
                src={testion4}
                alt=""
              />
            </div>

            {/* left */}

            <div className='pl-4'>

              <span className='text-2xl font-bold cursor-pointer transition-all duration-200 hover:text-red-600'>
                Babor Azom
              </span>

              <span className='flex flex-row text-orange-600 text-xl pt-2'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </span>

              <p
                className={`text-lg w-[90%] pt-2.5 ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                My favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
              </p>

              <div className='flex flex-row gap-2 pt-4'>

                <BiLike
                  className={`p-2.5 size-12 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full border transition-all duration-200 ${dark
                    ? 'text-gray-400 border-gray-700'
                    : 'text-gray-500 border-gray-100'
                    }`}
                />

                <BiDislike
                  className={`p-2.5 size-12 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full border transition-all duration-200 ${dark
                    ? 'text-gray-400 border-gray-700'
                    : 'text-gray-500 border-gray-100'
                    }`}
                />

              </div>

            </div>
          </div>

          {/* openione4 */}

          <div
            className={`flex sm:flex-row flex-col gap-2.5 border-b-2 pb-4 pt-5 ${dark ? 'border-gray-700' : 'border-gray-200'
              }`}
          >

            {/* right */}

            <div>
              <img
                width={150}
                className='rounded-lg'
                src={testion3}
                alt=""
              />
            </div>

            {/* left */}

            <div className='pl-4'>

              <span className='text-2xl font-bold cursor-pointer transition-all duration-200 hover:text-red-600'>
                Farjana Bawnia
              </span>

              <span className='flex flex-row text-orange-600 text-xl pt-2'>
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
                <RiStarSFill />
              </span>

              <p
                className={`text-lg w-[90%] pt-2.5 ${dark ? 'text-gray-400' : 'text-gray-500'
                  }`}
              >
                At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.
              </p>

              <div className='flex flex-row gap-2 pt-4'>

                <BiLike
                  className={`p-2.5 size-12 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full border transition-all duration-200 ${dark
                    ? 'text-gray-400 border-gray-700'
                    : 'text-gray-500 border-gray-100'
                    }`}
                />

                <BiDislike
                  className={`p-2.5 size-12 cursor-pointer hover:bg-blue-600 hover:text-white rounded-full border transition-all duration-200 ${dark
                    ? 'text-gray-400 border-gray-700'
                    : 'text-gray-500 border-gray-100'
                    }`}
                />

              </div>

            </div>
          </div>

        </div>

      </section>
    </section>
  )
}