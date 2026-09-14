import React, { useContext } from 'react';
import cardIcon from '../../assets/HiStudy/card-icon-1.png';
// import user from '../../assets/HiStudy/avatar.jpg';
import { AuthContext } from '../../context/supabaseContext';
import { FcConferenceCall } from "react-icons/fc";
import { FaReact, FaStudiovinari } from 'react-icons/fa';
// import { DiVisualstudio } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { RiBookShelfLine } from "react-icons/ri";
import { GiBookshelf } from "react-icons/gi";
import { GoChevronRight } from "react-icons/go";
import { DisplayContext } from '../../context/DisplayContext';


export default function Profile() {

  const { currentUser, setCurrentUser, logOut } = useContext(AuthContext)
  const Navigate = useNavigate()
  const { dark } = useContext(DisplayContext)


  return (

    <section className={`${dark?`bg-[#1B2732]`:`bg-slate-50`} min-h-screen mt-14 py-8 px-4 sm:px-6 lg:px-8 font-sans`}>
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Banner Card Section */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#2B1B54] via-[#4A2B82] to-[#6A3EA1] text-white p-6 sm:p-10 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">

          {/* Decorative Leaf Overlay (Left & Right) */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

          {/* Left Info Column */}
          <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
            {/* Tagline */}
            <span className="text-xs uppercase tracking-widest text-purple-200 font-semibold">
              Your account in our site
            </span>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white uppercase flex gap-2 items-center">
              Learn With US
              <FcConferenceCall />
            </h1>

            {/* Pill Tags */}
            <div className="inline-block bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              Work - Travel - Lifestyle
            </div>

            {/* User Meta Row */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <img
                src={currentUser?.image}
                alt="John Due"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white/30 object-cover shadow-md"
              />
              <div className="flex flex-col items-center sm:items-start">
                <h2 className="text-xl font-bold text-white uppercase">{currentUser?.firstName}</h2>

                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 text-sm mt-1">
                  <span><GiBookshelf /> </span><span><RiBookShelfLine /> </span><span><FaReact /></span><span><FaBootstrap /></span><span><SiTailwindcss /></span>
                  <span className="text-xs text-blue-200 ml-1 flex flex-col ">
                    <span>( Learn simply and easily. )</span>
                  </span>
                </div>
                <Link to={'/shop'} className=' p-1 text-[16px] cursor-pointer hover:text-blue-500 duration-200 transition-all flex items-center gap-0.5 '>
                  <GoChevronRight />
                  Shop Books</Link>
                <Link to={'/shopCourses'} className=' p-1 text-[16px] cursor-pointer hover:text-blue-500 duration-200 transition-all flex items-center gap-0.5 '>
                  <GoChevronRight />
                  Shop Courses</Link>

                {/* Stats
                <div className="flex items-center gap-4 text-xs text-purple-200 mt-2">
                  <span className="flex items-center gap-1">
                    📖 20 Courses
                  </span>
                  <span className="flex items-center gap-1">
                    👥 40 Students
                  </span>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="z-10 relative flex-shrink-0 w-full max-w-sm lg:max-w-md flex justify-center">
            <img
              src={currentUser?.image}
              alt="Instructor"
              className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-2xl shadow-2xl border-2 border-white/10"
            />
          </div>
        </div>

        {/* Biography Card Section */}
        <div className=" shadow-[0_0_2px_2px_#FE8601] rounded-2xl p-6 sm:p-8  border border-amber-100 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

          {/* Bio Details */}
          <div className="space-y-4 max-w-2xl ">
            <h3 className="text-lg font-bold text-blue-700">Biography</h3>
            <p className="text-sm leading-relaxed capitalize text-blue-400">
              Learn to code. Build real projects. Grow your skills.

              We provide high-quality programming courses designed to turn learners into confident developers, alongside a dedicated bookstore featuring books that support continuous learning and professional growth.

              Your journey from learning to building starts here.
            </p>

            {/* Social Icons Placeholder */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#facebook" className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold">f</a>
              <a href="#twitter" className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold">t</a>
              <a href="#instagram" className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold">in</a>
              <a href="#linkedin" className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold">li</a>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-xs text-gray-500 pt-2 border-t border-gray-100">
              <span>📞 {currentUser?.phone}</span>
              <span>✉️ {currentUser?.email}</span>
            </div>
          </div>

          {/* Bestseller Badge Box */}
          <div className="w-full lg:w-48 h-32 bg-purple-50 rounded-xl border border-purple-100 flex flex-col items-center justify-center gap-2 p-4 flex-shrink-0">
            <img src={cardIcon} alt="Badge Icon" className="w-10 h-10 object-contain" />
            <span className="text-sm font-semibold text-purple-900">Bestseller</span>
          </div>

        </div>

        <div className=' '>
          <button
            onClick={() => logOut()}
            className=' cursor-pointer transition-all duration-300  p-5 rounded-2xl scale-95 hover:scale-100 hover:bg-red-600 hover:text-red-100 bg-red-100 text-red-600 '> Log Out</button>
        </div>

      </div>
    </section>
  );
}