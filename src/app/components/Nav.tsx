import React from 'react'
import logoStatify from '@/app/images/logo-statify.png'
import Image from 'next/image'
import { FaLongArrowAltRight } from 'react-icons/fa'
const Nav = () => {
  return (
    <nav className='fixed top-0 left-0 bg-bg w-full h-16 flex justify-between items-center px-4 xl:px-8 z-10'>
        <div className='flex gap-3 items-center'>
            <Image src={logoStatify} alt='logo' width={0} height={0} sizes='100vw'
            className='w-4 h-4'
            />
            <p className='uppercase text-primary text-xl font-bold font-noto'>Statify-AI</p>
        </div>
        
        <a href='https://www.statifymma.com' target='_blank' className='flex gap-3 items-center hover:gap-4 transition-all duration-300'>
            <p>Go to Statify-MMA</p>
            <FaLongArrowAltRight />
        </a>
    </nav>
  )
}

export default Nav