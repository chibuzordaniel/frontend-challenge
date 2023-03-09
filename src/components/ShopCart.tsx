/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
// import img1 from "../assests/Rectangle 149.png"
// import img2 from "../assests/Rectangle 143.png"
import {BiX} from 'react-icons/bi'

const ShopCart = ({product, setClose, setProduct}:any) => {

const removeCart = (name:string) => {
  const cart = product.filter((e:any)=> e.name !== name);
  setProduct(cart)
}

  return (
    <>
        <div className='   bg-white border border-gray-400  lg:w-[30%]  lg:h-[50%]   lg:pb-10  rounded-xl  md:w-[70%] sm:pb-20 sm:w-[90%] sm:h-[40%]    '>
            <div className='  '>
                <div className=' flex justify-between border-b-2'>
                    <h1 className=' pl-5 text-2xl pt-5 font-bold  pb-7'>Cart</h1>
                    <h3 onClick={() => setClose(!close)} className=' text-2xl mr-5 mt-4  ' ><BiX className=' cursor-pointer w-7 h-7 mt-2'/></h3>
                </div>
                  <div className=' overflow-y-scroll w-[100%] h-[330px]'>
                   {product.map((prod:any) => (
                    <>
                    <div className=' '>
                    <div className=' flex  justify-between border-b-2  pb-2  '>
                        <div className='flex   '>
                            <img className=' w-24 h-14 ml-5 mt-[17px]' src={prod.image} alt="" />
                            <div>
                            <h3 className=' pt-5 pl-3 font-semibold text-red-800 text-sm'>{prod.name}</h3>
                              <p className='pl-3 text-red-800 font-semibold'>${prod.price}</p>
                            </div>
                            
                        </div>
                        <button type='button' onClick={() => removeCart(prod.name)} className=' bg-red-600  text-white w-8 h-8 rounded-full  mt-6 mr-3' ><BiX className=' w-6 h-6  ml-1'/></button>
                        
                    </div>
                 </div>
                 </>
                   ))}
                
                 </div>
                
                <p className='pl-3 text-red-800 font-bold text-sm '></p>
                {/* <div className=' text-end'>
                  <button className=' bg-red-600 text-white w-24 h-8 mt-5 mr-4 text-sm font-semibold'  >Clear Cart</button>
                  <button className=' bg-blue-600 text-white w-24 h-8 mt-5 mr-4 text-sm font-semibold'  >Buy Now</button>
                </div> */}

                 <div className=' flex justify-center ' >
                   <button className='  bg-red-600  w-48 h-12 mt-20 text-white font-bold text-xl' >Total </button> 
                 </div>                
            </div>
        </div>
    </>
  )
}

export default ShopCart