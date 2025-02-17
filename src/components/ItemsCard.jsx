import React from 'react'

function ItemsCard({image,name,price}) {
  return (
    <div className='itemCard'>
   <div className='overflow-hidden rounded-lg'>
    <img src={image} className='hover:scale-110 transition ease-in'/>
   </div>
   <p className='text-gray-500'>{name}</p>
   <p className='text-gray-800 font-bold'>{'$ '}{price}</p>
    </div>
  )
}

export default ItemsCard;