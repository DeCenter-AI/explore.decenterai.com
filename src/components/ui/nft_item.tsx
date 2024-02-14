import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NftCard() {
    return (
        <div className='max-w-[200px] flex flex-col border  px-6 py-4 rounded-3xl gap-3 border-primary_11 '>
            <div className=''>
                <Image alt='' width={154} height={144} src='/Component 18.png' />
            </div>
            <div className='flex gap-4 flex-col'>
                <div className=' '>
                    <span className='text-xs text-primary_7 bg-primary_12 px-2 rounded-2xl py-1 text-center '>Ai category name</span>
                </div>
                <div className='flex justify-between items-center'>
                    <div>
                        <span className='text-lg font-medium'>Jasper</span>
                    </div>
                    <Link href="">
                        <Image src="/arrow_icon.png" alt='' className='pt-1' width={24} height={24} />
                    </Link>

                </div>
            </div>

        </div>
    )
}
