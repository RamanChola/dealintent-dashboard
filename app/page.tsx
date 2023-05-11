import React from 'react'
import Navbar from './(components)/Navbar'
import TopFrame from './(components)/TopFrame'
import BodyFrame from './(components)/BodyFrame'

const page = () => {
  return (
    <div>
            {/* <div className="ml-5 w-[350px] bg-red-500 h-[600px]"></div>/ */}
      <Navbar/>
      <div className="mt-[90px] ml-[30px] mr-[30px] xs:mt-[10px] xs:ml-[10px] xs:mr-[10px]">
        <TopFrame />
        <BodyFrame />
      </div>
    </div>
  )
}

export default page