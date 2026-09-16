import React, { useContext } from 'react'
import { DisplayContext } from '../../../context/DisplayContext';

export default function Drop4() {
  const instructorItems = [
    "Dashboard", "Profile", "Enrolled Courses", "Wishlist", "Reviews",
    "My Quiz Attempts", "Order History", "My Course", "Announcements",
    "Quiz Attempts", "Assignments", "Settings"
  ];

  const studentItems = [
    "Dashboard", "Student Profile", "Enrolled Courses", "Wishlist", "Reviews",
    "My Quiz Attempts", "Order History", "Quiz Attempts", "Settings"
  ];

  const { dark } = useContext(DisplayContext)
  return (

    <section
      className={`  
      ${dark == true ?
          `bg-[#192335] text-white `
          : `bg-white text-black`}    opacity-0 invisible group-hover/drop4:opacity-100 group-active/drop4:opacity-100 group-hover/drop4:visible group-active/drop4:visible absolute top-[100%] left-0  py-3 -translate-y-0.5 rounded-xl border border-amber-500 shadow-xl w-[220px] transition-all duration-300 ease-in-out z-50 flex flex-col
    `}>


      <div className="group/sub relative px-4 py-2.5 hover:bg-blue-950 active:bg-blue-950 hover:text-blue-400 active:text-blue-400 font-medium text-[14px] cursor-pointer flex items-center justify-between transition-colors">
        <span>Instructor Dashboard</span>
        <span className="text-gray-400 text-[12px]">&rarr;</span>

        <div className="opacity-0 invisible group-hover/sub:opacity-100 group-active/sub:opacity-100 group-hover/sub:visible group-active/sub:visible absolute top-0 left-[100%] pl-2 w-[240px] transition-all duration-200 ease-in-out">
          <ul className={`  ${dark == true ?
            `bg-[#192335] text-white `
            : `bg-white text-black`}  py-3 rounded-xl border border-gray-100 shadow-2xl flex flex-col gap-1.5`}>
            {instructorItems.map((item, index) => (
              <li
                key={index}
                className="px-5 py-1.5 hover:text-blue-600 active:text-blue-600 hover:bg-gray-50 active:bg-gray-50 text-[14px] font-medium transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`group/sub relative px-4 py-2.5  
      ${dark == true ?
            `bg-[#192335] text-white `
            : `bg-white text-black`}  hover:bg-blue-950 active:bg-blue-950 hover:text-blue-400 active:text-blue-400 font-medium text-[14px] cursor-pointer flex items-center justify-between transition-colors`}>
        <span>Student Dashboard</span>
        <span className="text-gray-400 text-[12px]">&rarr;</span>

        <div className={`opacity-0 invisible group-hover/sub:opacity-100 group-active/sub:opacity-100 group-hover/sub:visible group-active/sub:visible absolute top-0 left-[100%] pl-2 w-[240px] transition-all duration-200 ease-in-out
           `}>
          <ul className={` py-3 rounded-xl border border-gray-100 shadow-2xl flex flex-col gap-1.5  ${dark == true ?
            `bg-[#192335] text-white `
            : `bg-white text-black`}`}>
            {studentItems.map((item, index) => (
              <li
                key={index}
                className="px-5 py-1.5 hover:text-blue-600 active:text-blue-600 hover:bg-gray-50 active:bg-gray-50 text-[14px] font-medium transition-colors cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </section>
  )
}
