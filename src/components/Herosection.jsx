import React from 'react'
import logo from '../../assets/logo.png'
import hero from '../../assets/hero.mp4'


function Herosection() {

  return (
    <section className='relative h-screen flex items-center justify-center '>
       <div className='h-full  w-full absolute inset-0 -z-20  overflow-hidden '>
        <video
         src={hero} muted autoPlay playsInline loop
         className='h-full w-full  object-cover'
         ></video>
       </div>
  
       <div className='absolute inset-0 -z-20 bg-gradient-to-b from-transparent from-70% to-black text-center'></div>

       <div className='realtive z-20 flex h-screen flex-col  justify-end pb-14   '>
        <img src={logo} className='w-full px-3 mt-1 '></img>
        <p className='w-full px-3'>Paris</p>
       </div>

    </section>
  )
}

export default Herosection
