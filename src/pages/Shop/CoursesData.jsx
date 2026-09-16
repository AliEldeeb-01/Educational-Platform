import React, { useContext, useEffect, useState } from 'react'
import book1 from '../../assets/HiStudy/1.jpg'
import { MdArrowForwardIos } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { DisplayContext } from '../../context/DisplayContext';
import CartLottie from '../../components/LottieLoading/CartLottie';
import LottieLoading from '../../components/LottieLoading/LottieLoading';
import { CartContext } from '../../context/CartContext';
import { AiOutlineLoading } from "react-icons/ai";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SingleProduct from '../SingleProduct/SingleProduct';



export default function CoursesData() {
    const { booksData, booksError, booksLoader, dark } = useContext(DisplayContext)
    // console.log(booksData);
    const { addToCart, cartIdes } = useContext(CartContext)

    // console.log(cartIdes);
    const [isDisabeldBtn, setIsDisabeldBtn] = useState(null)

    const Navigate = useNavigate()

    const NavigateId = useNavigate()


    function handleDisBtn(id) {

        setIsDisabeldBtn(id)

        setTimeout(() => {
            setIsDisabeldBtn(null)
        }, 1000)
    }

    const handleAddToCart = (pro) => {
        handleDisBtn(pro.id)
        addToCart(pro.id)
        if (cartIdes[pro.id] == 1) {
            const timeOut = setTimeout(() => {
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

            }, 800)
        } else {
            setTimeout(() =>

                toast.success(<div className='flex flex-col gap-0.5 items-center  '

                >
                    <span>You Have ({cartIdes[pro.id]})  </span>
                    <span > From: {pro.title}</span>
                </div>)
                , 800)
        }


        return
    }


    // console.log(cartIdes);

    






    return (
        <>
            {
                booksLoader ?
                    <div className=' col-span-full flex justify-center items-center h-[90vh]' >
                        <CartLottie />
                    </div>

                    :
                    booksError ?

                        <div className=' col-span-full flex justify-center w-full mt-9 items-center h-[90vh]' >
                            <LottieLoading />
                        </div>

                        :
                        booksData.map((val) => (


                            <div
                                key={val.id}
                                className={`rounded-lg p-4 gap-4 flex flex-col items-center col-span-1 border transition-colors duration-200 ${
                                    dark 
                                    ? 'bg-gray-800 text-gray-100 border-gray-700 shadow-lg' 
                                    : 'bg-white text-gray-800 border-gray-100'
                                }`}>
                                <strong className={`block text-2xl sm:text-3xl text-center ${dark ? 'text-gray-100' : 'text-gray-900'}`} >
                                    {val.title}
                                </strong>
                                <h6 className={`italic text-sm ${dark ? 'text-gray-400' : 'text-gray-500'}`} >By {val.author}</h6>
                                <div className='py-2.5 cursor-pointer'
                                >
                                    <img
                                        src={val.image}
                                        onClick={() => NavigateId(`/SingleProduct/${val.id}`)}
                                        className='rounded cursor-pointer '
                                        alt="Book`s image"
                                    />
                                </div>

                                <div className=' flex flex-row gap-1.5 items-center'>
                                    <span className=' text-transparent font-bold sm:text-2xl clip bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500'>
                                        {/* السعر بعد الخصم */}
                                        ${(val.price - ((val.price * val.discount) / 100)).toFixed(2)}
                                    </span>
                                    <s className={`font-bold sm:text-xl ${dark ? 'text-gray-500' : 'text-gray-300'}`}>
                                        {/* السعر قبل الخصم */}
                                        ${val.price.toFixed(2)}
                                    </s>
                                </div>
                                <div className={`flex flex-row gap-1 text-sm ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                                    <span>You can add ({cartIdes[val.id] ? val.stock - cartIdes[val.id] : val.stock})</span>
                                    <span>From: {val.stock}</span>
                                </div>

                                <div className='group bg-linear-to-r transition-all 
                                w-[150px] h-[50px]  duration-300  group hover:bg-linear-to-l active:bg-linear-to-l from-indigo-500 via-purple-500 to-pink-500 flex flex-row items-center  text-white  rounded-lg cursor-pointer justify-center relative'
                                >

                                    <IoArrowForward className={` text-lg transition-all duration-300 opacity-0 -translate-x-4  group-hover:opacity-100 group-active:opacity-100 group-hover:translate-x-0 group-active:translate-x-0 absolute left-0.5 ${isDisabeldBtn === null ? '' : isDisabeldBtn === val.id ? `hidden` : ''} `} />
                                    <button
                                        disabled={isDisabeldBtn === val.id || (val.stock - cartIdes[val.id]) == 1}
                                        className={`disabeldBtn relative w-full h-full -translate-x-1.5 group-hover:translate-x-0 group-active:translate-x-0 transition-all duration-200 cursor-pointer hover:scale-110 active:scale-110  `}
                                        onClick={() => handleAddToCart(val)}
                                    >
                                        {/* لو بتساوي الحالة الافتراضيه هتخليها زي ماهي وال 
                                         (val.id)هي جايه من الماب الاب فتستخدم هنا عادي
                                         وكذالك ال(isDisabeldBtn)
                                         هو عباره عن state 
                                         فيستخدم هنا عادي*/}

                                        {isDisabeldBtn === null ? ` Add To Cart`
                                            : isDisabeldBtn === val.id ?
                                                <div className='flex flex-row items-center gap-2 justify-around w-full  '>
                                                    <AiOutlineLoading className=' text-center  text-2xl animate-spin ml-2 ' />
                                                    <span>Proceccing...</span>
                                                </div>
                                                : ` Add To Cart`}



                                    </button>

                                    <IoArrowForward className={`transition-all absolute right-0.5 text-lg duration-300 opacity-100 translate-x-0 group-hover:opacity-0 group-active:opacity-0 group-hover:translate-x-4 group-active:translate-x-4
                                         ${isDisabeldBtn === null ? '' : isDisabeldBtn === val.id ? `hidden` : ''}`} />

                                </div>

                            </div>

                        ))

            }
        </>
    )

}