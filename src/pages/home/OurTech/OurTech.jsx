import React, { useContext } from 'react'
import team1 from '../../../assets/HiStudy/team-01.jpg'
import team2 from '../../../assets/HiStudy/team-02.jpg'
import team3 from '../../../assets/HiStudy/team-03.jpg'
import team4 from '../../../assets/HiStudy/team-04.jpg'
import team5 from '../../../assets/HiStudy/team-05.jpg'
import team6 from '../../../assets/HiStudy/team-06.jpg'

import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { DisplayContext } from '../../../context/DisplayContext'

export default function OurTech() {
  const { dark } = useContext(DisplayContext)
  return (
    <section className={` py-16 px-4 md:px-12 flex justify-center items-center flex-col gap-6 ${dark == true ?
      `bg-[#192335] text-gray-100 `
      : `bg-white text-[#192335]`}`}>

      <div className='flex flex-col gap-7 justify-center items-center'>
        <span className='py-1.5 px-7 text-sm  rounded-3xl bg-blue-100 text-blue-600 w-fit '> Our Teacher </span>
        <span className=' lg:text-5xl sm:text-4xl text-2xl font-bold'>Whose Inspirations You</span>
      </div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-7 gap-8 items-start">

        <div className="lg:col-span-4  rounded-2xl p-6 md:p-8 shadow-[0_0_1px_1px_#DCBF56] flex flex-col md:flex-row gap-8 items-center ">

          {/* الصورة الكبيرة */}
          <div className="w-full md:w-1/2 aspect-[4/5] rounded-xl overflow-hidden bg-gray-100">
            <img
              src={team1}
              alt="Mames Mary"
              className="w-full h-full object-cover"
            />
          </div>

          {/* تفاصيل المعلم */}
          <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-2">
            <div>
              <h2 className="text-3xl font-bold  mb-1">Mames Mary</h2>
              <p className="text-[#525fe1] font-semibold text-lg mb-3">English Teacher</p>

              {/* الموقع */}
              <div className="flex items-center gap-2 text-gray-400 text-sm mb-5">
                <FaMapMarkerAlt />
                <span>CO Miego, AD,USA</span>
              </div>

              {/* الوصف */}
              <p className="text-gray-500 leading-relaxed text-sm mb-6">
                Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.
              </p>

              {/* أيقونات التواصل الاجتماعي */}
              <div className="flex gap-3 mb-8">
                <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#525fe1] hover:text-white transition-all">
                  <FaFacebookF size={14} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#525fe1] hover:text-white transition-all">
                  <FaTwitter size={14} />
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#525fe1] hover:text-white transition-all">
                  <FaInstagram size={14} />
                </a>
              </div>
            </div>

            {/* بيانات الاتصال في الأسفل */}
            <div className="border-t border-gray-100 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-gray-400" size={13} />
                <span>+1-202-555-0174</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-gray-400" size={13} />
                <span className="truncate">example@gmail.com</span>
              </div>
            </div>
          </div>

        </div>


        <div className="grid grid-cols-3 lg:col-span-3 gap-4">

          <div className="relative  rounded-xl overflow-hidden cursor-pointer border-2 border-[#525fe1] shadow-md bg-gray-100">
            <img src={team1} alt="Team 1" className="w-full h-full object-cover" />

            <div className="absolute inset-0 bg-purple-500/30 flex items-center justify-center">
              <span className="text-white text-2xl font-light">↺</span>
            </div>
          </div>

          {/* الصورة 2 */}
          <div className="relative  rounded-xl overflow-hidden cursor-pointer border-transparent bg-gray-100 shadow-[0_0_2px_2px_#DCBF56] transition-all">
            <img src={team2} alt="Team 2" className="w-full h-full object-cover" />
          </div>

          {/* الصورة 3 */}
          <div className="relative  rounded-xl overflow-hidden cursor-pointer  border-transparent   shadow-[0_0_2px_2px_#DCBF56] transition-all">
            <img src={team3} alt="Team 3" className="w-full h-full object-cover" />
          </div>

          {/* الصورة 4 */}
          <div className="relative  rounded-xl overflow-hidden cursor-pointer  shadow-[0_0_2px_2px_#DCBF56] border-transparent  bg-gray-100 transition-all">
            <img src={team4} alt="Team 4" className="w-full h-full object-cover" />
          </div>

          {/* الصورة 5 */}
          <div className="relative  rounded-xl overflow-hidden cursor-pointer  shadow-[0_0_2px_2px_#DCBF56]border-transparent  bg-gray-100 transition-all">
            <img src={team5} alt="Team 5" className="w-full h-full object-cover" />
          </div>

          {/* الصورة 6 */}
          <div className="relative rounded-xl overflow-hidden cursor-pointer  shadow-[0_0_2px_2px_#DCBF56] border-transparent  bg-gray-100 transition-all">
            <img src={team6} alt="Team 6" className="w-full h-full object-cover" />
          </div>

        </div>

      </div>
    </section>
  )
}