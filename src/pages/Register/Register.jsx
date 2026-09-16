/*
مراحل هندله الانبوتس
1-نجيب الداتا من الفورم ونهندلها
2-اعمل عليها فالديشين
3-التاكد من الوصول الصحيح للبيانات
4-تخزين فالسكويل
*/

import React, { useContext, useState } from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import { FaFileUpload } from 'react-icons/fa'
import axios from 'axios'
import { GiConfirmed } from 'react-icons/gi'
import { AiOutlineLoading } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema } from '../../validation/Register'
import { AuthContext } from '../../context/supabaseContext'
import { DisplayContext } from '../../context/DisplayContext'


export default function Register() {

  const { getRegisterData, regDataLoading } = useContext(AuthContext)
  const Navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm({
    resolver: zodResolver(RegisterSchema),
    mode: 'all'
  })
  const [imgUrl, setImgUrl] = useState('')
  const [imgUrlLoading, setImgUrlLoading] = useState(false)

  const handleGetImgUrl = async (file) => {
    const formData = new FormData()
    formData.append('image', file)
    // console.log(formData);

    try {
      setImgUrlLoading(true)
      const { data } = await axios.post('https://api.imgbb.com/1/upload?key=9a90083b962359e8fc87056210d3d7c8', formData)

      // console.log(data.data.url);
      setImgUrl(data.data.url)



    } catch (error) {
      console.log(error);

    } finally {
      setImgUrlLoading(false)
    }

  }


  const funHandleSub = async (data) => {
    const { firstName, lastName, email, phone, password, confirmPassWord } = data
    // الخطوة دي عشان نجيب الصوره كلينك لانها بتيجي ك فورم
    const newData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      // confirmPassWord: confirmPassWord,
      image: imgUrl
    }

    const user = await getRegisterData(newData)
    if (user) {
      Navigate('/profile')
      window.scrollTo(0, 0)
    }

  }

  const { dark } = useContext(DisplayContext)

  return (
    <section className={`${dark
      ? 'bg-gray-900 text-gray-100'
      : 'bg-white text-gray-800 '
      }`}>
      <div className={`p-16 flex w-full flex-col justify-center items-center min-h-[60vh] gap-3.5 ${dark ? `header-Reg-dark` : `header-Reg`
        }`}>
        <h1 className='text-5xl font-bold text-amber-500'>Register</h1>
        <div className={`flex flex-row gap-1 items-center text-sm ${dark ? 'text-gray-400' : 'text-gray-400'
          }`}>
          <Link to={'/'} className={`hover:text-blue-700 active:text-blue-700 transition duration-200 ${dark ? 'text-gray-300' : 'text-gray-600'
            }`} >Home</Link>
          <IoIosArrowForward className=' translate-y-0.5' />
          <span>Register</span>
        </div>
      </div>

      <div className={`container p-10 sm:p-20 shadow-[0_0_2px_2px_#B16F43] w-[80%] mt-10 rounded-2xl -translate-y-5 mx-6 sm:mx-auto min-h-[90vh] ${dark
        ? 'bg-gray-800 text-gray-100 '
        : 'bg-white text-gray-800'
        }`}>
        <h3 className='text-center w-full font-semibold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-500 to-purple-900 h-16'>Register</h3>
        <form onSubmit={handleSubmit(funHandleSub)}>
          <TextField
            {...register('firstName')}
            // هنعرض الايرور بقي فالايرور والتكست هيلبر خاصة بالنص اللي خصصته
            error={errors.firstName}
            helperText={errors.firstName && errors?.firstName?.message}
            label={'First Name*'}
            fullWidth
            sx={{
              marginY: '30px',
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
            type='text'
          />

          <TextField
            {...register('lastName')}
            // هنعرض الايرور بقي فالايرور والتكست هيلبر خاصة بالنص اللي خصصته
            error={errors.lastName}
            helperText={errors.lastName && errors?.lastName?.message}
            label={'Last Name*'}
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
            type='text'
          />

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
            {...register('phone')}
            // هنعرض الايرور بقي فالايرور والتكست هيلبر خاصة بالنص اللي خصصته
            error={errors.phone}
            helperText={errors.phone && errors?.phone?.message}
            label={'Phone*'}
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
            type='number'
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

          <TextField
            {...register('confirmPassWord')}
            // هنعرض الايرور بقي فالايرور والتكست هيلبر خاصة بالنص اللي خصصته
            error={errors.confirmPassWord}
            helperText={errors.confirmPassWord && errors?.confirmPassWord?.message}
            label={'Confirm Password*'}
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

          {
            imgUrl &&
            <div className='flex items-center justify-around gap-2 rounded-full overflow-visible mb-4 w-full   '>

              <img src={imgUrl} width={80} className=' rounded-full border-2 border-blue-600 ' alt="" />
              <p className={`flex items-center gap-3.5 overflow-visible ${dark ? 'text-gray-200' : ''}`}>
                <GiConfirmed className=' size-8 text-blue-700' />
                <span className='overflow-visible z-20'>تم تحميل صورتك بنجاح</span>
              </p>
            </div>

          }

          <input
            // حطينا كل حاجة جوه هنا لاننا هنشتغل كله بالمكتبه وعايزينها تستلم هيا كل حاجه
            {...register('image', {
              onChange: (e) => handleGetImgUrl(e.target.files[0]),
            })}
            type="file" id='uploadImage' style={{ display: 'none' }} />

          <TextField
            // هنعرض الايرور بقي فالايرور والتكست هيلبر خاصة بالنص اللي خصصته
            error={errors.image}
            helperText={errors.image && errors?.image?.message}
            label={'Upload Image*'}
            fullWidth
            value={imgUrl}
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
            type='text'
            // focused
            slotProps={
              {
                htmlInput: {
                  accept: "image/*"
                },
                input: {
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment>
                      <label htmlFor="uploadImage">
                        <FaFileUpload className={`size-8 cursor-pointer ${dark ? 'text-gray-300' : ''}`} />
                      </label>
                    </InputAdornment>
                  )
                }
              }
            }
          />
          {
            imgUrlLoading &&
            <div className='flex flex-row items-center gap-2 justify-start text-blue-500 w-full mb-3.5  '>
              <AiOutlineLoading className=' text-center  text-2xl animate-spin ml-2 ' />
              <span>Proceccing...</span>
            </div>

          }

          <div className='text-center w-full flex items-center justify-center'>
            <button
              type="submit"
              disabled={imgUrlLoading || !isDirty || !isValid || regDataLoading}
              className="btn-wrapper cursor-pointer">
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
                  {regDataLoading ? 'Procceing' : 'Register'}
                </span>
                <div className="text-overlay">{regDataLoading ? 'Procceing' : 'Register'}</div>
              </div>
            </button>
          </div>

        </form>

        <Link className={`my-5 mt-9 inline-block group font-semibold text-center relative ${dark ? 'text-red-400' : 'text-blue-700'}`}
        onClick={()=>window.scrollTo(0,0)}
        to={'/login'}>Already have an account...? Sign in
          <span className={`scale-x-0 group-hover:scale-x-100 group-active:scale-x-100 duration-400 transition h-0.5 absolute -bottom-0.5 left-0 right-0 origin-left ${dark ? 'bg-red-500' : 'bg-blue-500'}`}></span>
        </Link>

      </div>


    </section>
  )
}