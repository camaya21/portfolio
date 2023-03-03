import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ProjectItem = ({title, backgroundImg, build, projectLive, projectGit}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
        <Image className='rounded-xl group-hover:opacity-10' src={backgroundImg} alt='/'/>
        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='p-2 text-white text-center lg:p-7 lg:text-xl'>{build}</p>
            <div className='flex flex-row items-center justify-center space-x-2.5'>
               <Link href={projectLive} target='_blank'>
                    <p className='my-2 mtext-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer p-8'>LIVE</p>
                </Link>
                <Link href={projectGit} target='_blank'>
                    <p className='my-2 text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer p-8'>CODE</p>
                </Link> 
            </div>
            
        </div>
    </div>            
  )            
}

export default ProjectItem