import React, { useContext } from 'react'
import logo1 from '../../assets/HiStudy/logo.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight, FiArrowUp } from 'react-icons/fi'
import { IoMoonOutline } from 'react-icons/io5'
import { DisplayContext } from '../../context/DisplayContext'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/supabaseContext'

export default function Footer() {
  const navigate = useNavigate()
  const { dark } = useContext(DisplayContext)
  // const { currentUser } = useContext(AuthContext)
  return (
    <footer
      className={`
      ${dark == true ?
          `bg-[#192335] text-blue-200 `
          : `bg-white text-[#192335]`}
          pt-16 pb-6  font-sans `}>

      <div className="container mx-auto px-4 max-w-[1200px]">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

          <div className="flex flex-col items-start gap-5">
            <img src={logo1} alt="HiStudy Logo" className="h-10 object-contain" />
            <p className="text-[#6b7280] text-[15px] leading-relaxed max-w-[280px]">
              We're always in search for talented and motivated people. Don't be shy introduce yourself!
            </p>
            <span>Call me on Whatsapp :</span>
            <Link
              to={'https://wa.me/201008455808?text=Hi,Are you ready to Develop now?!..'} className="group relative flex items-center gap-2 px-6 py-3 rounded-full border border-gradient-to-r text-[15px] font-medium  overflow-hidden border-[#e2e8f0] hover:border-[#2f57ef] active:border-[#2f57ef] transition-all duration-300 group ">
              Contact With Us On <FaWhatsapp className=' size-fit' />
              <FiArrowRight className="text-lg   group-hover:translate-x-1 group-active:translate-x-1 transition-all duration-300 group-hover:rotate-180 group-active:rotate-180 " />

            </Link>
            
          </div>

          {/* Useful Links  */}
          <div>
            <h4 className="text-[17px] font-bold mb-6 ">Useful Links</h4>
            <ul className="flex flex-col gap-3.5 text-[15px] text-[#6b7280]">
              {['Marketplace', 'kindergarten', 'University', 'GYM Coaching', 'FAQ'].map((link) => (
                <li key={link}>
                  <a href="#" className="relative inline-block pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2f57ef] after:transition-all after:duration-300 hover:after:w-full active:after:w-full hover:text-[#2f57ef] active:text-[#2f57ef] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*  Our Company */}
          <div>
            <h4 className="text-[17px] font-bold mb-6 ">Our Company</h4>
            <ul className="flex flex-col gap-3.5 text-[15px] text-[#6b7280]">
              {['Contact Us', 'Become Teacher', 'Blog', 'Instructor', 'Events'].map((link) => (
                <li key={link}>
                  <a href="#" className="relative inline-block pb-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#2f57ef] after:transition-all after:duration-300 hover:after:w-full active:after:w-full hover:text-[#2f57ef] active:text-[#2f57ef] transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*  Get Contact */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[17px] font-bold mb-2 ">Contact The Developer:</h4>
            <p className="text-[15px] text-[#6b7280]">
              Phone: <span className=" hover:text-[#2f57ef] active:text-[#2f57ef] cursor-pointer transition-colors">01008455808</span>
            </p>
            <p className="text-[15px] text-[#6b7280]">
              E-mail: <span className=" hover:text-[#2f57ef] active:text-[#2f57ef] cursor-pointer transition-colors">creativeyoung960@gmail.com</span>
            </p>
            <p className="text-[15px] text-[#6b7280]">
              Location: <span className="">EGYPT</span>
            </p>

            <div className="flex items-center gap-4 mt-2">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <div className=' flex flex-row'>
                  <a

                    key={index} href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-[#f5f7fa] text-[#6b7280] hover:bg-[#2f57ef] active:bg-[#2f57ef] hover:text-white active:text-white transition-all duration-300 text-sm">
                    <Icon />

                  </a>


                </div>

              ))}
            </div>
              <span>Not work yet
                ,will modify soon and delete thin span.
              </span>
          </div>

        </div>


        <div className="border-t border-[#f1f5f9] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#6b7280]">
          <div>
            Copyright © 2026 <span className="font-semibold  hover:text-[#2f57ef] active:text-[#2f57ef] cursor-pointer">Pixcels Themes</span>. All Rights Reserved
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {['Terms of service', 'Privacy policy', 'Subscription', 'Login & Register'].map((item) => (

              <a
                onClick={() => item == 'Login & Register' ? navigate('/register').then(window.scrollTo(0, 0)) : ''}
                key={item} href="" className="hover:text-[#2f57ef] active:text-[#2f57ef] transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>

      </div>


    </footer>
  )
}