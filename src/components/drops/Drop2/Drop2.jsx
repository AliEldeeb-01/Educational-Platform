import React, { useContext } from 'react'

// عمل Import للـ 26 صورة
import h1 from '../../../assets/HiStudy/h1.jpg'
import h2 from '../../../assets/HiStudy/h2.jpg'
import h3 from '../../../assets/HiStudy/h3.jpg'
import h4 from '../../../assets/HiStudy/h4.jpg'
import h5 from '../../../assets/HiStudy/h5.jpg'
import h6 from '../../../assets/HiStudy/h6.jpg'
import h7 from '../../../assets/HiStudy/h7.jpg'
import h8 from '../../../assets/HiStudy/h8.jpg'
import h9 from '../../../assets/HiStudy/h9.jpg'
import h10 from '../../../assets/HiStudy/h10.jpg'
import h11 from '../../../assets/HiStudy/h11.jpg'
import h12 from '../../../assets/HiStudy/h12.jpg'
import h13 from '../../../assets/HiStudy/h13.jpg'
import h14 from '../../../assets/HiStudy/h14.jpg'
import h15 from '../../../assets/HiStudy/h15.jpg'
import h16 from '../../../assets/HiStudy/h16.jpg'
import h17 from '../../../assets/HiStudy/h17.jpg'
import h18 from '../../../assets/HiStudy/h18.jpg'
import h19 from '../../../assets/HiStudy/h19.jpg'
import h20 from '../../../assets/HiStudy/h20.jpg'
import h21 from '../../../assets/HiStudy/h21.jpg'
import h22 from '../../../assets/HiStudy/h22.jpg'
import h23 from '../../../assets/HiStudy/h23.jpg'
import h24 from '../../../assets/HiStudy/h24.jpg'
import h25 from '../../../assets/HiStudy/h25.jpg'
import h26 from '../../../assets/HiStudy/h26.jpg'
import Navbar from '../../../pages/home/header/nav/Navbar'
import { Link } from 'react-router-dom'
import { DisplayContext } from '../../../context/DisplayContext'

export default function Drop2({ isHandle, setIsHandle }) {
  const { dark } = useContext(DisplayContext)
  console.log(dark);

  const demoImages = [
    { img: h1, title: "Home Demo 1" }, { img: h2, title: "Home Demo 2" },
    { img: h3, title: "Home Demo 3" }, { img: h4, title: "Home Demo 4" },
    { img: h5, title: "Home Demo 5" }, { img: h6, title: "Home Demo 6" },
    { img: h7, title: "Home Demo 7" }, { img: h8, title: "Home Demo 8" },
    { img: h9, title: "Home Demo 9" }, { img: h10, title: "Home Demo 10" },
    { img: h11, title: "Home Demo 11" }, { img: h12, title: "Home Demo 12" },
    { img: h13, title: "Home Demo 13" }, { img: h14, title: "Home Demo 14" },
    { img: h15, title: "Home Demo 15" }, { img: h16, title: "Home Demo 16" },
    { img: h17, title: "Home Demo 17" }, { img: h18, title: "Home Demo 18" },
    { img: h19, title: "Home Demo 19" }, { img: h20, title: "Home Demo 20" },
    { img: h21, title: "Home Demo 21" }, { img: h22, title: "Home Demo 22" },
    { img: h23, title: "Home Demo 23" }, { img: h24, title: "Home Demo 24" },
    { img: h25, title: "Home Demo 25" }, { img: h26, title: "Home Demo 26" }
  ];

  return (
    /* 💡 التركيز هنا بالظبط:
      1. تحويل لـ fixed top-[78px] مع left-1/2 -translate-x-1/2: عشان تتسنتر تماماً في منتصف شاشة العرض بدون انحياز.
      2. الترانزيشن الشفاف الثابت: before:top-[-40px] before:h-[40px] قفل الفراغ برمجياً وبكفاءة عالية زي الكاتيجوري تماماً.
    */
    <section className={`opacity-0 invisible group-hover/home:opacity-100 group-hover/home:visible fixed  left-1/2 -translate-x-1/2 ${dark == true ?
      `bg-[#162456] text-blue-200`
      : `bg-[#F0F5FA] text-black`}
       p-6 rounded-2xl border border-amber-500 shadow-2xl lg:w-[1000px] xl:w-[1140px] max-h-[500px] overflow-y-auto z-50 transition-all duration-300 ease-in-out grid grid-cols-5 gap-6 before:absolute before:top-[-40px] before:left-0 before:w-full before:h-[40px] translate-y-11 before:content-[''] ${isHandle == true ?
        `top-[35px]` :
        `top-[78px]`} `}>

      {demoImages.map((item, index) => (
        <div
          key={index}
          className="group/card flex flex-col gap-2 cursor-pointer items-center text-center"
        >
          {/* كارت الصورة */}
          <Link to={'/'} className={`overflow-hidden rounded-xl border border-gray-100 shadow-sm bg-white transition-all duration-300 ease-out
                          group-hover/card:-translate-y-2 group-hover/card:shadow-lg`}>
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-auto object-cover"
            />
          </Link>

          {/* النص أسفل الصورة (معدلناش أي حاجة في حركته) */}
          <span className="text-[13px] font-semibold text-gray-700 px-1 opacity-0 translate-y-2 transition-all duration-300 ease-out
                           group-hover/card:opacity-100 group-hover/card:translate-y-0 group-hover/card:text-blue-400">
            {item.title}
          </span>
        </div>
      ))}

    </section>
  )
}