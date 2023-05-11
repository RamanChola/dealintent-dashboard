/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import BodyImage from "../../public/bodyImage.svg"
import WeworkLogoFull from "../../public/wework-logo-full.svg"
import "./bodyframe.css"
const BodyFrame = () => {
    return (
        <>
            {/* middle body part */}
            <div className="flex justify-between content-center mt-20 mb-6 xs:mt-10 xs:mb-4">
                <p className="text-2xl font-extrabold text-[--title] sm:text-base whitespace-nowrap ">Project Scope Recap</p>
                <div className="relative w-[200px] xs:w-[35%] ml-auto">
                    <div className='absolute top-[-13px] w-[100%] flex content-center xs-top-[8px]'>
                        <p className="text-base	text-[--light-gray] sm:text-[10px]">Mutual Actions Plan</p>
                        <p className="text-base	text-[--primary] font-black ml-auto sm:text-[10px]">3%</p>
                    </div>
                    <div className="mt-[8%] flex gap-1 h-[8px] rounded-lg sm:gap-[1px]">
                        <div className="h-full w-4 bg-[--primary] rounded-l-lg sm:w-[7px] sm:h-[6px] xs:w-[6%]"></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] sm:w-[6px] sm:h-[6px] xs:w-[5%]" ></div>
                        <div className="h-full w-4 bg-[--placeholder-gray] rounded-r-lg sm:w-[7px] sm:h-[6px] xs:w-[6%]" ></div>
                    </div>
                </div>
            </div>
            {/* middle buttons */}
            <div className="flex justify-between mt-">
                <div className="flex w-[450px] h-[40px] gap-2 xs:h-[30px]">
                    <button className="w-[100%] xs:w-[70px] xs:h-[30px] xs:text-xs p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 whitespace-nowrap text-[--primary] font-black">Basic Info</button>
                    <button className="w-[60%] xs:w-[45px] xs:h-[30px] xs:text-xs  p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 whitespace-nowrap text-[--ternary] font-bold hover:text-[--primary]">Files</button>
                    <button className="w-[180%] xs:w-[138px] xs:h-[30px] xs:text-xs p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 whitespace-nowrap text-[--ternary] font-bold hover:text-[--primary]">Mutual Action Plan</button>
                    <button className="w-[80%] xs:w-[65px] xs:h-[30px] xs:text-xs p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 whitespace-nowrap text-[--ternary] font-bold hover:text-[--primary]">Contact</button>
                </div>
                <button className="w-[150px] p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 text-[--ternary] font-bold hover:text-[--primary] xs:hidden">Internal Actions</button>
            </div>
            <hr className="border-gray-200 ml-7 mr-7"></hr>
            {/* main body */}
            <div className='flex mt-5 mb-5'>
                {/* Left button Panel */}
                <div className='flex-[1] bg-[--pure] rounded-lg h-[320px] md:hidden'>
                    <button className="w-[200px] font-bold text-lg text-[--light-gray] bg-[--pure] p-4 text-left rounded-t-lg">Overview</button>
                    <hr className="border-gray-200 ml-3 mr-3"></hr>
                    <button className="w-[200px] text-sm text-[--light-gray] bg-[--pure] p-4 text-left">Welcome</button>
                    <hr className="border-gray-200 ml-3 mr-3"></hr>
                    <button className="w-[200px] text-sm text-[--light-gray] bg-[--pure] p-4 text-left">Product Capabilities</button>
                    <hr className="border-gray-200 ml-3 mr-3"></hr>
                    <button className="w-[200px] text-sm text-[--light-gray] bg-[--pure] p-4 text-left">Customer Success Stories</button>
                    <hr className="border-gray-200 ml-3 mr-3"></hr>
                    <button className="w-[200px] text-sm text-[--light-gray] bg-[--pure] p-4 text-left">File Sharing</button>
                    <hr className="border-gray-200 ml-3 mr-3"></hr>
                    <button className="w-[200px] text-sm text-[--light-gray] bg-[--pure] p-4 text-left rounded-b-lg">Our Deck</button>
                </div>
                {/* right body panel */}
                <div className='flex-[10] ml-5 xs:ml-0'>
                    {/* top part */}
                    <div className='flex justify-between'>
                        <p className='font-extrabold text-2xl text-[--title] xs:text-base'>
                            Company profile
                        </p>
                        <button className='hidden xs:block'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg>

                        </button>
                        <div className='flex h-[40px] rounded-lg border border-gray-300	xs:hidden'>
                            <button className='p-2 rounded-l-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                                </svg>
                            </button>
                            <hr className="bg-gray-300 w-[1px] h-[18px] mt-3 mb-3"></hr>
                            <button className='p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                            </button>
                            <hr className="bg-gray-300 w-[1px] h-[18px] mt-3 mb-3"></hr>
                            <button className='p-2 rounded-r-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* main body */}
                    <div className='w-full mt-2 relative'>
                        <Image src={BodyImage} alt="bodyImage" className="rounded-lg w-full object-cover xs:h-[220px]" />
                        <div className="centered-axis-xy bg-[--pure] opacity-70 h-[160px] w-[450px] sm:w-[280px] sm:h-[107px]">
                        </div>
                        <Image src={WeworkLogoFull} alt="weworkLogo" className="centered-logo sm:w-[192px]" />
                        <p className="centered-logo-text whitespace-nowrap text-xl font-extrabold text-[--dark] mt-1 text-left sm:text-sm xl:top-[60%!important]" >
                            For all the ways you work, we're here
                        </p>
                        <div className='centered-axis-x top-5 flex h-[40px] rounded-lg border border-gray-300	bg-[--pure] opacity-70 pl-2 pr-2'>
                            <button className='flex gap-1 p-2 rounded-l-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>
                                <p className='text-sm pl-1 pr-2'>1/15</p>
                            </button>
                            <hr className="bg-gray-300 w-[1px] h-[18px] mt-3 mb-3"></hr>
                            <button className='p-2 rounded-l-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>

                            </button>
                            <hr className="bg-gray-300 w-[1px] h-[18px] mt-3 mb-3"></hr>
                            <button className='p-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6" />
                                </svg>

                            </button>
                            <hr className="bg-gray-300 w-[1px] h-[18px] mt-3 mb-3"></hr>
                            <button className='p-2 rounded-r-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                                </svg>

                            </button>
                            <hr className="bg-gray-300 w-[1px] h-[18px] mt-3 mb-3"></hr>
                            <button className='p-2 rounded-r-lg'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </button>
                        </div>
                        <div className='flex gap-2 h-[40px] border-gray-300 mt-2'>
                            <div className="relative">
                                <button className='p-2 rounded-l-lg'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                    </svg>

                                </button>
                                <span className="absolute top-0 right-0 text-[.6rem] w-[20px] h-[20px] px-[3px] py-[1px] flex items-center justify-center  text-white bg-[--primary] rounded-full">{8}</span>
                            </div>
                            <hr className="bg-gray-300 w-[1px] h-[18px] mt-3 mb-3"></hr>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-[--ternary] hover:text-[--primary]">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default BodyFrame