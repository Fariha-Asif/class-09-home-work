import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className='flex flex-col-reverse md:flex-row lg:flex-row justify-center items-center bg-pink-400 md:bg-orange-400 lg:bg-purple-500'>
        <div className='w-full md:w-6/12'>
          <h1 className='font-extrabold text-2xl md:my-3 lg:font-extrabold lg:text-3xl hover:text-red-500 lg:hover:text-blue-400 mx-7'>
            Insanity Burger From &apos;Jamie Olivers&apos; Comfort Food&apos;
          </h1>
          <p className='my-4 mx-4'>
            A classic burger with classic flavors, put together in a slightly weird but ultimately satisfying ...<br/>
            Ingredients:
          </p>
          <ul className='my-6 mx-4'>
            <li>1 3/4 lbs ground chuck steak Olive oil</li>
            <li>1 large red onion</li>
            <li>1 splash of white wine vinegar</li>
            <li>2 large gherkins</li>
          </ul>
          <Link href="https://www.recipetineats.com/cheeseburger-recipe/" target='blank'>
            <button className='mx-4 bg-blue-400  md:bg-green-400 lg:bg-blue-400 h-10 w-36 my-4 font-bold rounded hover:bg-blue-500 md:hover:bg-green-600 lg:hover:bg-blue-500 hover:text-purple-600 md:hover:text-black lg:hover:text-purple-600'>
                Want More
            </button>
          </Link>          
        </div>
        <div className='mx-4 my-8 hover:scale-105 transform transition duration-300 ease-in-out'>
          <Image src="/images/01.webp" alt="burger pic" height={500} width={500} className='my-30'/>
        </div>
    </div>
  )
}
