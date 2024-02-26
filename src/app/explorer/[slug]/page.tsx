"use client"
import React, { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { useSearchParams } from 'next/navigation';
import { getPostBySlug } from '@/queries/getPostBySlug';
import { Post } from '@/app/types/Posts';
import { PortableText, PortableTextComponents } from '@portabletext/react'
import Link from 'next/link';
import { urlFor } from '@/lib/sanity';
import { FaXTwitter } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { PiTelegramLogoLight } from "react-icons/pi";
import { CiLinkedin } from "react-icons/ci";
import ViewPane from '@/components/ViewPane';
import Nav from '@/components/Nav';
import Footer from '@/components/ui/footer';


const components: PortableTextComponents = {
    list: {
        // Ex. 1: customizing common list types
        bullet: ({ children }) => <ul className="mt-xl list-disc text-sm px-4 text-neutral-400">{children}</ul>,
        number: ({ children }) => <ol className="mt-lg list-decimal text-sm px-4 text-neutral-400">{children}</ol>,

        // Ex. 2: rendering custom lists
        checkmarks: ({ children }) => <ol className="m-auto text-lg">{children}</ol>,

    },
    // headers
    block: {
        h1: ({ children }) => <h1 className="text-3xl font-light text-neutral-300 ">{children}</h1>,
        h2: ({ children }) => <h1 className="text-2xl font-light  text-neutral-300">{children}</h1>,
        h3: ({ children }) => <h1 className="text-xl font-light  text-neutral-300">{children}</h1>,
        h4: ({ children }) => <h1 className="text-md font-light  text-neutral-300">{children}</h1>,
        h5: ({ children }) => <h1 className="text-md font-light  text-neutral-300">{children}</h1>,
        h6: ({ children }) => <h1 className="text-sm font-light  text-neutral-300">{children}</h1>
    }
}
export default function Page({ params }: { params: { slug: string } }) {
    const searchParams = useSearchParams()
    const category = searchParams.get('category');
    const [data, setData] = useState<Post | null>(null)

    const fetchPosts = async () => {
        const data: Post = await getPostBySlug(params.slug, category ? category : "")
        setData(data)
    }

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <>
            <Nav />
            {/* This should be split into individual components... */}
            <div className='w-[90%] md:w-[80%] flex flex-col gap-8 mx-auto mt-4  mb-12'>
                <header
                    className="h-[150px]  bg-center   bg-cover bg-no-repeat   relative"
                >

                    <Image
                        src="/detailBg.png"
                        alt="Decenter ai "
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top"
                    />
                    <div className=" absolute   inset-0  text-center flex flex-col gap-6 justify-center mx-auto">
                        <h1 className="text-primary_2 text-center text-3xl sm:text-4xl lg:text-5xl font-logirentBold ">
                            Explorer
                        </h1>
                    </div>
                </header>
                <div className='flex items-center gap-7'>
                    <div className='flex gap-2 cursor-pointer items-center'>
                        <IoIosArrowBack />
                        <Link href={"/"}>  <span className='text-primary_7'>Back</span></Link>
                    </div>
                    <div>
                        <span className='text-primary_7'>Explorer / <span className='font-bold text-primary_6'>{data?.title}</span></span>
                    </div>

                </div>
                <div className='border border-primary_11 p-5 flex items-center justify-between rounded-2xl'>
                    <div>
                        <div className='md:flex items-center gap-2 '>
                            <h1 className='font-logirentBold text-2xl'>{data?.title}</h1>
                            <span className='p-1 border border-primary_11 text-xs rounded-full'>{data?.description}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 text-primary_8'>

                        {/* <GrFavorite />
                        <span className='text-sm'>127</span> */}
                    </div>


                </div>
                <div className='md:flex gap-5  '>

                    <div className='md:w-[15%]  flex flex-col gap-3'>
                        <div className='flex justify-center'>

                            {data && <Image priority className='min-h-full min-w-full rounded-md' alt='' layout='intrinsic' width={154} height={144} src={urlFor(data?.mainImage).url()} />}
                        </div>
                        <Link href={`${data?.website}`} target='_blank'><div className='flex items-center py-2 text-center justify-between bg-primary_11 rounded-xl px-3'>
                            <span className='text-sm '>Visit Website</span>
                            <Image priority src="/arrow_icon.png" alt='' className='pt-1' width={24} height={24} />

                        </div></Link>


                        <div className='flex justify-between text-md text-neutral-500 py-3'>
                            {data?.discord && <Link href={`${data?.discord}`} target='_blank'> <RiDiscordLine size={18} /></Link>}
                            {data?.linkedin && <Link href={`${data?.linkedin}`} target='_blank'> <CiLinkedin size={18} /></Link>}
                            {data?.telegram && <Link href={`${data?.telegram}`} target='_blank'> <PiTelegramLogoLight size={18} /></Link>}
                            {data?.xapp && <Link href={`${data?.xapp}`} target='_blank'><FaXTwitter size={15} /></Link>}
                        </div>
                    </div>
                    <div className='md:w-[85%] border flex mt-4 md:mt-0 flex-col gap-7 rounded-md border-primary_11 py-5 px-4'>
                        <div>
                            <h2 className='mb-4 '>About</h2>
                            <span className='text-primary_7 text-sm'>
                                {data?.about && <PortableText value={data?.about} />}
                            </span>
                        </div>
                        <div>
                            <h2 className='mb-4 '>How to use</h2>
                            <div className='flex flex-col gap-4'>
                                {data?.usage && <PortableText value={data?.usage} components={components} />}
                            </div>

                        </div>

                        <div>
                            <h2 className='mb-4 '>Prompts to use</h2>
                            <div className='flex flex-col gap-4'>
                                {data?.prompts && <PortableText value={data?.prompts} components={components} />}
                            </div>

                        </div>

                    </div>

                </div>
                yy
                <div className='mt-10'>
                    <h1 className='font-logirentBold text-sm font-semibold text-center'>Similar Tools</h1>
                    <div className='w-full py-10'>
                        <ViewPane selected={data ? data?.cat[0].title : "ALL ITEMS"} id={data ? data?._id : ""} />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}
