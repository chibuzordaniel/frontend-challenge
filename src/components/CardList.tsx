/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState} from 'react'
import { products } from '../data'
import ItemCard from './ItemCard'

const CardList = () => {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [filter, setfilter] = useState<object[]>();
    const [value, setValue] = useState<string>("");

    const isProduct = () => {
        const product = products.filter(product => product.name === value);
        setfilter(product)
    }
 
  return (
    <>
        <div>
            <div className='max-w-[75rem] mx-auto'>
                <div>
                    <div className=' bg-white shadow lg:w-[36.3125rem] lg:ml-0 lg:h-14 rounded-full  relative top-28 md:w-[36.3125rem] md:h-14 md:ml-9  md:-mt-0 sm:ml-5 sm:w-[85%] sm:h-12 sm:-mt-28'>
                        <div className=' lg:flex justify-between md:flex sm:block'>
                            <div className=' flex gap-6 ml-5 '>
                                <svg  className=' lg:mt-5 md:mt-5 sm:mt-4' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.675 17C14.259 17 17.975 13.4183 17.975 9C17.975 4.58172 14.259 1 9.675 1C5.09104 1 1.375 4.58172 1.375 9C1.375 13.4183 5.09104 17 9.675 17Z" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M20.05 19L15.5369 14.65" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <input 
                                value={value.toLowerCase()}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                                className='lg:pt-0 md:pt-0 sm:pt-3  outline-none'  
                                type="text"   
                                placeholder='Search for laptops'/>
                            </div>
                            <button 
                            onClick={() => isProduct()}
                            type='button'
                            className=' rounded-full bg-black  lg:w-40 lg:h-14 text-white font-semibold lg:mt-0 md:mt-0 lg:relative md:w-40 md:h-14 md:relative sm:absolute  sm:mt-7 sm:h-12 sm:w-[100%]  ' >
                                Search Now
                                </button>
                        </div>
                    </div>
                </div>
                <div className=' lg:grid grid-cols-4 lg:mt-40 md:mt-40 sm:mt-56 gap-12 md:block '>

                    {!filter?.length || value === '' ?
                        products.map((product) => (
                              <ItemCard 
                              key={product.id}
                              image={product.image} 
                              name={product.name} 
                              price={product.price} 
                              product={product}  />   
                            )):  filter.map((product:any) => (
                                <ItemCard 
                                key={product.id}
                                image={product.image} 
                                name={product.name} 
                                price={product.price} 
                                product={product}  />   
                              ))
                    }
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default CardList