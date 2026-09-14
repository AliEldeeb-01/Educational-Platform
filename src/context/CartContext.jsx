// import { Data } from "@untitledui/icons";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { supabase } from "../clientSupabase";

export const CartContext = createContext()

export const CartContextProvider = ({ children }) => {

    // const [cartData, setCartData] = useState([])

    // const addToCart = (pro) => {
    //     setCartData((prev) => [...prev, pro])
    // }
    const [cartIdes, setCartIdes] = useState({})
    const [records, setRecords] = useState([])
    const [numProducts, setNumProducts] = useState([])
    const [disBtnCourse, setDisBtnCourse] = useState(false)



    useEffect(() => {
        const dataStored = localStorage.getItem('cardIdes')

        if (dataStored) {
            setCartIdes(JSON.parse(dataStored))
        }
    }, [])

    const addToCart = (id) => {
        // ببساطه احنا بنساوي القيمه بتاعة الkey 
        // الخاصه بالid
        if (!cartIdes[id]) {
            cartIdes[id] = 1
            console.log('New Product');

        } else {
            cartIdes[id]++
            console.log('Increment');
        }
        setCartIdes({ ...cartIdes })

    }

    const addToCartFromSingleProduct = (pro, counter) => {
        const allQuantity = pro.amount + counter
        const max = pro.stock

        if (allQuantity <= max) {
            cartIdes[pro.id] = allQuantity
            setCartIdes({ ...cartIdes })
        } else {
            toast.error('You Have Max An Amount from this pro')
        }


    }

    async function getCartIdes() {
        // 1. استخراج مصفوفة الأرقام/المعرفات من الأوبجكت
        const allCartIdes = Object.keys(cartIdes)

        if (allCartIdes.length > 0) {
            // 2. جلب المنتجات التي يطابق الـ id الخاص بها أحد العناصر في المصفوفة
            const { data, error } = await supabase
                .from('Products')
                .select('*')
                .in('id', allCartIdes)

            if (error) {
                console.log(error)
            } else {
                setRecords(data)
            }
        } else {
            setRecords([])
        }
    }

    function changeAmount(id, amount) {
        cartIdes[id] = amount
        setRecords([...records])
    }

    const deleteProduct = (pro) => {


        Swal.fire({
            title: "Are you sure?",
            text: `You Will Delete: ${pro.title}!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: `${pro.title} has been deleted`,
                    icon: "success"
                });
                // دي ميثود خاصه بالمسح من الاوبجكت
                delete cartIdes[pro.id]
                // عملنا متغير جديد لاننا بنعرض من الاراي اللي مخزنين فيها (records)
                let newRecords = records.filter((el) => el.id !== pro.id)
                setRecords(newRecords)
            }
        });
    }

    const handleAddToCartCourses = (pro) => {
        setDisBtnCourse(true)

        setCartIdes((prev) => ({
            ...prev,
            [pro.id]: 1
        }))

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



    }



    useEffect(
        () => {
            localStorage.setItem('cardIdes', JSON.stringify(cartIdes))




        }
        , [cartIdes, records]
    )







    return <CartContext.Provider value={{ addToCart, cartIdes, setCartIdes, getCartIdes, records, changeAmount, deleteProduct, addToCartFromSingleProduct, handleAddToCartCourses }} >
        {children}
    </CartContext.Provider>
}