import Image from 'next/image'
import React from 'react'
import TitleImage from "../../public/TitleImage.png"
import WeWorkLogo from "../../public/wework.svg"
import SalesforceLogo from "../../public/salesforce.svg"
import PlusSign from "../../public/plusSign.svg"
import "./topframe.css"
const TopFrame = () => {
    return (
        <div>
            <div className="flex justify-between">
                <p className="text-3xl font-black text-[--secondary] xs:text-lg sm:text-xl lg:text-2xl xl:text-4xl">WeWork + Salesforce</p>
                <button
                    className="rounded bg-[--primary] text-white text-base font-bold xs:text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl pl-2 pr-2 xs:pl-3 xs:pr-3 sm:pl-4 sm:pr-4 lg:pl-6 lg:pr-6"
                >
                    Publish/Share
                </button>
            </div>
            <div className="relative">
                <Image src={TitleImage} alt="titleImage" className='w-full rounded-lg mt-5 object-cover xs:h-[82px]' />
                <div className="absolute top-0 right-0 bg-[--pure] opacity-70 h-full w-[45%] " style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}>
                    <p className="centered-title-text text-5xl font-black text-[--dark] xs:text-base xs:right-[0px!important] sm:text-base lg:text-2xl xl:text-4xl">
                        Workspace  <br />
                        Proposal
                    </p>
                </div>
                <div className='absolute top-[70%] left-5 flex bg-[--pure] h-[100px] w-[250px] rounded-lg justify-center content-center gap-2 lg:w-[180px] lg:h-[70px] sm:w-[120px] sm:h-[50px]'>
                    <Image src={WeWorkLogo} alt="weWork" className='sm:w-[40px] lg:w-[53.37px]'/>
                    <Image src={PlusSign} alt="weWork" className='sm:w-[8.25px] lg:w-[12.13px]'/>
                    <Image src={SalesforceLogo} alt="weWork" className='sm:w-[40px] lg:w-[68.71px]'/>
                </div>
            </div>
        </div >
    )
}

export default TopFrame