import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import errorLottie from '../../lottieFiles/Error 404.json'
import { useNavigate } from 'react-router-dom';
export default function LottieLoading() {

  const navigate = useNavigate()

  return (
    <>
    <section className=' flex h-[90vh] items-center justify-center '>
      <Player
        autoplay
        loop
        src={errorLottie}
        style={{ height: '300px', width: '300px' }}
      >

        <p className='cursor-pointer text-3xl text-yellow-700' onClick={()=>navigate('/')} > What about going to home....</p>
      </Player>
    </section>
    </>
  )
}
