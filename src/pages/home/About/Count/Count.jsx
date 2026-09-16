import React, { useContext } from 'react';
import counter1 from '../../../../assets/HiStudy/counter-01.png';
import counter2 from '../../../../assets/HiStudy/counter-02.png';
import counter3 from '../../../../assets/HiStudy/counter-03.png';
import counter4 from '../../../../assets/HiStudy/counter-04.png';
import { useInView } from "react-intersection-observer"
import * as CountUpModule from 'react-countup';
import { DisplayContext } from '../../../../context/DisplayContext';

export default function Count() {
  const { dark } = useContext(DisplayContext)

  const { inView, ref } = useInView(
    {
      threshold: 1,
      triggerOnce: true,
    }
  )

  const CountUp = CountUpModule.default.default

  // console.log(CountUp);




  return (
    <section className={`py-24 
      ${dark == true ?
        `bg-[#192335] text-gray-100 `
        : `bg-white text-[#192335]`} flex-col min-h-screen flex items-center justify-center overflow-hidden`}>
      <div className='items-center flex flex-col gap-3 mb-16 sm:mb-25 '>
        <span className='bg-blue-100 text-blue-600 p-3 rounded-3xl'> Why Choose Us </span>
        <p className='font-bold lg:text-6xl md:text-4xl text-3xl w-[60%] text-center'>
          Creating A Community Of Life Long Learners.
        </p>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative" ref={ref}>
        {inView &&
          <div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-16">
              <div className="absolute -top-16 left-0 right-0 hidden lg:block z-10">
                <div className="absolute top-[7px] left-[12.5%] right-[12.5%] h-[2px] bg-[#5A79F0] z-0" />


                <div className="grid grid-cols-4 w-full">


                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#5A79F0] shadow-sm flex-shrink-0"></div>
                    <div className="w-[2px] h-16 bg-[#5A79F0]"></div>
                  </div>

                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#5A79F0] shadow-sm flex-shrink-0"></div>
                    <div className="w-[2px] h-16 bg-[#5A79F0]"></div>
                  </div>

                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#5A79F0] shadow-sm flex-shrink-0"></div>
                    <div className="w-[2px] h-16 bg-[#5A79F0]"></div>
                  </div>

                  <div className="flex flex-col items-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-white border-[3px] border-[#5A79F0] shadow-sm flex-shrink-0"></div>
                    <div className="w-[2px] h-16 bg-[#5A79F0]"></div>
                  </div>

                </div>
              </div>


              {/* ------------------- الكارت الأول ------------------- */}
              <div className="  -translate-y-5 relative flex flex-col items-center group">
                <div className="w-full shadow-[0_0_2px_2px_#DCBF56] rounded-xl p-8 pt-12 border border-gray-100/70 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] active:translate-y-[-4px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] active:shadow-[0_15px_35px_rgba(0,0,0,0.06)] z-20 min-h-[280px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-18 border-b border-dashed border-gray-200/80 rounded-b-full bg-[#F5F5F9]/60 z-0"></div>
                  <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-50/60 mb-6">
                    <img src={counter1} alt="Learners & counting" className="w-11 h-11 object-contain" />
                  </div>
                  <h3 className="relative z-10 text-3xl font-extrabold  mb-2 tracking-tight">
                    <CountUp start={0} end={500} duration={3} />+
                  </h3>
                  <p className="relative z-10 text-sm font-medium text-[#6B6F80] max-w-[150px] leading-relaxed">Learners & counting</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#7052FB] to-[#4E76F7]"></div>
                </div>
              </div>

              {/* ------------------- الكارت الثاني ------------------- */}
              <div className=" relative flex flex-col items-center group">
                <div className="w-full shadow-[0_0_2px_2px_#DCBF56] rounded-xl p-8 pt-12  border border-gray-100/70 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] active:translate-y-[-4px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] active:shadow-[0_15px_35px_rgba(0,0,0,0.06)] z-20 min-h-[280px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-18 border-b border-dashed border-gray-200/80 rounded-b-full bg-[#F5F5F9]/60 z-0"></div>
                  <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-50/60 mb-6">
                    <img src={counter2} alt="Courses & Video" className="w-11 h-11 object-contain" />
                  </div>
                  <h3 className="relative z-10 text-3xl font-extrabold  mb-2 tracking-tight">
                    <CountUp start={0} end={800} duration={3} />+
                  </h3>
                  <p className="relative z-10 text-sm font-medium text-[#6B6F80] max-w-[150px] leading-relaxed">Courses & Video</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#7052FB] to-[#4E76F7]"></div>
                </div>
              </div>

              {/* ------------------- الكارت الثالث ------------------- */}
              <div className=" -translate-y-5 relative flex flex-col items-center group">
                <div className="w-full  rounded-xl p-8 pt-12 shadow-[0_0_2px_2px_#DCBF56] border border-gray-100/70 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] active:translate-y-[-4px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] active:shadow-[0_15px_35px_rgba(0,0,0,0.06)] z-20 min-h-[280px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-18 border-b border-dashed border-gray-200/80 rounded-b-full bg-[#F5F5F9]/60 z-0"></div>
                  <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-50/60 mb-6">
                    <img src={counter3} alt="Certified Students" className="w-11 h-11 object-contain" />
                  </div>
                  <h3 className="relative z-10 text-3xl font-extrabold  mb-2 tracking-tight"><CountUp start={0} end={1000} duration={3} />+</h3>
                  <p className="relative z-10 text-sm font-medium text-[#6B6F80] max-w-[150px] leading-relaxed">Certified Students</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#7052FB] to-[#4E76F7]"></div>
                </div>
              </div>

              {/* ------------------- الكارت الرابع ------------------- */}
              <div className="sh relative flex flex-col items-center group">
                <div className="w-full shadow-[0_0_2px_2px_#DCBF56]  rounded-xl p-8 pt-12  border border-gray-100/70 flex flex-col items-center text-center relative overflow-hidden transition-all duration-300 hover:translate-y-[-4px] active:translate-y-[-4px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] active:shadow-[0_15px_35px_rgba(0,0,0,0.06)] z-20 min-h-[280px]">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-18 border-b border-dashed border-gray-200/80 rounded-b-full bg-[#F5F5F9]/60 z-0"></div>
                  <div className="relative z-10 w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-50/60 mb-6">
                    <img src={counter4} alt="Registered Enrolls" className="w-11 h-11 object-contain" />
                  </div>
                  <h3 className="relative z-10 text-3xl font-extrabold  mb-2 tracking-tight"><CountUp start={0} end={100} duration={3} />+</h3>
                  <p className="relative z-10 text-sm font-medium text-[#6B6F80] max-w-[150px] leading-relaxed">Registered Enrolls</p>
                  <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#7052FB] to-[#4E76F7]"></div>
                </div>
              </div>

            </div>

          </div>
        }
      </div>
    </section>
  );
}