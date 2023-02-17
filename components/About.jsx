import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/assets/ProfilePic.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='text-lg py-2 text-gray-600'>I have always looked up to women in STEM and thought they were so powerful, so I gave myself the opportunity to become the type of person I've looked up to. My tech interest started in highschool when I enjoyed making youtube videos and mini movies on my iphone. Since then I have always been driven to create memorable things that speak to people in different ways.</p>
                <p className='text-lg py-2 text-gray-600'>As a graduate from GA's Software Engineering BootCamp, I've cultivated my technical abilities to be skilled at swiftly and efficiently acquiring new knowledge and concepts. I'm able to work well under pressure and time constraints, along with being able to clearly and effectively communicate. I believe my background as a retail associate has made me a strong worker and implemented life long competencies.</p>
                <p className='text-lg py-2 text-gray-600'>I enjoy learning and growing with each season that passes. More cool things about me are that I'm a dog mom, a baker in my free time, and wannabe singer in my solitude. I like reading books and exploring the outdoors. Lastly I love movies with great cinematography and acting.</p>
                <p className='text-lg py-2 text-gray-600'>"In case I don't see ya, good afternoon, good evening, and good night" - The Truman Show</p>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src={ProfilePic} alt='/' width='500' height='35' />
            </div>
        </div>
    </div>
  )
}

export default About