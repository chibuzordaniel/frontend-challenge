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

const price = product.map((e:any) => e.price);

  return (
    <>
        <div className='   bg-white border relative  border-gray-100  lg:w-[30%]  lg:h-[50%]   lg:pb-10  rounded-xl  md:w-[70%] sm:pb-20 sm:w-[90%] sm:h-[40%]    '>
            <div className='  '>
                <div className=' flex justify-between border-b-2'>
                    <h1 className=' pl-5 text-2xl pt-5 font-bold  pb-7'>Cart</h1>
                    <h3 onClick={() => setClose(!close)} className=' text-2xl mr-5 mt-4  ' ><BiX className=' hover:bg-red-600 rounded-lg  hover:text-white cursor-pointer w-7 h-7 mt-2'/></h3>
                </div>
                  <div className='overflow-y-auto w-[100%] h-[330px] mb-10'>
                   {product.map((prod:any) => (
                    <>
                    <div className=' '>
                    <div className=' flex  justify-between border-b border-gray-100  pb-2  '>
                        <div className='flex   '>
                            <img className=' w-24 h-14 ml-5 mt-[17px]' src={prod.image} alt="" />
                            <div>
                            <h3 className=' pt-5 pl-3 font-semibold text-red-800 text-sm'>{prod.name}</h3>
                              <p className='pl-3 text-red-800 font-semibold'>${prod.price}</p>
                            </div>
                            
                        </div>
                        <button type='button' onClick={() => removeCart(prod.name)} className=' bg-red-600  text-white w-8 h-8 rounded-full  mt-6 mr-3' ><BiX className=' w-5 h-5  ml-1.5'/></button>
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

                 <div className=' flex justify-between px-6 absolute bg-white h-20 bottom-0 items-center w-full' >
                   <div className='font-bold text-xl' >Total </div> 
                   <div className='text-2xl font-medium'>
                    {`$${price.reduce((sum:any, current:any) => sum + current, 0)}`}
                   </div>
                 </div>                
            </div>
        </div>
    </>
  )
}

export default ShopCart