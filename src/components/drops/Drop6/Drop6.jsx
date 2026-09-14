import React, { useContext } from 'react'
import { DisplayContext } from '../../../context/DisplayContext'

export default function Drop6() {
  const { dark } = useContext(DisplayContext)
  return (
    /* 💡 الحاوية الرئيسية (Mega Menu):
       - absolute top-[100%] left-1/2 -translate-x-1/2 mt-5: لضمان السنترة العبقرية تحت كلمة Elements.
       - w-[780px]: عرض مثالي ومطابق لأبعاد المنيو في الصورة.
       - flex flex-col: عشان نقسم المنيو لجزء علوي (الأعمدة) وجزء سفلي (البار البنفسجي).
    */
    <section className={` opacity-0 invisible group-hover/drop6:opacity-100 group-hover/drop6:visible absolute top-[100%] left-1/2 -translate-x-2/3 rounded-2xl border border-amber-400 shadow-2xl w-[780px] transition-all translate-y-6 duration-300 ease-in-out flex flex-col overflow-hidden z-50 
      ${dark == true ?
        `bg-[#192335] text-white `
        : `bg-white text-black`} `}>

      {/* ================= الجزء العلوي: شبكة الأعمدة الثلاثة ================= */}
      <div className="grid grid-cols-3 gap-8 p-7">

        {/* العمود الأول */}
        <ul className="flex flex-col gap-3 text-[14px] font-medium ">
          <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between">
            <span>Style Guide</span>
            <span className="bg-pink-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">Hot</span>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Accordion</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Advance Tab</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors flex items-center justify-between">
            <span>About</span>
            <span className="bg-blue-100 text-blue-600 text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">New</span>
          </li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Brand</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Button</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Badge</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Card</li>
          <li className="text-blue-400 cursor-default text-[13px] font-normal italic">&amp; More Coming</li>
        </ul>

        {/* العمود الثاني */}
        <ul className="flex flex-col gap-3 text-[14px] font-medium ">
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Call To Action</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Counter</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Categories</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Header Style</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Newsletter</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Team</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Social</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">List Style</li>
          <li className="text-gray-400 cursor-default text-[13px] font-normal italic">&amp; More Coming</li>
        </ul>

        {/* العمود الثالث */}
        <ul className="flex flex-col gap-3 text-[14px] font-medium ">
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Gallery</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Pricing</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Progressbar</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Testimonial</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Service</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Split Area</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Search Style</li>
          <li className="hover:text-blue-400 cursor-pointer transition-colors">Instagram Style</li>
          <li className="text-gray-400 cursor-default text-[13px] font-normal italic">&amp; More Coming</li>
        </ul>

      </div>

      {/* ================= الجزء السفلي: البار الملون الجيراديانت العريض ================= */}
      <a
        href="#visit-template"
        className=" bg-indigo-700 transition-all duration-300 hover:text-blue-800 hover:bg-amber-500  text-white text-[14px] font-bold py-3.5 w-full flex items-center justify-center gap-2  group/btn"
      >
        <span>Visit Histudy Template</span>
        <span className="transition-transform duration-300 ">&rarr;</span>
      </a>

    </section>
  )
}