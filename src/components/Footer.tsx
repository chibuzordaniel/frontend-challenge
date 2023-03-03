import React from 'react'

const Footer = () => {
  return (
    <>
        <div className=' bg-[#EEEEEE] w-[100%] h-[100%] mt-40  pb-10'>
            <div className='border-[#dcd9d9] border-b-[1px] '>
                <div className=' max-w-[1200px] mx-auto'>
                    <div  className=' pl-5'>
                        <div className=' lg:flex  justify-between pt-7 pb-4 md:block '>
                            <h1 className=' lg:text-lg  font-bold md:text-2xl '>FRONTEND CHALLENGE</h1>
                            <div className=' lg:flex lg:text-sm font-medium lg:pt-0 gap-12 md:block md:pt-10 md:text-lg sm:text-sm  sm:pt-4'>
                            <h2>ALL COLLECTIONS</h2>
                            <h2 className=' lg:pt-0 md:pt-2'>BRAND COLLECTIONS</h2>
                            <h2 className=' lg:pt-0 md:pt-2'>MEN COLLECTIONS</h2>
                            <h2 className=' lg:pt-0 md:pt-2'>WOMEN COLLECTIONS</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' max-w-[1200px] justify-between mx-auto pt-6'>
                <div className=' lg:flex lg:text-sm justify-between md:block pl-5 md:text-lg'>
                    <h2>@2019 wiz sullivan inc. All Rights Reserved</h2>
                   <div className=' flex gap-14 lg:pt-0 md:pt-4'>
                      <h3>Terms of Service</h3>
                      <h3>Privacy Policy</h3>
                   </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer