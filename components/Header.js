import React from 'react'
import Image from 'next/image'
import logo from '../images/logo.png'
import { ShoppingCartIcon, UserIcon, SearchIcon,HeartIcon} from '@heroicons/react/outline'
import Link from 'next/link'
import { useStateValue } from './StateProvider'


function Header({placeholder}) {
 const [{basket, user}, dispatch] = useStateValue();
 const [{favs},dispatcher] = useStateValue();
    placeholder = '';
  return (
        <header className='top-0 w-screen sticky my-0 mx-0 z-50 grid grid-cols-5 bg-white p-5 md:px-10 shadow-md'>

        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
          <Image src={logo} layout='fill' objectFit='contain' objectPosition='left'/>
        </div>



        <div className='font-sans flex items-center md: border-2 rounded-full p-2 md:shadow-sm'>
          <input type="text" placeholder={'Search'} className=' font-sans flex-grow pl-5 outline-none bg-transparent text-sm'/>
          <SearchIcon className='hidden md:inline-flex h-8 hover:bg-black hover:text-white cursor-pointer p-2 rounded-full' />
        </div>

        <Link href='/cart'>
        <div className='flex items-center justify-end cursor-pointer' >
          <div>
          <ShoppingCartIcon className=' h-7 hover:opacity-50'  />
        </div>
          <p className='h-5  text-sm text-center rounded-full w-4 bg-violet-500 '>{basket?.length}</p>
          </div>
          </Link>
          <Link href='/favorites'>
        <div className='flex items-center justify-end cursor-pointer '>
          <HeartIcon className='h-7 hover:opacity-50' />
        <p className='h-5  text-sm text-center rounded-full w-4 bg-violet-500 '>{favs?.length}</p>
        </div>
        </Link>
        <Link href='/Login'>
        <div className='flex items-center justify-end cursor-pointer'>
          <UserIcon className='h-7 hover:opacity-50' />
        </div>
        </Link>



        </header>
  )
}

export default Header
