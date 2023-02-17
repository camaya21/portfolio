import React, { useRef, useState } from 'react'
import emailjs from "@emailjs/browser"
import {AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'
import ContactPic from '../public/assets/ContactPic.jpg'

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        if (e.target[0].value && e.target[1].value && e.target[2].value) {
            emailjs.sendForm("service_luzk2ir", "template_wq1ndbq", form.current, "NHCj1CDJyAZKb9NHs")
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                });
            e.target.reset()
        }
    };

    return (
    <div id='contact' className='w-fu; lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
            <h2 className='py-4'>Get In Touch</h2>
            <div className='grid lg:grid-cols-5 gap-8'>
                {/* left */}
                <div className='col-span-3 lg:col-span-2 w-full sm:h-30 lg:h-3/6 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='lg:p-4 h-full'>
                        {/* <div>
                            <Image src={ContactPic} width='64' height='64'/>
                        </div> */}
                        <div>
                            <h2 className='py-2'>Cindy Amaya</h2>
                            <p className='text-lg py-2'>Full-Stack Developer</p>
                        </div>
                        <div>
                            <p className='uppercase py-2'>Connect With Me</p>
                            <div className='flex items-center justify-between py-4'>
                                <Link href='https://www.linkedin.com/in/cindyamayaswe/'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaLinkedin />
                                    </div>
                                </Link>
                                <Link href='https://github.com/camaya21'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <FaGithub />
                                    </div>
                                </Link>
                                <Link href='mailto:cindymamaya21@gmail.com'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                </Link>
                                <Link href='https://docs.google.com/document/d/1HpAuh0LGfk2RoB5BDxwVdYLUWCTintulUmcrkGfdNkM/edit?usp=sharing'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                        <BsFillPersonLinesFill />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                    <div className='p-4'>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="user_name" />
                                </div>
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="user_email" />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' name="message" />
                            </div>
                            <input className='border-2 rounded-lg p-3 flex border-gray-300' type="submit" value="Send" />
                        </form>
                    </div>
                </div>
            </div>
            <div className='flex justify-center py-12'>
                <Link href='/'>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30}/>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ContactUs