import React from 'react'
import img1 from  '../assests/Rectangle 4.png'

const Showcase = () => {
  return (
    <>
        <div>
            <div className=' max-w-[1200px] mx-auto'>
                <div className='lg:flex justify-between md:block'>
                   <div className=' mt-52 lg:ml-0 md:ml-8'>
                     <h1 className=' lg:text-6xl lg:pl-0  md:text-6xl md:pl-0 sm:text-3xl  sm:pl-5'>Buy <span className=' font-bold'>Authentic</span> Laptops <br />  without worrying</h1>  
                     <button className=' bg-black lg:text-sm lg:w-40 lg:h-11 text-white lg:mt-20 rounded-full md:mt-20 md:ml-0 md:w-60 md:h-16 md:text-xl font-semibold sm:ml-5 sm:w-44 sm:h-10 mt-5'>Shop Now</button>
                   </div>

                   <div className=' mt-32'>
                    <img  className=' lg:flex  md:hidden sm:hidden ' src={img1} alt="" />
                   </div>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default Showcase