/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import BodyImage from "../../public/bodyImage.svg"
import WeworkLogoFull from "../../public/wework-logo-full.svg"
const BodyFrame = () => {
    return (
        <>
            {/* middle body part */}
            <div className="flex justify-between content-center mt-20">
                <p className="text-2xl font-bold text-[--title]">Project Scope Recap</p>
                <div className="relative w-[200px]">
                    <div className='absolute top-[-13px] w-[200px] flex justify-between content-center'>
                        <p className="text-base	text-[--light-gray]">Mutual Actions Plan</p>
                        <p className="text-base	text-[--primary] font-bold">3%</p>
                    </div>
                    <div className="mt-[7%] flex gap-1 top-[45%] w-[200px] h-[8px] rounded-lg">
                        <div className="h-full w-4 bg-[--primary] rounded-l-lg" ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-3 bg-[--placeholder-gray] " ></div>
                        <div className="h-full w-4 bg-[--placeholder-gray] rounded-r-lg" ></div>
                    </div>
                </div>
            </div>
            {/* middle buttons */}
            <div className="flex justify-between mt-5">
                <div className="flex w-[450px] h-[40px] gap-2">
                    <button className="w-[100%] p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 whitespace-nowrap text-[--primary] font-bold">Basic Info</button>
                    <button className="w-[60%] p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 whitespace-nowrap text-[--ternary] font-bold hover:text-[--primary]">Files</button>
                    <button className="w-[180%] p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 whitespace-nowrap text-[--ternary] font-bold hover:text-[--primary]">Mutual Action Plan</button>
                    <button className="w-[80%] p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 whitespace-nowrap text-[--ternary] font-bold hover:text-[--primary]">Contact</button>
                </div>
                <button className="w-[150px] p-[6px] rounded-t-[5px] outline outline-1 outline-gray-400 text-[--ternary] font-bold hover:text-[--primary]">Internal Actions</button>
            </div>
            <hr className="border-gray-200 ml-7 mr-7"></hr>
            {/* main body */}
            <div className='flex mt-5 mb-5'>
                {/* Left button Panel */}
                <div className='flex-[1] bg-[--pure] rounded-lg h-[320px]'>
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
                <div className='flex-[10] ml-5'>
                    {/* top part */}
                    <div className='flex justify-between'>
                        <p className='font-bold text-2xl text-[--title]'>
                            Company profile
                        </p>
                        <div className='flex h-[40px] rounded-lg border border-gray-300	'>
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
                        <Image src={BodyImage} alt="bodyImage" className="rounded-lg w-full" />
                        <div className="absolute top-[35%] right-[32%] bg-[--pure] opacity-70 h-[150px] w-[450px] ">
                        </div>
                            <Image src={WeworkLogoFull} alt="weworkLogo" className="absolute top-[40%] right-[37%]"/>
                            <p className="absolute top-[55%] right-[35%] text-xl font-bold text-[--dark] mt-1 text-left" >For all the ways you work, we're here</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BodyFrame