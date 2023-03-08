import React from 'react';

type Props={
  image: string
  name: string
  price: number
  product: object
}

const ItemCard = ({image, name, price, product}:Props) => {

  return (
    <div >
    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8 lg:ml-0  md:mt-20 sm:w-[80%] sm:pb-6 '>
        <img className=' md:w-[100%]  sm:w-[100%] mt-6 ' src={image} alt="" />
        <div className=' flex justify-between pt-2'>
          <h3 className=' pl-4 capitalize lg:text-sm font-bold md:text-3xl'> {name}</h3>
           <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'> ${price}</p>
        </div>
        <button type='button' 
        className=' bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-2 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8' 
        onClick={() => product}>Add Cart</button>
    </div>
</div>
  )
}

export default ItemCard;