import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I have always looked up to women in STEM and thought they were so powerful, so I gave myself the opportunity to become the type of person I've looked up to.</p>
                <p className='py-2 text-gray-600'>My tech interest started in highschool when I enjoyed making youtube videos and mini movies on my iphone. Since then I have always been driven to create memorable things that speak to people in different ways</p>
                <p className='py-2 text-gray-600'>I am a graduate from GA Software Engineering Immersive Boot Camp, a dog mom, a baker in my free time, and wannabe singer in my solitude.</p>
                {/* Come Back and add Resume and fix your profile pic */}
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image src='/../public/assets/about.jpg' alt='/' width='500' height='35' />
            </div>
        </div>
    </div>
  )
}

export default About