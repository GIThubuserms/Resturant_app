import React from 'react'
import {SOCIAL_MEDIA_LINKS} from '../../constants'

function Fotter() {
  return (
    <div>
      <div className='flex justify-center items-center gap-2 mt-36 '>
        {SOCIAL_MEDIA_LINKS.map((img,key)=><a className='hover:scale-75 transition-all ease-in' href={img.href} key={key}>{img.icon}</a>)}
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center  mt-9 text-xl font-sans '>&copy; <p className='text-red-700'>murtaza0318,</p>All rights reserved</div>

    </div>
  )
}

export default Fotter

