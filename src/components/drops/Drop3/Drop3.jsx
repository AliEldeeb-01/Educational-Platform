import React, { useContext } from 'react'
import img from '../../../assets/HiStudy/category-10.png'
import { Link } from 'react-router-dom'
import Details from '../../../pages/CourseDetails/Details'
import { DisplayContext } from '../../../context/DisplayContext'

export default function Drop3() {
  const { dark } = useContext(DisplayContext)
  return (

    <section className={`opacity-0 invisible group-hover/drop3:opacity-100 group-active/drop3:opacity-100 group-hover/drop3:visible group-active/drop3:visible absolute top-[100%] left-1/2 -translate-x-1/2 mt-[18px]
       ${dark == true ?
       `bg-[#192335] text-gray-200 `
       :`bg-white text-black`} rounded-2xl border border-amber-500 shadow-2xl w-[420px] transition-all duration-300 ease-in-out flex flex-col overflow-hidden z-50 -translate-y-5`}>

      <div className="relative w-full h-[160px] overflow-hidden">
        <img
          src={img}
          alt="Developer Hub"
          className="w-full h-full object-cover"
        />

        {/* نصوص الـ absolute الموزعة فوق الصورة بالملي */}
        <div className="absolute inset-0 p-5 flex flex-col justify-start ">
          <span className="text-[11px] font-bold uppercase tracking-wider ">
            Developer hub
          </span>
          <h3 className="text-[14px] font-bold mt-1.5 leading-snug max-w-[280px]">
            Start building fast, with code samples, key resources and more.
          </h3>
        </div>
      </div>

      {/* الحاوية الداخلية للقوائم عشان الـ padding يكون متناسق */}
      <div className="p-5 flex flex-col gap-5">

        {/* ================= 2. الديف الثاني: القائمة الأولى (Course Layout) ================= */}
        <div className="flex flex-col gap-3">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
            Course Layout
          </h4>

          {/* تقسيم الـ Layout لعمودين تحت العنوان بالظبط */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-[13px] font-medium ">
            {/* العمود الشمال */}
            <div className="flex flex-col gap-2.5">
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Filter One Toggle</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Filter One Open</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Filter Two Toggle</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Filter Two Open</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Course With Tab</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Course With Tab Two</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Course Card Two</span>
            </div>

            {/* العمود اليمين */}
            <div className="flex flex-col gap-2.5">
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Course Card Three</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Course Masonry</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Course With Sidebar</span>
              <Link to={"Details"} className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Course Details</Link>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors">Course Details Two</span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors flex items-center justify-between">
                <span>Course Lesson</span>
                <span className="bg-purple-100 text-purple-600 text-[9px] font-bold px-1.5 py-0.5 rounded">New</span>
              </span>
              <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors flex items-center justify-between">
                <span>Create Course</span>
                <span className="bg-purple-100 text-purple-600 text-[9px] font-bold px-1.5 py-0.5 rounded">New</span>
              </span>
            </div>
          </div>
        </div>

        {/* خط فاصل رمادي خفيف جداً بين الديف التاني والتالت زي التصميم */}
        <div className="h-[1px]  w-full" />

        {/* ================= 3. الديف الثالث: المقسم من جوة لاتنين ديف صغيرين بالظبط ================= */}
        <div className="grid grid-cols-2 gap-4 text-[13px] font-medium  pb-1">
          {/* الديف الصغير على الشمال */}
          <div className="flex flex-col gap-3">
            <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
              📂 Quick Start Guide
            </span>
            <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
              💻 API Status
            </span>
          </div>

          {/* الديف الصغير على اليمين */}
          <div className="flex flex-col gap-3">
            <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
              📂 For Open Source
            </span>
            <span className="hover:text-blue-400 active:text-blue-400 cursor-pointer transition-colors flex items-center gap-2">
              💬 Support
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}