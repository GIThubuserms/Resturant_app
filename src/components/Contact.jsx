import React from 'react'
import {CONTACT} from '../../constants'


function Contact() {
  return (
    <div>
      <h3 className='text-center text-4xl mt-20 font-sans tracking-tighter '>Contact Us</h3>
      <div className='w-full flex-col  items-center justify-center'>
       {CONTACT.map((cont,key)=> <p key={key} className=' text-center flex text-xl tracking-tighter font-sans mt-16  py-6 justify-center items-center border-b-2 border-dotted border-neutral-700 ' >{cont.value}</p>)}
    </div>
    </div>
  )
}

export default Contact
