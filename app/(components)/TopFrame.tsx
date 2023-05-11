import Image from 'next/image'
import React from 'react'
import TitleImage from "../../public/TitleImage.png"
import WeWorkLogo from "../../public/wework.svg"
import SalesforceLogo from "../../public/salesforce.svg"
import PlusSign from "../../public/plusSign.svg"
import "./topframe.css"
const TopFrame = () => {
    return (
        <>
            {/*  */}
            <div className="flex justify-between">
                <p className="text-3xl font-black text-[--secondary] align-middle xs:text-lg sm:text-xl sm:pt-0 lg:text-2xl lg:pt-2 xl:text-4xl">WeWork + Salesforce</p>
                <button
                    className="rounded bg-[--primary] text-white text-base font-bold xs:text-xs xs:pl-3 xs:pr-3 sm:pl-4 sm:pr-4 sm:text-sm sm:pt-0 sm:pb-0 lg:text-lg lg:pl-6 lg:pr-6 lg:pt-2 lg:pb-2 xl:text-xl pl-2 pr-2"
                >
                    Publish/Share
                </button>
            </div>
            {/* Outer div serves as a relative container for absolute children elements, i.e., Logo Images, Logo text and a opaque diagonally cut rectangular shape*/}
            <div className="relative">
                <Image src={TitleImage} alt="titleImage" className='w-full rounded-lg mt-5 object-cover xs:h-[82px] sm:h-[95px] lg:h-[140px]' />
                <div className="absolute top-0 right-0 bg-[--pure] opacity-70 h-full w-[45%] " style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}>
                    <p className="centered-title-text text-5xl font-black text-[--dark] xs:text-base xs:right-[0px!important] sm:text-lg lg:text-2xl xl:text-4xl">
                        Workspace<br />
                        Proposal
                    </p>
                </div>
                <div className='absolute top-[70%] left-5 flex bg-[--pure] h-[100px] w-[250px] rounded-lg justify-center content-center gap-2 xs:w-[120px] xs:h-[50px] sm:w-[150px] sm:h-[65px] lg:w-[180px] lg:h-[75px]'>
                    <Image src={WeWorkLogo} alt="weWork" className='xs:w-[40px] sm:w-[50px] lg:w-[53.37px]'/>
                    <Image src={PlusSign} alt="weWork" className='xs:w-[8.25px] sm:w-[8.5px] lg:w-[12.13px]'/>
                    <Image src={SalesforceLogo} alt="weWork" className='xs:w-[40px] sm:w-[50px] lg:w-[68.71px]'/>
                </div>
            </div>
        </>
    )
}

export default TopFrame