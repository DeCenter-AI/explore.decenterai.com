import React from 'react'
import logo from 'public/dec-logo.png'
import Image from 'next/image'
const Nav = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto my-4'>
      <Image src={logo} alt="DecenterAi logo" />
    </div>
  )
}
export default Nav
