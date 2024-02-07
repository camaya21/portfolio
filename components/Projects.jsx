import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import top from '../public/assets/top.png'
import trending from '../public/assets/trending.jpg'
import feelingDown from '../public/assets/FeelingDown.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                title='Make My Test Count' 
                backgroundImg={top}
                build="A Next.js app that consumers can use to input their covid test results" 
                projectLive='https://top-project.vercel.app/' 
                target="_blank"
                projectGit='https://github.com/EmilyJarecki/TOP-Project' />
                <ProjectItem 
                title='#Trending' 
                backgroundImg={trending} 
                build="Full-Stack MERN app for people of all ages to keep up with today's trends"
                projectLive='https://cool-licorice-e1c33b.netlify.app/' 
                projectGit='https://github.com/bavila19/trending-frontend' />
                <ProjectItem 
                title='Feeling Down' 
                backgroundImg={feelingDown}
                build="React app that sources 2 API's to help anyone who is feeling down"
                projectLive='https://celadon-cocada-1724db.netlify.app ' 
                projectGit='https://github.com/bavila19/project-two' />
            </div>
        </div>
    </div>
  )
}

export default Projects