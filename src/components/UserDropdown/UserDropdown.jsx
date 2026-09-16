import React, { useContext, useState } from "react";
import { ChevronDown, HelpCircle, LogOut01, Moon01, Plus, Settings01, User01 } from "@untitledui/icons";
import { MenuTrigger, Button, Menu, MenuItem, Popover, Separator, Header, SubmenuTrigger } from "react-aria-components";
import { MdEmail } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import { FaPhoneAlt, FaQuestion } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { MdQuiz } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";
import { SiCounterstrike } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import manager from '../../assets/HiStudy/avatar.jpg'
import { AuthContext } from "../../context/supabaseContext";
import { useNavigate, Link } from "react-router-dom";
import { DisplayContext } from "../../context/DisplayContext";

export const UserDropdown = () => {
  const { currentUser, logOut } = useContext(AuthContext)
  const Navigate = useNavigate()
  const { dark, setDark } = useContext(DisplayContext)

  return (
    currentUser ?
      <MenuTrigger>

        {/* الزرار اللي بره في الناف بار */}
        <Button className={`flex flex-row gap-1 justify-center items-center cursor-pointer rounded-2xl p-2.5 transition-all duration-200 outline-none text-sm font-medium bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent lg:-translate-x-2 border-b-rose-500`}>
          {currentUser ?
            <div className="gap-2 flex flex-row items-center">
              <img src={currentUser?.image || manager} className="shadow w-15 rounded-full" alt="" />
              <span className="hidden lg:flex capitalize font-semibold text-xl">{currentUser?.firstName}</span>
            </div>
            :
            ''
          }
        </Button>

        {/* الـ Popover اللي بينزل تحت الزرار أوتوماتيك */}
        <Popover placement="bottom end" className={`${dark == false ? `bg-white text-black` : `bg-[#1C2833] text-white`} z-50 min-w-56 mt-2 rounded-xl shadow-xl border border-amber-500 p-1 translate-y-[5px] sm:translate-x-0`}>
          <Menu className="outline-none">

            <MenuItem className="flex items-center justify-start hover:text-white active:text-white gap-[40px] px-3 py-2 text-sm rounded-lg cursor-pointer outline-none">
              <div className="flex items-center gap-2">
                <span><img src={currentUser.image} className="rounded-full w-25" alt="" /></span>
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-semibold bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-transparent bg-clip-text group capitalize relative">
                  {currentUser?.firstName} {currentUser?.lastName}
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 scale-x-0 group-hover:origin-center group-active:origin-center group-hover:scale-x-100 group-active:scale-x-100 w-full absolute bottom-0 left-0 right-0 transition-all duration-200 h-0.5"></span>
                </span>
                <Link
                  to={'/profile'}
                  className={`text-[16px] transition-all duration-200 group relative ${dark == false ? `bg-white text-black` : `bg-[#1C2833] text-white`}`}>
                  View Profile
                  <span className="bg-gradient-to-r from-amber-500 to-pink-500 scale-x-0 group-hover:origin-center group-active:origin-center group-hover:scale-x-100 group-active:scale-x-100 w-full absolute bottom-0 left-0 right-0 transition-all duration-200 h-0.5"></span>
                </Link>
              </div>
            </MenuItem>

            <MenuItem className="hover:text-white active:text-white flex items-center justify-between px-3 py-2 text-sm duration-300 transition-all hover:bg-gradient-to-r active:bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg cursor-pointer outline-none">
              <div className="flex items-center gap-2">
                <MdEmail />
                <span>
                  {currentUser?.email}
                </span>
              </div>
            </MenuItem>

            <MenuItem className="hover:text-white active:text-white flex items-center justify-between px-3 py-2 text-sm duration-300 transition-all hover:bg-gradient-to-r active:bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg cursor-pointer outline-none">
              <div className="flex items-center gap-2">
                <FaPhoneAlt />
                <span> {currentUser?.phone}</span>
              </div>
            </MenuItem>

            <MenuItem className="hover:text-white active:text-white flex items-center justify-between px-3 py-2 text-sm duration-300 transition-all hover:bg-gradient-to-r active:bg-gradient-to-r from-amber-500 to-pink-500 rounded-lg cursor-pointer outline-none">
              <Link to={'/CartPage'} className="flex items-center gap-2 w-full h-full">
                <IoCart />
                <span>Your Cart</span>
              </Link>
            </MenuItem>

            <MenuItem className={`hover:text-red-200 active:text-red-200 hover:bg-red-600 active:bg-red-600 hover:shadow-[0_2px_0_0_red] active:shadow-[0_2px_0_0_red] shadow-[0_2px_0_0_gray] transition-all duration-300 justify-between px-3 py-2 text-sm text-gray-700 rounded-lg cursor-pointer outline-none ${dark && `text-white`}`}>
              <div
                onClick={() => logOut()}
                className="flex items-center gap-2">
                <CiSettings className="size-6" />
                <span> Log Out</span>
              </div>
            </MenuItem>

            <div className="p-1">
              <Button onClick={() => logOut()} className="w-full text-center bg-red-50 hover:bg-red-100 active:bg-red-100 text-red-600 font-medium text-xs py-2 rounded-lg transition outline-none cursor-pointer">
                Sign out
              </Button>
            </div>

          </Menu>
        </Popover>

      </MenuTrigger>
      :
      <div className="lg:-translate-x-3 p-2 group relative">
        <Link
          className="group-hover:bg-gradient-to-r group-active:bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text group-hover:text-transparent group-active:text-transparent transition-all duration-200"
          to={'/register'}>
          Register
        </Link>
        <span className="absolute left-0 bottom-0 scale-x-0 group-hover:scale-x-80 group-active:scale-x-80 w-full h-0.5 transition-all duration-300 bg-blue-500 rounded-2xl"></span>
      </div>
  );
};