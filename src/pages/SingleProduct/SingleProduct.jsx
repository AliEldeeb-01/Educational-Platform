import React, { useContext, useEffect, useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import img from '../../assets/HiStudy/1.jpg'
import { Link, useParams } from 'react-router-dom';
import './SingleProduct.css'
import { IoIosStar } from "react-icons/io";
import { AiOutlineLoading } from 'react-icons/ai';
import { IoArrowForward } from 'react-icons/io5';
import axios from 'axios';
import { CartContext } from '../../context/CartContext';
import Swal from 'sweetalert2';
import { DisplayContext } from '../../context/DisplayContext';
import { supabase } from '../../clientSupabase';

export default function SingleProduct() {
  const { id } = useParams()
  const { addToCartFromSingleProduct, cartIdes } = useContext(CartContext)
  const { dark } = useContext(DisplayContext)
  const [singleProductData, setSingleProductData] = useState({})
  const [counter, setCounter] = useState(1)
  const [disAbledBtn, setDisAbledBtn] = useState(false)



  // console.log(id);
  // const { cartIdes } = useContext(CartContext)
  const handleCounter = (action) => {
    if (action == 'plus') {
      setCounter(prev => ++prev)
    } else {
      setCounter(prev => --prev)
    }
  }


  const handleAddToCart = (pro, counter) => {
    addToCartFromSingleProduct(pro, counter)
    makeCounterEq0AfterAdd(pro, counter)
    setDisAbledBtn(true)
    setTimeout(() => {
      Swal.fire({
        title: ` <div className='flex flex-col items-center gap-0.5'>
        <span >You Added: </span>
        <span >${pro.title}</span>
         </div>`,
        text: "To Your Cart",
        icon: "success",
        timer: 1200,
        showConfirmButton: false
      });
      setDisAbledBtn(false)
    }, 800)


  }

  async function getSingleProductData() {
    const { data } = await
      //  axios.get(`http://localhost:3000/products/${id}`)
      supabase.from('Products').select('*').eq('id', id).single()

    setSingleProductData(
      {
        ...data,
        amount: cartIdes[data.id] ? cartIdes[data.id] : 0
      }
    )



  }
  // console.log(singleProductData);

  const makeCounterEq0AfterAdd = (pro, counter) => {
    if (cartIdes[pro.id] == singleProductData.stock) {
      setCounter(pro.stock - cartIdes[pro.id])
    }
  }

  useEffect(
    () => {
      getSingleProductData()
    }
    , [cartIdes]
  )


  return (
    <section className={`transition-colors duration-200 ${dark ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-800'}`}>
      <section className={` flex justify-center items-center pb-20 pt-52 mb-16 md:mb-40 transition-colors duration-200 ${dark ? 'bg-gray-800 header-single-dark' : 'header-single'}`} >
        <div className='felx flex-col  '>
          <h1 className={`font-bold text-5xl ${dark ? 'text-gray-100' : 'text-gray-900'}`}>SingleProduct</h1>
          <div className={`flex gap-1 items-center justify-center mt-3 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            <Link to={'/'} className={`${dark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-500'} duration-300 transition-all`}>Home</Link>
            <IoIosArrowForward />
            <span className={`${dark ? 'text-gray-100' : 'text-black'}`}>SingleProduct</span>
          </div>
        </div>
      </section>
      <section className='grid grid-cols-2 gap-5 '>
        <div className=' md:col-span-1 col-span-2 '>
          <div className=' overflow-hidden rounded-lg w-full h-full p-10'>
            <img src={singleProductData?.image} className='rounded-lg' alt="" />
          </div>
        </div>
        <div className=' md:col-span-1 col-span-2 p-10 flex flex-col gap-3.5  md:py-15  '>
          <div className='flex flex-row items-center gap-1 rate mb-1.5 '>
            <div className='flex flex-row text-yellow-500'>
              <IoIosStar className='text-lg' />
              <IoIosStar className='text-lg' />
              <IoIosStar className='text-lg' />
              <IoIosStar className='text-lg' />
              <IoIosStar className='text-lg' />
            </div>
            <span className={`${dark ? 'text-gray-300' : 'text-gray-600'}`}>(75) - 100% Positive Reviews</span>
          </div>
          <div className='title mb-1.5'>
            <h2 className={`text-5xl font-semibold ${dark ? 'text-gray-100' : 'text-gray-900'}`}>{singleProductData?.title}</h2>
          </div>
          <div className={`text-sm italic author mb-1.5 ${dark ? 'text-gray-400' : 'text-gray-400'}`}>
            <span>By:</span>
            <span className={`name-author ${dark ? 'text-gray-300' : 'text-gray-600'}`}> {singleProductData?.author}</span>
          </div>
          <div className='flex-row flex  Price'>
            <p className='text-transparent font-bold text-2xl clip bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text'>${(singleProductData?.price - ((singleProductData?.price * singleProductData?.discount) / 100)).toFixed(2)}</p>
            <p className={`flex items-center text-lg ml-1.5 font-semibold linethrough ${dark ? 'text-gray-500' : 'text-gray-400'}`}>${singleProductData?.price}</p>
          </div>
          <div className='lorem'>
            <p className={`text-lg ${dark ? 'text-gray-300' : 'text-gray-400'}`}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt. ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam. et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
          </div>
          <div className='flex gap-3   HandleAddToCart'>
            <div className={`flex gap-1.5 text-lg items-center border Container-Couneter ${dark ? 'border-gray-700 bg-gray-800' : 'border-gray-300'}`}>
              <button
                disabled={counter <= 1}

                onClick={() => handleCounter('minus')}
                className={`disabeldBtn bg-linear-to-l from-indigo-500 via-purple-500 to-pink-500 text-white cursor-pointer px-3.5 h-full border border-gray-400 transition-all duration-100 ${counter <= 1 ? ` ` : `active:scale-90`} `} >-</button>

              <span className={`px-2 text-center ${dark ? 'text-gray-100' : 'text-gray-800'}`}>{counter}</span>

              <button
                onClick={() => handleCounter('plus')}
                disabled={(singleProductData?.amount + counter) >= singleProductData?.stock}
                className={`disabeldBtn  bg-linear-to-l from-indigo-500 via-purple-500 to-pink-500 text-white cursor-pointer px-3.5 h-full border border-gray-400  transition-all duration-100 ${(singleProductData?.amount + counter) >= singleProductData?.stock ? ` ` : `active:scale-90`} `}>+</button>
            </div>

            <div className='group bg-linear-to-r transition-all w-[150px] h-[50px] duration-300  group hover:bg-linear-to-l from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center  text-white  rounded-lg cursor-pointer justify-center relative  container-Button-Add-Cart'   >

              <IoArrowForward className={` text-lg transition-all duration-300 opacity-0 -translate-x-4  group-hover:opacity-100 group-hover:translate-x-0 absolute left-0.5 ${disAbledBtn && `hidden`}`} />
              <button
                onClick={() => handleAddToCart(singleProductData, counter)}
                disabled={singleProductData?.amount == singleProductData.stock || disAbledBtn}
                className={`disabeldBtn relative hover:scale-110   w-full h-full -translate-x-1.5 group-hover:translate-x-0 transition-all duration-200 cursor-pointer
                 `}>
                <div className='flex flex-row items-center gap-2 justify-around w-full  '>
                  {disAbledBtn ?
                    <div className='flex flex-row items-center gap-2 justify-around w-full  '>
                      <AiOutlineLoading className=' text-center  text-2xl animate-spin ml-2 ' />
                      <span>Proceccing...</span>
                    </div>
                    : <span>Add To Cart</span>}
                </div>
              </button>
              <IoArrowForward className={`transition-all absolute right-0.5 text-lg duration-300 opacity-100 translate-x-0 group-hover:opacity-0 group-hover:translate-x-4 ${disAbledBtn && `hidden`}`} />
            </div>
          </div>
          <div className={`flex items-center amount-add ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            <span className=' capitalize'>you can add {(singleProductData?.stock - singleProductData?.amount)} from {singleProductData?.stock} </span>

          </div>
          <div className='flex flex-col gap-3.5 text-lg '>
            <div>
              <b className={dark ? 'text-gray-200' : 'text-gray-900'}>SKU :</b>
              <span className={`ml-1 duration-200 transition-all cursor-pointer NumberOfBook ${dark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>{singleProductData?.category}</span>
            </div>
            <div>
              <b className={dark ? 'text-gray-200' : 'text-gray-900'}>Categories :</b>
              <span className={`ml-1 duration-200 transition-all cursor-pointer TypeOfBook ${dark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>Motivation</span>
            </div>
            <div>
              <b className={dark ? 'text-gray-200' : 'text-gray-900'}>Tag :</b>
              <span className=' ml-1  TypeOfBook'>
                <span className={`duration-400 transition-all cursor-pointer ${dark ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}>{singleProductData?.tag}</span>
              </span>
            </div>
          </div>

        </div>
      </section>
    </section>
  )
}