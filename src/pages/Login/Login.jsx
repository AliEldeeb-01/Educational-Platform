/*
مراحل هندله الانبوتس
1-نجيب الداتا من الفورم ونهندلها
2-اعمل عليها فالديشين
3-التاكد من الوصول الصحيح للبيانات
4-تخزين فالسكويل
*/

import React, { useContext, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import '../Register/Register.css'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { FaFileUpload } from 'react-icons/fa'
import axios from 'axios'
import { GiConfirmed } from 'react-icons/gi'
import { AiOutlineLoading } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '../../validation/Login'
import { AuthContext } from '../../context/supabaseContext'
import { supabase } from '../../clientSupabase'
import { DisplayContext } from '../../context/DisplayContext'


export default function Register() {

  const { logInHandle, logInLoading, currentUser } = useContext(AuthContext)
  const Navigate = useNavigate()
  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
    resolver: zodResolver(LoginSchema),
    mode: 'all'
  })



  const LoginHandling = async (data) => {
    const { email, password } = data
    // الخطوة دي عشان نجيب الصوره كلينك لانها بتيجي ك فورم
    const newData = {
      email: email,
      password: password
    }

    const user = await logInHandle(newData)
    if (user) {
      Navigate('/profile')
    }
  }

  const { dark } = useContext(DisplayContext)



  return (
    <section className={`${dark
      ? 'bg-gray-900 text-gray-100'
      : 'bg-white text-gray-800 '
      }`}>
      <div
        className={`p-16 flex w-full flex-col justify-center items-center min-h-[60vh] gap-3.5 ${dark ? `header-Reg-dark` : `header-Reg`
          }`}
      >
        <h1 className='text-5xl font-bold text-amber-500'>Log In</h1>

        <div
          className={`flex flex-row gap-1 items-center text-sm ${dark ? 'text-gray-400' : 'text-gray-400'
            }`}
        >
          <Link
            to={'/'}
            className={`hover:text-blue-700 active:text-blue-700 transition duration-200 ${dark ? 'text-gray-300' : 'text-gray-600'
              }`}
          >
            Home
          </Link>

          <IoIosArrowForward className='translate-y-0.5' />

          <span>Log In</span>
        </div>
      </div>

      <div
        className={`container p-10 sm:p-20 shadow-[0_0_2px_2px_#B16F43] w-[80%] mt-10 rounded-2xl -translate-y-5 mx-6  sm:mx-auto min-h-[50vh] ${dark
          ? 'bg-gray-800 text-gray-100 '
          : 'bg-white text-gray-800'
          }`}
      >
        <h3 className='text-center w-full font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900 h-16'>
          Log In
        </h3>

        <form onSubmit={handleSubmit(LoginHandling)}>



          <TextField
            {...register('email')}
            // هنعرض الايرور بقي فالايرور والتكست هيلبر خاصة بالنص اللي خصصته
            error={errors.email}
            helperText={errors.email && errors?.email?.message}
            label={'Email*'}
            fullWidth
            sx={{
              marginBottom: '30px',
              '& .MuiInputBase-root': {
                color: dark ? '#f3f4f6' : '#192335',
              },
              '& .MuiInputLabel-root': {
                color: dark ? '#9ca3af' : '#6b7280',
              },
              '& .MuiFormHelperText-root': {
                color: dark ? '#fca5a5' : undefined,
              },
            }}
            type='Email'
          />



          <TextField
            {...register('password')}
            // هنعرض الايرور بقي فالايرور والتكست هيلبر خاصة بالنص اللي خصصته
            error={errors.password}
            helperText={errors.password && errors?.password?.message}
            label={'Password*'}
            fullWidth
            sx={{
              marginBottom: '30px',
              '& .MuiInputBase-root': {
                color: dark ? '#f3f4f6' : '#192335',
              },
              '& .MuiInputLabel-root': {
                color: dark ? '#9ca3af' : '#6b7280',
              },
              '& .MuiFormHelperText-root': {
                color: dark ? '#fca5a5' : undefined,
              },
            }}
            type='password'
          />



          <div className='text-center w-full flex items-center justify-center'>
            <button
              type="submit"
              disabled={!isDirty || !isValid || logInLoading}
              className="btn-wrapper cursor-pointer"
            >
              <div className='btn-content'>
                <div className="light"></div>

                <div
                  className="gradient-layer"
                  style={{
                    animationDelay: "0s",
                    animationDuration: "25s",
                  }}
                />

                <div
                  className="gradient-layer"
                  style={{
                    animationDelay: "0.15s",
                    animationDuration: "15.9s",
                  }}
                />

                <div
                  className="gradient-layer"
                  style={{
                    animationDelay: "0.53s",
                    animationDuration: "26.4s",
                  }}
                />

                <div
                  className="gradient-layer"
                  style={{
                    animationDelay: "0.45s",
                    animationDuration: "17.8s",
                  }}
                />

                <div
                  className="gradient-layer"
                  style={{
                    animationDelay: "1.6s",
                    animationDuration: "19.2s",
                  }}
                />

                <div
                  className="gradient-layer"
                  style={{
                    animationDelay: "1.6s",
                    animationDuration: "29.2s",
                  }}
                />

                <div
                  className="gradient-layer"
                  style={{
                    animationDelay: "1.6s",
                    animationDuration: "20.2s",
                  }}
                />

                <span className="gradient-btn">
                  Log In
                </span>

                <div className="text-overlay">Log In</div>
              </div>
            </button>
          </div>



          <div>

          </div>

        </form>

        <Link
          className={`my-5 mt-9 inline-block group font-semibold text-center relative ${dark ? 'text-red-400' : 'text-red-700'
            }`}
          onClick={() => window.scrollTo(0, 0)}
          to={'/register'}
        >
          Don't have an account...? Sign up

          <span className='scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 duration-400 transition h-0.5 bg-red-500 absolute -bottom-0.5 left-0 right-0 origin-left'></span>
        </Link>

      </div>


    </section>
  )
}