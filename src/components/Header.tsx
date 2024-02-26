import React from 'react'

import bgImage from 'public/bg.png'
import logo from 'public/dec-logo.png'
import Image from 'next/image'
const Header = () => {
  return (
    <header
      className="min-h-[400px] bg-center   bg-cover bg-no-repeat   relative"
    >

      <Image
        src="/bg.png"
        alt="Decenter ai "
        width={1440}
        height={275}
        className='max-w-full max-h-full'

      />
      <div className=" absolute  bg-black/30  inset-0 text-center flex flex-col gap-6 pt-20 pb-8 mx-auto">
        <h1 className="text-primary_2 text-center text-3xl sm:text-4xl lg:text-5xl font-logirentBold ">
          Explorer
        </h1>
        <p className="font-regular font-archivo text-primary_6  max-w-sm  sm:max-w-xl  md:max-w-2xl mx-auto text-base w-[90%] ">
          Welcome to the Explorer, the ultimate source for the latest and most advanced AI
          tools. We have gathered a comprehensive collection of innovative AI
          technologies, all in one convenient location. Whether you are a seasoned AI
          enthusiast or just starting out, the Explorer is designed to help you discover
          and utilize the most cutting-edge AI tools available.
        </p>
      </div>
    </header>
  )
}

export default Header
