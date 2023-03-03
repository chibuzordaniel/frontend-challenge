import React from 'react'
import img1 from  '../assests/Rectangle 143.png'
import img2 from  '../assests/Rectangle 149.png'
import img3 from  '../assests/Rectangle 151.png'
// import storeItems from "../data/item.json"


const CardList = () => {
  return (
    <>
        <div>
            <div className='max-w-[1200px] mx-auto'>
                <div>
                    <div className=' bg-white shadow lg:w-[581px] lg:ml-0 lg:h-14 rounded-full  relative top-28 md:w-[581px] md:h-14 md:ml-9  md:-mt-0 sm:ml-5 sm:w-[85%] sm:h-12 sm:-mt-28'>
                        <div className=' lg:flex justify-between md:flex sm:block'>
                            <div className=' flex gap-6 ml-5 '>
                                <svg  className=' lg:mt-5 md:mt-5 sm:mt-4' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.675 17C14.259 17 17.975 13.4183 17.975 9C17.975 4.58172 14.259 1 9.675 1C5.09104 1 1.375 4.58172 1.375 9C1.375 13.4183 5.09104 17 9.675 17Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M20.05 19L15.5369 14.65" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <input className=' lg:pt-0 md:pt-0 sm:pt-3  outline-none' type="text"  placeholder='Search for laptops'/>
                            </div>
                            <button className=' rounded-full bg-black  lg:w-40 lg:h-14 text-white font-semibold lg:mt-0 md:mt-0 lg:relative md:w-40 md:h-14 md:relative sm:absolute  sm:mt-7 sm:h-12 sm:w-[100%] '>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className=' lg:grid grid-cols-4 lg:mt-40 md:mt-40 sm:mt-56 gap-12 md:block '>

                    {/* <div>
                      {storeItems.map(item => (
                        <div key={item.id}>{JSON.stringify(item)}</div>
                        

                      ))}
                    </div> */}
                    

                    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8 lg:ml-0  md:mt-20 sm:w-[80%] sm:pb-6 '>
                        <img className=' md:w-[100%]  sm:w-[100%] ' src={img2} alt="" />
                        <div className=' flex justify-between pt-2'>
                            <h3 className=' pl-4  lg:text-sm font-bold md:text-3xl'>Macbook Air</h3>
                            <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'>N25,000</p>
                        </div>
                        <button className=' bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-1 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8'>Add Cart</button>
                    </div>

                    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8  lg:ml-0  md:mt-20 sm:w-[80%] sm:mt-10 sm:pb-6'>
                        <img className=' md:w-[100%]  sm:w-[100%]  ' src={img3} alt="" />
                        <div className=' flex justify-between pt-2'>
                            <h3 className=' pl-4  lg:text-sm font-bold md:text-3xl'>Macbook Air</h3>
                            <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'>N25,000</p>
                        </div>
                        <button className=' bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-1 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8'>Add Cart</button>
                    </div>

                    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8  lg:ml-0  md:mt-20 sm:w-[80%] sm:mt-10 sm:pb-6 '>
                        <img className=' md:w-[100%]  sm:w-[100%]  ' src={img1} alt="" />
                        <div className=' flex justify-between pt-2'>
                            <h3 className=' pl-4  lg:text-sm font-bold md:text-3xl'>Macbook Air</h3>
                            <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'>N25,000</p>
                        </div>
                        <button className=' bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-1 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8'>Add Cart</button>
                    </div>

                    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8  lg:ml-0  md:mt-20 sm:w-[80%] sm:mt-10 sm:pb-6'>
                        <img className=' md:w-[100%]   sm:w-[100%] ' src={img2} alt="" />
                        <div className=' flex justify-between pt-2'>
                            <h3 className='pl-4  lg:text-sm font-bold md:text-3xl'>Macbook Air</h3>
                            <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'>N25,000</p>
                        </div>
                        <button className=' bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-1 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8'>Add Cart</button>
                    </div>

                    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8 lg:ml-0  md:mt-20 sm:w-[80%] sm:mt-10 sm:pb-6 '>
                        <img className=' md:w-[100%]  sm:w-[100%]  ' src={img3} alt="" />
                        <div className=' flex justify-between pt-2'>
                            <h3  className=' pl-4  lg:text-sm font-bold md:text-3xl'>Macbook Air</h3>
                            <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'>N25,000</p>
                        </div>
                        <button className='  bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-1 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8'>Add Cart</button>
                    </div>

                    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8  lg:ml-0  md:mt-20  sm:w-[80%] sm:mt-10 sm:pb-6'>
                        <img className=' md:w-[100%]   sm:w-[100%] ' src={img1} alt="" />
                        <div className=' flex justify-between pt-2'>
                            <h3 className=' pl-4  lg:text-sm font-bold md:text-3xl'>Macbook Air</h3>
                            <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'>N25,000</p>
                        </div>
                        <button className='  bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-1 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8'>Add Cart</button>
                    </div>

                    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8  lg:ml-0  md:mt-20  sm:w-[80%] sm:mt-10 sm:pb-6 '>
                        <img className=' md:w-[100%]  sm:w-[100%]  ' src={img2} alt="" />
                        <div className=' flex justify-between pt-2'>
                            <h3 className=' pl-4  lg:text-sm font-bold md:text-3xl'>Macbook Air</h3>
                            <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'>N25,000</p>
                        </div>
                        <button className='  bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-1 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8'>Add Cart</button>
                    </div>

                    <div className=' lg:bg-white lg:w-[261px] lg:h-[295px] lg:pb-0 rounded-xl shadow md:w-[90%] md:h-[100%] md:pb-12 ml-8  lg:ml-0  md:mt-20  sm:w-[80%] sm:mt-10 sm:pb-6 '>
                        <img className=' md:w-[100%]  sm:w-[100%] ' src={img3} alt="" />
                        <div className=' flex justify-between pt-2'>
                            <h3 className='pl-4  lg:text-sm font-bold md:text-3xl'>Macbook Air</h3>
                            <p className='text-[#8A0B0B] lg:text-sm pr-4 font-bold  md:text-3xl'>N25,000</p>
                        </div>
                        <button className='  bg-[#8A0B0B] lg:w-20 lg:h-8 lg:text-sm text-white ml-4 lg:mt-1 font-semibold md:w-44 md:h-14 md:mt-5 md:text-xl sm:w-[32%] sm:h-8'>Add Cart</button>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default CardList