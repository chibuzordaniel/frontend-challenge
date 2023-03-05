import React from 'react'
import img1 from "../assests/Rectangle 149.png"
import img2 from "../assests/Rectangle 143.png"

const ShopCart = () => {
  return (
    <div>
        <div className='   bg-white shadow lg:w-[30%]  lg:h-[550px] absolute top-20  right-5 rounded-xl pb-9 md:w-[70%] md:h-[550px] sm:w-[90%] h '>
            <div>
                <h1 className='text-center text-2xl pt-5 font-bold border-b-2 pb-7'>Cart</h1>
                <div className=' flex  justify-between border-b-2 pb-2  '>
                    <div className='flex'>
                        <img className=' w-24 h-14 ml-5 mt-[30px]' src={img1} alt="" />
                        <div>
                         <h3 className=' pt-9 pl-3 font-semibold text-red-800'>Macbook Air</h3>
                          <p className='pl-3 text-red-800 font-semibold'>N25,000</p>
                        </div>
                    </div>
                    <button className=' bg-red-600  w-10 h-10 text-lg mt-[38px] flex justify-center items-center rounded-lg mr-8 font-bold text-white'>x</button>
                </div>

                <div className=' flex  justify-between border-b-2 pb-7  '>
                    <div className='flex'>
                        <img className=' w-24 h-14 ml-5 mt-[30px]' src={img2} alt="" />
                        <div>
                         <h3 className=' pt-9 pl-3 font-semibold text-red-800'>Macbook Air</h3>
                          <p className='pl-3 text-red-800 font-semibold'>N25,000</p>
                        </div>
                    </div>
                    <button className=' bg-red-600 w-10 h-10 text-lg mt-[38px] rounded-lg mr-8 font-bold text-white'>x</button>
                </div>

                 <div className=' flex justify-center mt-20'>
                  
                 </div>
                
            </div>
        </div>
    </div>
  )
}

export default ShopCart