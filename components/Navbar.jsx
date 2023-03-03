import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMail, AiOutlineMenu} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import logo from '../public/assets/CAS.pdf.png'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(()=> {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, [])

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]' : 'fixed w-full h-20 shadow-xl z-[100]'}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
            <Image 
            src={logo}
            alt="/" 
            width='160' 
            height='50'
            />
            </Link>
            <div>
                <ul className='hidden md:flex'>
                    <Link href='/'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href='/#about'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>
                    <Link href='/#skills'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
                    </Link>
                    <Link href='/#projects'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                        <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                <div>
                    <div className='flex w-full items-center justify-between'>
                        <Image src={logo} alt='/' width='125' height='35' />
                        <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w[90%] py-4'>Happy You're Here!</p>
                    </div>
                </div>
                <div className='py-4 flex-col'>
                    <ul className='uppercase'>
                        <Link href='/'>
                        <li className='py-4 text-sm'>Home</li>
                        </Link>
                        <Link href='/#about'>
                        <li className='py-4 text-sm'>About</li>
                        </Link>
                        <Link href='/#skills'>
                        <li className='py-4 text-sm'>Skills</li>
                        </Link>
                        <Link href='/#projects'>
                        <li className='py-4 text-sm'>Projects</li>
                        </Link>
                        <Link href='/#contact'>
                        <li className='py-4 text-sm'>Contact</li>
                        </Link>
                    </ul>
                    <div className='pt-10'>
                        <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
                        <div className='flex intems-center justify-between my-4 w-full sm:w-[80%]'>
                            <Link href='https://www.linkedin.com/in/cindyamayaswe/' target='_blank'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaLinkedinIn />
                                </div>
                            </Link>
                            <Link href='https://github.com/camaya21'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <FaGithub target='_blank' />
                                </div>
                            </Link>
                            <Link href='mailto:cindymamaya21@gmail.com'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <AiOutlineMail target='_blank' />
                                </div>
                            </Link>
                            <Link href='https://docs.google.com/document/d/1HpAuh0LGfk2RoB5BDxwVdYLUWCTintulUmcrkGfdNkM/edit?usp=sharing'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                    <BsFillPersonLinesFill target='_blank' />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Navbar