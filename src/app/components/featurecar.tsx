import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Feature() {
  return (
    <div className='bg-gray-100'>
        <div className='flex'>
            <h2 className='font-bold text-2xl ml-20 mt-20'>Featured New Cars</h2>
            <a className='ml-96 pl-96 mt-20 text-blue-500'>View All New Cars</a>
        </div>

        <div className='space-x-9 pl-20 mt-7 font-bold border-b-2 border-gray-300'>
            <a className='font-extrabold border-4 border-b-blue-800'>Popular</a>
            <a className='hover:font-extrabold'>Upcoming</a>
            <a className='hover:font-extrabold'>Newly Launched</a>
        </div>

        <div className='flex space-x-6 ml-12 mt-4'>
            <Link href="./corolla" className='text-center w-3/12 px-3 bg-white'>
                <div className='hover:scale-105 transform transition duration-300 ease-in-out'>
                    <Image src="/corolla.jpg" width="300" height="300" alt="car1-pic" />
                    <h3 className='text-blue-900 font-bold pt-10 py-15 px-15'>Toyota Corolla</h3>
                    <p className='text-green-600'>PKR 59.7 - 75.5 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>700 Reviews</span>
                </div>
            </Link>
            
            <Link href="./alto" className='text-center w-3/12 px- bg-white'>
                <div className='hover:scale-110 transform transition duration-300 ease-in-out'>
                    <Image src="/alto.jpg" width="300" height="300" alt="car2-pic" />
                    <h3 className='text-blue-900 font-bold pt-2'>Suzuki Alto</h3>
                    <p className='text-green-600'>PKR 23.3 - 30.5 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>399 Reviews</span>
                </div>
            </Link>

            <Link href="./city" className='text-center w-3/12 px-3 bg-white'>
                <div className='hover:scale-105 transform transition duration-300 ease-in-out'>
                    <Image src="/hondacity.jpg" alt="car3-pic" width={300} height={300}/>
                    <h3 className='text-blue-900 font-bold pt-4'>Honda City</h3>
                    <p className='text-green-600'>PKR 50.5 - 58.5 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>458 Reviews</span>
                </div>
            </Link>


            <Link href="./civic" className='text-center w-3/12 px-3 bg-white pr-4'>
                <div className='hover:scale-105 transform transition duration-300 ease-in-out'> 
                    <Image src="/honda.jpg" alt="car4-pic" width={300} height={300}/>
                    <h3 className='text-blue-900 font-bold pt-4'>Honda Civic</h3>
                    <p className='text-green-600'>PKR 90.6 - 99.0 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>500 Reviews</span>
                </div>
            </Link>


            <Link href="./swift" className='text-center w-3/12 px-3 bg-white pr-4'>
                <div className='hover:scale-105 transform transition duration-300 ease-in-out'> 
                    <Image src="/swift.jpg" alt="car4-pic" width={300} height={300}/>
                    <h3 className='text-blue-900 font-bold pt-4'>Honda Civic</h3>
                    <p className='text-green-600'>PKR 90.6 - 99.0 lacs</p>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>★</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-orange-500 font-extrabold'>☆</span>
                    <span className='text-gray-500 font-bold pl-3'>500 Reviews</span>
                </div>
            </Link>







            


            
            
        </div>
    </div>
  )
}