import React from 'react'
import Navbar from './(components)/Navbar'
import TopFrame from './(components)/TopFrame'
import BodyFrame from './(components)/BodyFrame'

const page = () => {
  return (
    <div>
      <Navbar/>
      <div className="mt-[90px] ml-[30px] mr-[30px] sm:mt-[10px] sm:ml-[10px] sm:mr-[10px] lg:mt-[80px]">
        <TopFrame />
        <BodyFrame />
      </div>
    </div>
  )
}

export default page