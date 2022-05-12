import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import bannerb from '../images/offerbanner.webp'
function Banner() {
  return (
    <div className='relative'>

        <div  className='w-[50px] h-[50px] items-center justify-center absolute top-0 bottom-0 m-auto left-[10px] z-10 cursor-pointer opacity-50 hover:opacity-100'>
            <ChevronLeftIcon className=' fill-red-400 ' />
        </div>
            
                    <div className='h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
                        <Image src={bannerb} layout="fill" objectFit='cover'/>
                    </div>

        <div className='w-[50px] h-[50px] items-center justify-center absolute top-0 bottom-0 m-auto right-[10px] cursor-pointer opacity-50 hover:opacity-100'>
            <ChevronRightIcon className='fill-red-400' />
        </div>

    </div>


  )
}

export default Banner