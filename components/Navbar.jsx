import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='felx justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image 
            src="/../public/assets/CAS.png" 
            alt="/" 
            width='170' 
            height='50'
            />
        </div>
    </div>
  )
}

export default Navbar