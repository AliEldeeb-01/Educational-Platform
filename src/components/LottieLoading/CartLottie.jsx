import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';

import lottieCart from '../../lottieFiles/loading.json'

export default function CartLottie() {
    return (
        <section className=' flex flex-col h-[90vh] items-center justify-center '>
            <Player
                autoplay
                loop
                src={lottieCart}
                style={{ height: '300px', width: '300px' }}
            >

            </Player>
            <p className=' scale-105 text-blue-600 text-2xl'>Loading...</p>
        </section>
    )
}
