import Image from 'next/image'
import React from 'react'
import TitleImage from "../../public/TitleImage.png"
import WeWorkLogo from "../../public/wework.svg"
import SalesforceLogo from "../../public/salesforce.svg"
import PlusSign from "../../public/plusSign.svg"
const TopFrame = () => {
    return (
        <div >
            <div className="flex  justify-between">
                <p className="text-3xl font-bold text-[--secondary] ">WeWork + Salesforce</p>
                <button className="rounded bg-[--primary] text-white text-base pl-4 pr-4">Publish/Share</button>
            </div>
            <div className="relative">
                <Image src={TitleImage} alt="titleImage" className='w-full rounded-lg mt-5' />
                <div className="absolute top-0 right-0 bg-[--pure] opacity-70 h-full w-[45%] " style={{ clipPath: "polygon(25% 0, 100% 0, 100% 100%, 0 100%)" }}>
                </div>
                <p className="absolute top-[25%] right-[10%] text-5xl font-bold text-[--dark]">
                    Workspace  <br />
                    Proposal
                </p>
                <div className='absolute top-[75%] left-5 flex bg-[--pure] h-[100px] w-[250px] rounded-lg justify-center content-center gap-2'>
                    <Image src={WeWorkLogo} alt="weWork" />
                    <Image src={PlusSign} alt="weWork" />
                    <Image src={SalesforceLogo} alt="weWork" />
                </div>
            </div>
        </div >
    )
}

export default TopFrame