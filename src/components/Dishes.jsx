import React from 'react'
import { DISHES } from '../../constants'
import DishesCard from './DishesCard'

function Dishes() {
  return (
    <section className='container mx-auto py-16'>
    <h2 className='text-3xl text-center mb-8 lg:text-4xl mt-4 md:mt-0'>Our Dishes</h2>
    <div className='transition-all ease-in  grid p-10  grid-cols-2 xs:grid-cols-1  gap-8 md:grid-cols-4 lg:grid-cols-5  md:gap-5 lg:gap-5'>
      {DISHES.map((dish,index)=> <DishesCard key={index} dish={dish} />)}
    </div>

    </section>
  )
}


export default Dishes
