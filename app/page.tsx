import React from 'react'
import Navbar from './(components)/Navbar'
import TopFrame from './(components)/TopFrame'
import BodyFrame from './(components)/BodyFrame'

const page = () => {
  return (
    <>
      <Navbar />
      <div className="mt-[90px] ml-[30px] mr-[30px]">
        <TopFrame />
        <BodyFrame />
      </div>
    </>
  )
}

export default page