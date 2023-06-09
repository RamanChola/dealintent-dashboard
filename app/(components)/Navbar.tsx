"use client"
import React, { useState } from 'react'
import "./navbar.css"
import Image from 'next/image';
import ProfilePic from "../../public/ProfilePic.png"
import Vector from "../../public/Vector.jpg"
const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
    const notificationCount = 25;
    return (
        <nav className="nav-container top-0 ml-30">
            <div id="navbar">
                <div id="navbar-logo">
                    <div className="outer-cicle rounded-full bg-gray-300 w-8 h-8 flex items-center justify-center">
                        <div className="inner-cicle rounded-full bg-gray-500 w-6 h-6 flex items-center justify-center">
                        </div>
                    </div>
                    <Image src={Vector} alt="Arrow" />
                </div>
                <div className={isNavOpen ? "menu-toggle is-active" : "menu-toggle"} id="mobile-menu" onClick={() => setIsNavOpen((prev) => !prev)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={isNavOpen ? "nav-menu active" : "nav-menu"}>
                    {/* only visible in mobile device, i.e., sm size */}
                    <li className="justify-start content-center w-full h-[80px] hidden sm:flex">
                        <div className="flex rounded-full gap-3 ml-[40px]">
                            <Image src={ProfilePic} className="rounded-full w-[60px] h-[60px] self-center" alt="Profile picture" />
                            <div className="self-center">
                                <p className='font-extrabold text-lg text-[--title] font-sans	tracking-normal	normal-case	'>Jane Smith</p>
                                <p className='text-base text-[--light-gray] font-sans tracking-normal normal-case	'>Sales Executive</p>
                            </div>
                        </div>
                    </li>
                    <hr className="border-gray-200 w-[80%] xs:ml-[40px] xs:mr-0 hidden sm:block self-start"></hr>
                    <li className='sm:flex sm:justify-start sm:content-center sm:w-full sm:h-[40px]  sm:m-[10px]'>
                        <a href="#" className="nav-links ml-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                            <p className=' text-lg text-[--title] font-sans	tracking-normal	normal-case	hidden sm:flex'>Search</p>
                        </a>
                    </li>
                    <hr className="border-gray-200 w-[80%] xs:ml-[40px] xs:mr-0 hidden sm:block self-start"></hr>
                    <li className='sm:flex sm:justify-start sm:content-center sm:w-full sm:h-[40px] sm:m-[10px]'>
                        <a href="#" className="nav-links sm:ml-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
                            </svg>
                            <p className='text-lg text-[--title] font-sans	tracking-normal	normal-case	hidden sm:flex'>Inbox</p>
                        </a>
                    </li>
                    <hr className="border-gray-200 w-[80%] xs:ml-[40px] xs:mr-0 hidden sm:block self-start"></hr>
                    <li className='sm:flex sm:justify-start sm:content-center sm:w-full sm:h-[40px] sm:m-[10px]'>
                        <a href="#" className="nav-links sm:ml-[50px]">
                            <div className="relative">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                                <span className="absolute top-0 right-0 text-[.5rem] h-[12px] px-[3px] py-[1px] flex items-center justify-center  text-white bg-red-400 rounded-full tracking-tighter">{notificationCount}</span>
                            </div>
                            <p className=' text-lg text-[--title] font-sans	tracking-normal	normal-case	hidden sm:flex'>Notifications</p>
                        </a>
                    </li>
                    <hr className="border-gray-200 w-[80%] xs:ml-[40px] xs:mr-0 hidden sm:block self-start"></hr>
                    <li className='sm:flex sm:justify-start sm:content-center sm:w-full sm:h-[40px] sm:m-[10px]'>
                        <a href="#" className="nav-links sm:ml-[50px]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                            </svg>
                            <p className=' text-lg text-[--title] font-sans	tracking-normal	normal-case	hidden sm:flex'>Help</p>
                        </a>
                    </li>
                    <hr className="border-gray-200 w-[80%] xs:ml-[40px] xs:mr-0 hidden sm:block self-start"></hr>
                    <li>
                        <a href="#" className="nav-links">
                            <div className="w-8 h-8 rounded-full ">
                                <Image src={ProfilePic} className="rounded-full sm:hidden" alt="Profile picture" />
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="border-gray-200 ml-7 mr-7 xs:ml-2 xs:mr-2"></hr>
        </nav>
    )
}

export default Navbar