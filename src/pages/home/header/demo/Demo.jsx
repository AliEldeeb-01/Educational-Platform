import { useEffect, useState } from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { PiHandWavingFill } from "react-icons/pi";
import { Link } from 'react-router-dom'
// import { DisplayContext } from '../../../../context/DisplayContext';
import egy from '../../../../assets/HiStudy/Flag_of_Egypt.svg.webp'
export default function Demo() {

  const [scrollY, setScrollY] = useState(0);


  useEffect(() => {

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (

    <section
      className={`z-50 w-full relative bg-[#192335] transition-all duration-300 ${scrollY >= 20
        ? 'hidden h-0 w-0 opacity-0'
        : 'block'
        }`}
    >

      <div className="container w-full mx-auto px-4">

        <div className="bg-[#192335] text-white justify-between min-h-10 items-center flex flex-col w-full lg:flex-row gap-4 py-2">

          {/* الجزء الأيسر */}

          <div className="flex flex-row gap-4">

            <span className="flex flex-row gap-1 items-center opacity-50 hover:opacity-100 transition duration-200 cursor-pointer">
              <FaInstagram />
              500K
            </span>

            <span className="flex flex-row gap-1 items-center opacity-50 hover:opacity-100 transition duration-200 cursor-pointer">
              <FaFacebook />
              100k
            </span>

            <Link to={'https://wa.me/201008455808?text=Hi,Are you ready to Develop now?'} className="flex flex-row gap-1 items-center opacity-50 hover:opacity-100 transition duration-200 cursor-pointer">
              <IoIosCall />
              +201008455808
            </Link>

          </div>


          {/* الجزء الأوسط */}

          <div className="items-center flex flex-row gap-2">

            <span className="px-2 py-0.5 bg-blue-600 text-white rounded-2xl text-[13px] font-bold">
              Hot
            </span>

            <span>
              <PiHandWavingFill className="text-amber-300 text-xl hover:text-amber-500 cursor-pointer" />
            </span>

            <span className="text-[12px] opacity-75">
              Intro price. Get Histudy for Big Sale -95% off.
            </span>

          </div>


          {/* الجزء الأيمن */}

          <div className="flex flex-row justify-center items-center gap-4">

            {/* Social Icons */}

            <div className="hidden sm:flex flex-row gap-1 border-e border-gray-700 pe-4">

              <div className="rounded-full opacity-50 hover:opacity-100 cursor-pointer p-2 hover:bg-[#3b4049]">
                <FaFacebook />
              </div>

              <div className="rounded-full opacity-50 hover:opacity-100 cursor-pointer p-2 hover:bg-[#3b4049]">
                <FaTwitter />
              </div>

              <div className="rounded-full opacity-50 hover:opacity-100 cursor-pointer p-2 hover:bg-[#3b4049]">
                <FaLinkedinIn />
              </div>

              <div className="rounded-full opacity-50 hover:opacity-100 cursor-pointer p-2 hover:bg-[#3b4049]">
                <FaInstagram />
              </div>

            </div>


            {/* اختيار اللغة الأصلي */}

            <div className="relative inline-block group cursor-pointer select-none">

              <div className="bg-[#192335] hidden flex-row justify-center items-center gap-1.5 text-white font-medium transition-all duration-200 px-2 py-1 rounded  lg:flex hover:text-amber-400">

                <img src={egy}
                  className=' rounded-2xl w-[50px] h-[30px] translate-y-1 '
                  alt="" />

                <span className="text-sm">
                  Egypt
                </span>



              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}