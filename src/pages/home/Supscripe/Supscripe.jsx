import React, { useContext } from 'react'

import * as CountUpModule from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { DisplayContext } from '../../../context/DisplayContext';

export default function Supscripe() {
  const { dark } = useContext(DisplayContext)

  const { ref, inView } = useInView(
    {
      triggerOnce: true,
      threshold: 1,
    }
  )
  const CountUp = CountUpModule.default.default

  return (
    <div ref={ref}>
      {inView &&
        <section className={`relative py-20
        ${!dark ? `bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-700 text-white` : 'bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white'}  overflow-hidden`}>
          {/* تأثير النقاط الخلفية البسيطة (لو متوفرة عندك كصورة أو بالـ CSS) */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_2px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="relative container mx-auto px-4 max-w-4xl text-center z-10">

            {/* Badge العلوي */}
            <span className="inline-block bg-white/20 text-white text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
              Get Latest Histudy Update
            </span>

            {/* العنوان الرئيسي */}
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
              Subscribe Our Newsletter
            </h2>

            {/* الوصف */}
            <p className="text-blue-100 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam explicabo sit est eos
              earum reprehenderit inventore nam autem corrupti rerum!
            </p>

            {/* فورمة إدخال الإيميل */}
            <div className="max-w-2xl mx-auto mb-4">
              <form className="bg-white p-2 rounded-xl shadow-lg flex items-center justify-between w-full">
                <input
                  type="email"
                  placeholder="Enter Your E-Mail"
                  className="w-full px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none rounded-lg text-sm md:text-base"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-500 text-white px-6 md:px-8 py-3 rounded-lg font-bold text-sm md:text-base flex items-center gap-2 hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  Subscribe <span>&rarr;</span>
                </button>
              </form>
            </div>

            {/* نص الملاحظة الصغير أسفل الإدخال */}
            <p className="text-xs text-blue-200/80 mb-16">
              No ads, No trails, No commitments
            </p>

            {/* خط الفصل والإحصائيات */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-white/20 relative">
              {/* الخط العمودي الفاصل في الشاشات الكبيرة */}
              <div className="hidden md:block absolute top-10 bottom-0 left-1/2 w-[1px] bg-white/20"></div>

              {/* الإحصائية الأولى */}
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-black tracking-tight mb-2"><CountUp start={0} end={500} duration={3} />+</span>
                <h4 className="text-lg font-bold text-white mb-1">Successfully Trained</h4>
                <p className="text-sm text-blue-200">Learners & counting</p>
              </div>

              {/* الإحصائية الثانية */}
              <div className="flex flex-col items-center">
                <span className="text-5xl md:text-6xl font-black tracking-tight mb-2"><CountUp start={0} end={100} duration={3} />+</span>
                <h4 className="text-lg font-bold text-white mb-1">Certification Students</h4>
                <p className="text-sm text-blue-200">Online Course</p>
              </div>
            </div>

          </div>
        </section>
      }
    </div>
  )
}