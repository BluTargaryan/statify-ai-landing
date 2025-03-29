'use client'
import React from 'react'
import { MdClose } from 'react-icons/md'

interface CheckInCompProps {
  isVisible: boolean;
}

const CheckInComp = ({ isVisible }: CheckInCompProps) => {
  if (!isVisible) return null

  return (
    <section className='w-full h-screen flex items-center z-50 bg-text-50 justify-center fixed top-0 left-0  pointer-events-auto'>
      <div className='w-4/5 h-80 bg-bg rounded-lg flex flex-col gap-4 items-center justify-center px-4 relative'>
        <MdClose 
          className='absolute top-4 right-4 text-2xl cursor-pointer hover:text-secondary transition-colors'
        />
        <h1 className='text-3xl font-bold font-noto text-center'>Sign up or in via email</h1>
        <p className='text-center'>
          To use this tool, enter your email below.
        </p>
        <input 
          type="email" 
          placeholder='Enter your email' 
          className='w-full p-2 rounded-lg border border-text bg-transparent lg:w-1/2'
        />
        <button 
          className='w-full p-2 rounded-lg bg-text text-bg lg:w-1/2 hover:bg-secondary transition-colors'
        >
          Sign up or in
        </button>
      </div>
    </section>
  )
}

export default CheckInComp