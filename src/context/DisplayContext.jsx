import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
import { supabase } from '../clientSupabase'

export const DisplayContext = createContext()

export const DisplayContextProvider = ({ children }) => {
    const [booksData, setBooksData] = useState([])
    const [booksError, setBooksError] = useState(null)
    const [booksLoader, setBooksLoader] = useState(false)
    const [courseData, setCourseData] = useState([])
    const [dark, setDark] = useState(false)
    useEffect(
        () => {
            const mode = localStorage.getItem('mode')
            console.log(mode);
            setDark(mode == 'true' ? true : false)

        }
        , []
    )

    useEffect(
        () => {
            // setDark((prev) => !prev)
            localStorage.setItem('mode', dark)

        }
        , [dark]
    )


    useEffect(
        () => {
            const showData = async () => {
                try {
                    setBooksLoader(true)
                    const { data } = await
                        // axios.get('http://localhost:3000/products?category=books')
                        supabase.from('Products').select('*').eq('category', 'books')
                    // console.log(data);
                    const { data: courseDataFromApi } = await
                        // axios.get('http://localhost:3000/products?category=courses')
                        supabase.from('Products').select('*').eq('category', 'courses')
                    setBooksData(data)
                    setCourseData(courseDataFromApi)
                    // console.log(courseDataFromApi);


                }
                catch (error) {
                    setBooksError(error)

                } finally {
                    setBooksLoader(false)
                }
            }













            // call
            showData()
        }, []
    )

    return <DisplayContext.Provider value={{ booksData, booksError, booksLoader, courseData, dark, setDark }}>
        {children}
    </DisplayContext.Provider>
}



