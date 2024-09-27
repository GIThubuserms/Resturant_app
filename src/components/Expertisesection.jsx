import React from 'react'
import { CUSINES } from '../../constants'


function Expertisesection() {
    return (
        <>
            <h1 className='text-3xl w-full text-center tracking-tighter mt-4 md:mt-0  '>Our Expertise</h1>
            {CUSINES.map((cusine, index) =>
                <div className='w-full h-full flex  flex-col gap-y-3 lg:pl-28 mt-1   sm:flex-row justify-start  px-4 pt-3  items-center gap-2' key={index}>
                    <p>{cusine.number}</p>
                    <img src={cusine.image} className='w-2/3 sm:w-1/4  rounded-2xl' alt="" />
                    <div className='flex flex-col justify-start text-center md:text-start gap-y-1'>
                        <h3 className="text-orange-400" >{cusine.title}</h3>
                        <p className='text-sm tracking-tighter font-thin'>{cusine.description}</p>
                    </div>
                </div>

            )

            }
        </>
    )
}
            export default Expertisesection
