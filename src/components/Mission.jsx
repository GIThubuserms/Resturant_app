import React from 'react'
import Mision from '../../assets/mission.mp4'
import {MISSION} from '../../constants' 

function Mission() {
  return (
<>
<h1 className='text-2xl text-center w-full tracking-tighter mt-4 md:mt-0' >Our Mission</h1>

    <div className='w-full h-full relative'>


    <div className=' relative'>
       <video src={Mision} muted autoPlay playsInline loop className='-z-10 w-full h-full object-cover'></video>    
      <div className=' absolute inset-0 mx-auto z-10    md:text-lg  md:w-[35%] w-[70%] xs:w-[95%] overflow-hidden  p-9 flex items-center justify-center text-center font-serif text-sm '>{MISSION}</div>
    </div>
  </div>
  <br>
  </br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </>
  )
  
}

export default Mission
