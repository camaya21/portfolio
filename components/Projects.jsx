import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import expenseTrackerImg from '../public/assets/ExpenseTracker.jpg'
import trending from '../public/assets/trending.jpg'
import feelingDown from '../public/assets/FeelingDown.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-x; tracking-widest uppercase text-[#5651e5]'>Projects</p>
            <h2 className='py-4'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItem 
                title='Expense Tracker' 
                backgroundImg={expenseTrackerImg}
                build='Django' 
                projectLive='https://e-tracker.herokuapp.com/' 
                projectGit='https://github.com/camaya21/project_4' />
                <ProjectItem 
                title='#Trending' 
                backgroundImg={trending} 
                build='Full Stack MERN App'
                projectLive='https://cool-licorice-e1c33b.netlify.app/' 
                projectGit='https://github.com/bavila19/trending-frontend' />
                <ProjectItem 
                title='Feeling Down' 
                backgroundImg={feelingDown}
                build='React JS' 
                projectLive='https://celadon-cocada-1724db.netlify.app ' 
                projectGit='https://github.com/bavila19/project-two' />
            </div>
        </div>
    </div>
  )
}

export default Projects