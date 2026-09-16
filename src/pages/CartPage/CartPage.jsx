import React, { useContext, useEffect, useState } from 'react'
import bg1 from '../../assets/HiStudy/bg-g1.webp'
import { Link } from 'react-router-dom'
import { IoIosArrowForward } from "react-icons/io";
import './CartPage.css'
import bok1 from '../../assets/HiStudy/1.jpg'
import { MdClose } from "react-icons/md";
import { CartContext } from '../../context/CartContext';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { GiPlagueDoctorProfile } from "react-icons/gi";
import Swal from 'sweetalert2'
import { DisplayContext } from '../../context/DisplayContext';

export default function CartPage() {

  const { addToCart, cartIdes, getCartIdes, setCartIdes, records, changeAmount, deleteProduct } = useContext(CartContext)
  // console.log(records);
  const { dark } = useContext(DisplayContext)

  const productsFullInfo = records.map((product) => ({
    ...product,
    amount: cartIdes[product.id]

  }));
  // setRecords(productsFullInfo)

  console.log(productsFullInfo);
  const [dis22, setDis22] = useState(false)
  const confirmBuying = () => {
    setDis22(true)
    setTimeout(() => {
      setDis22(false)
      Swal.fire({
        title: "Succefully Payed.",
        text: 'Now You Can Study The Courses, And The Delivery Agent Will Call You Soon For Books',
        imageUrl: "https://t3.ftcdn.net/jpg/19/43/18/92/360_F_1943189221_ph2cJrKM7T6zhwLkL6afNbBqxR95GSZh.jpg",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        timer: 2000

      });

    }, 1200);
  }



  useEffect(() => {
    getCartIdes()
  }, [])



  return (
    <section className={` flex flex-col gap-5  ${dark == true ?
      `bg-[#192335] text-gray-100 `
      : `bg-white text-[#192335]`}  `}>

      <div className={`${dark ? `header-cart-dark text-amber-400` : `header-cart text-black `} p-16 flex w-full  flex-col justify-center items-center min-h-[60vh] gap-3.5  `}>
        <h1 className='text-5xl font-bold'>Cart</h1>
        <div className='flex flex-row gap-1 items-center text-sm text-gray-400 '>
          <Link to={'/'} className=' hover:text-blue-400 active:text-blue-400 transition duration-300' >Home</Link>
          <IoIosArrowForward className=' translate-y-0.5' />
          <span>Cart</span>
        </div>
      </div>
      {/* products container & head */}
      <div className='flex  flex-col gap-1 '>
        {/* the head products */}
        <div className='  shadow bg-linear-to-r from-yellow-500 via-orange-500 to-red-500 
         sm:bg-linear-to-r sm:from-indigo-500 sm:via-purple-500 sm:to-pink-500
          h-12 grid grid-cols-6 justify-around text-center rounded-2xl text-white items-center w-[95%] sm:w-full md:w-[80%] mx-auto' >
          <span className='sm:inline hidden'>Image</span>
          <span className='sm:inline hidden'>Product</span>
          <span className='sm:inline hidden'>Price</span>
          <span className='sm:inline hidden'>Quantity</span>
          <span className='sm:inline hidden'>Total</span>
          <span className='sm:inline hidden'>Remove</span>
          <p className='  capitalize sm:hidden flex bg-linear-to-r text-2xl from-indigo-500 bg-clip-text text-transparent   via-purple-500 to-pink-500 flex-row justify-center gap-10 w-full text-nowrap text-center z-10 col-span-6 font-semibold ' >
            your products
            <GiPlagueDoctorProfile className='text-purple-900 size-7' />
          </p>
        </div>

        <div className='flex  flex-col gap-1 '>
          {/* products divs */}
          {
            productsFullInfo.length == 0 ?
              <div className=' flex flex-col gap-6 my-8 mx-auto items-center'>
                <p className='text-2xl text-red-700 capitalize text-shadow-red-600 ' > your cart is empty : ( </p>
                <Link className='text-4xl text-blue-600 capitalize underline w-full text-center ' to={'/shop'} > what about adding some products... </Link>
              </div>
              : productsFullInfo.map((val, index) => {

                const finalPrice = (val.price - (val.price * val.discount / 100))

                // الفانكشن دي خاصه بانه يعمل اراي بعدد الاستوك وعملهم (fill)
                // علشان يعرف يلوب عليهم بالماب (عشان محطناش قيم من الاراي ميثود)
                // وبالتالي نعمل خانات بعدد الستوك اللي عندنا وبارك الله فيهما رزق

                let maxCount = Array(val.stock).fill(0).map((val, num) => {

                  let index = ++num

                  return <MenuItem value={index} key={index} >{index}</MenuItem>
                })


                return (



                  <div
                    className={`my-1 mx-auto w-[95%] sm:w-full md:w-[80%] relative
                     ${dark == true ?
                        `bg-[#192335] text-gray-100 shadow-[0_0_2px_2px_#ED8E3B] `
                        : `bg-[#e6e6e647] text-[#192335] shadow-[0_0_2px_2px_#384EF4]`} 
                        rounded-2xl
                    `}
                    key={val.id}>
                    <div className='  shadow grid sm:grid-cols-6 justify-around text-center rounded-2xl  p-2 items-center mx-auto'  >
                      <div className='my-1  col-span-1 flex justify-center pt-8 '  >
                        <img src={val.image} className='w-[70%] object-cover rounded' alt="" />
                      </div>
                      <div className='my-1 col-span-1 sm:text-[16px] text-2xl font-semibold capitalize text-blue-400'>{val.title}</div>

                      <div className='my-1 col-span-1 font-semibold flex flex-row gap-5 text-center justify-center  ' >

                        <div className='my-1 font-semibold text-red-400  custo-decoration  '>
                          ${(val.price * val.amount).toFixed(2)}
                        </div>

                        <div className=' text-lg sm:hidden block my-1 col-span-1 text-green-500'>
                          ${(finalPrice * val.amount).toFixed(2)}
                        </div>

                      </div>


                      <div className='my-1  sm:col-span-1 w-[100%] items-center flex  sm:block justify-around'>
                        <div className=' sm:hidden flex flex-row gap-0.5 text-lg font-semibold '>Quantity  </div>

                        {val.category == 'courses' ?
                          <span className=' font-semibold text-blue-400 py-2.5'>Full Course</span>
                          :

                          <Box sx={{ minWidth: 120 }}>
                            <FormControl
                              fullWidth
                              sx={{
                                '& .MuiInputLabel-root': {
                                  color: dark ? '#f3f4f6' : '#192335',
                                },

                                '& .MuiInputLabel-root.Mui-focused': {
                                  color: dark ? '#f3f4f6' : '#192335',
                                },

                                '& .MuiOutlinedInput-root': {
                                  backgroundColor: dark ? '#192335' : '#e6e6e647',

                                  '& fieldset': {
                                    borderColor: dark ? '#3b475a' : '#bdbdbd',
                                  },

                                  '&:hover fieldset': {
                                    borderColor: dark ? '#64748b' : '#888',
                                  },

                                  '&.Mui-focused fieldset': {
                                    borderColor: dark ? '#64748b' : '#888',
                                  },
                                },

                                '& .MuiSelect-select': {
                                  color: dark ? '#f3f4f6' : '#192335',
                                },

                                '& .MuiSelect-icon': {
                                  color: dark ? '#f3f4f6' : '#192335',
                                },
                              }}
                            >
                              <InputLabel id="amount-select-label">
                                Amount
                              </InputLabel>

                              <Select
                                labelId="amount-select-label"
                                id="amount-select"
                                value={val.amount}
                                label="Amount"
                                onChange={(e) => changeAmount(val.id, e.target.value)}
                                MenuProps={{
                                  PaperProps: {
                                    sx: {
                                      backgroundColor: dark ? '#192335' : '#ffffff',
                                      color: dark ? '#f3f4f6' : '#192335',

                                      '& .MuiMenuItem-root': {
                                        color: dark ? '#f3f4f6' : '#192335',

                                        '&:hover': {
                                          backgroundColor: dark ? '#263449' : '#f5f5f5',
                                        },

                                        '&.Mui-selected': {
                                          backgroundColor: dark ? '#2d3b50' : '#e0e0e0',
                                        },

                                        '&.Mui-selected:hover': {
                                          backgroundColor: dark ? '#34445c' : '#d6d6d6',
                                        },
                                      },
                                    },
                                  },
                                }}
                              >
                                {maxCount}
                              </Select>
                            </FormControl>
                          </Box>
                        }

                      </div>


                      <div className='my-1 col-span-1 text-center font-semibold sm:block hidden text-green-500'>
                        ${(finalPrice * val.amount).toFixed(2)}
                      </div>

                      <div className=' absolute top-1 sm:static right-1'>
                        <div className='my-1   w-full flex justify-center   '>
                          <div className=' p-4 cursor-pointer justify-center flex bg-red-100 text-red-600 transition-all duration-400  hover:bg-red-600 active:bg-red-600 hover:text-red-100 active:text-red-100 active:bg-red-600 rounded-full ' onClick={() => deleteProduct(val)}
                          >

                            <MdClose />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                )
              })
          }

        </div>
      </div>
      {
        records.length >= 1 ?
          <div className='w-full  flex items-center '>
            <button
              disabled={dis22}
              onClick={() => confirmBuying()}
              className=' px-5 py-2.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:rounded-full disabled:bg-gray-500 disabled:text-white w-[30%] mx-auto rounded bg-green-100 text-green-600 active:bg-green-600 active:text-green-100 hover:bg-green-600 active:bg-green-600 hover:text-green-100 active:text-green-100 duration-300 transition-all cursor-pointer shadow-lg   '>
              Buy Now!
            </button>
          </div>
          : ''
      }
    </section>
  )
}
