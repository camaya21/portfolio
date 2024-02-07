import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

function Main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'>LET'S BUILD SOMETHING TOGETHER</p>
                <h1 className='py-4 text-gray-700'>Hello, I'm <span className='text-[#5651e5]'>Cindy</span></h1>
                <h1 className='py-2 text-gray-700'>A Software Engineer</h1>
                <h1 className='py-2 text-gray-700'>  At Northern Virginia Community College</h1>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <Link href='https://www.linkedin.com/in/cindyamayaswe/' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedin />
                        </div>
                    </Link>
                    <Link href='https://github.com/camaya21' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </Link>
                    <Link href='mailto:cindymamaya21@gmail.com' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <Link href='https://docs.google.com/document/d/1e82JLykIIkQ0YoqBquWLN1C6DZjU0-ekReQCKt5AHrk/edit?usp=sharing' target='_blank'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main