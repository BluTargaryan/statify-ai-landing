import React from 'react'
import InputComp from '../components/InputComp'

const Chat = () => {
  return (
    <div className="h-screen w-full flex  flex-col gap-8 justify-center items-center ">
      <div className="flex flex-col items-end gap-4 text-center py-36 overflow-y-scroll scrollbar-hide xl:w-4/5">
        <h1 className="text-xl font-bold font-noto">Question or prompt?</h1>
        <p className="text-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.
      </p>     
       </div>
      
      <div className='m-auto z-10 fixed bottom-20 w-full'>
      <InputComp />
      </div>
      

      
      
    </div>
  )
}

export default Chat