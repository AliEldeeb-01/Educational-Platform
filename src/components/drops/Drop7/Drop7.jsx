import React, { useContext } from 'react'
import mcat from '../../../assets/HiStudy/mobile-cat.jpg'
import { DisplayContext } from '../../../context/DisplayContext'

export default function Drop7() {
  const { dark } = useContext(DisplayContext)
  return (
    /* 💡 الحاوية الرئيسية للميجا منيو:
       - absolute top-[100%] left-1/2 -translate-x-1/2 mt-5: لضمان السنترة تحت كلمة Blog.
       - w-[820px] grid-cols-[1.2fr_1.2fr_260px]: توزع الأعمدة النصية بشكل متناسق وتعطي الكارت مساحته المثالية.
    */
    <section className={`opacity-0 invisible group-hover/drop7:opacity-100 group-hover/drop7:visible absolute top-[100%] left-1/2 -translate-x-9/12  p-7 rounded-2xl border border-amber-400 shadow-2xl w-[820px] transition-all duration-300 ease-in-out grid grid-cols-[1.2fr_1.2fr_260px] gap-6 z-50 -translate-y-2  
      ${dark == true ?
        `bg-[#192335] text-white `
        : `bg-white text-black`}  `}>

      {/* ================= العمود الأول: BLOG STYLES ================= */}
      <div className="flex flex-col gap-4">
        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 pb-2">
          Blog Styles
        </h4>
        <ul className="flex flex-col gap-3 text-[14px] font-medium ">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Blog List</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Blog Grid</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Blog Grid Minimal</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Blog With Sidebar</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Blog Details</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Post Format Standard</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Post Format Gallery</li>
        </ul>
      </div>

      {/* ================= العمود الثاني: GET STARTED ================= */}
      <div className="flex flex-col gap-4">
        <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 pb-2">
          Get Started
        </h4>
        <ul className="flex flex-col gap-3 text-[14px] font-medium ">
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Post Format Quote</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Post Format Audio</li>
          <li className="hover:text-blue-600 cursor-pointer transition-colors">Post Format Video</li>

          <li className="hover:text-blue-600 cursor-pointer transition-colors flex items-center justify-between">
            <span>Media Under Title</span>
            <span className="bg-purple-100 text-purple-600 text-[9px] font-bold px-1.5 py-0.5 rounded">Coming</span>
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition-colors flex items-center justify-between">
            <span>Sticky Sidebar</span>
            <span className="bg-purple-100 text-purple-600 text-[9px] font-bold px-1.5 py-0.5 rounded">Coming</span>
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition-colors flex items-center justify-between">
            <span>Auto Masonry</span>
            <span className="bg-purple-100 text-purple-600 text-[9px] font-bold px-1.5 py-0.5 rounded">Coming</span>
          </li>

          <li className="hover:text-blue-600 cursor-pointer transition-colors flex items-center justify-between">
            <span>Meta Overlaid</span>
            <span className="bg-purple-100 text-purple-600 text-[9px] font-bold px-1.5 py-0.5 rounded">Coming</span>
          </li>
        </ul>
      </div>

      {/* ================= العمود الثالث: كارت الصورة الذكي ================= */}
      <div className="relative w-full h-[275px] rounded-2xl overflow-hidden group/card cursor-pointer ">


        <img
          src={mcat}
          alt="Grow Your Skill"
          className="w-full  h-full object-cover rounded-[20px] shadow-[0_10px_30px_rgba(0,0,0,0,08)] transition-transform duration-700 group-hover/card:scale-102"
        />


      </div>

    </section>
  )
}
