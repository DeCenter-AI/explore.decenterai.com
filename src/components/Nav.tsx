import React from 'react'
import logo from 'public/dec-logo.png'
import Image from 'next/image'
import Link from 'next/link'
const Nav = () => {
  return (
    <div className='w-[90%] md:w-[80%] mx-auto my-4'>
      <Link href={"/"}><Image src={logo} alt="DecenterAi logo" /></Link>
    </div>
  )
}
export default Nav
