import React from 'react'

function Footer() {
  return (
    <div className='bg-rose-200 h-12 w-full flex justify-center items-center fixed bottom-0'>
      <div className='w-10 px-2'>
      <img src="/copyright.png" alt="logo copyright" />
      </div>
      <div>
      <h1 className='font-bold'>copyright - </h1>
      </div>
      <div className='w-16 px-2 animate-spin'>
      <img src="/system.png" alt="logo copyright" />
      </div>
    </div>
  )
}

export default Footer
