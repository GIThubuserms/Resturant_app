import React from 'react'

function DishesCard({dish}) {
  return (
    <div>
      <img src={dish.image} className='rounded-3xl p-2' ></img>
      <div className='p-4'>
        <h3 className='mb-2 text-2xl font-bold tracking-tighter'>{dish.title}</h3>
        <p className='text-sm'>{dish.description}</p>
      </div>
    </div>
  )
}

export default DishesCard
