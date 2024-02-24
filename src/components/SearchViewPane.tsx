"use client"
import React, { useEffect, useState } from 'react'
import AiCard from './ui/aiCard'
import { searchPosts } from '@/queries/searchPosts'


export default function SearchViewPane({ text }: {
    text: string
}) {

    const [data, setData] = useState([])

    const fetchPosts = async () => {
        const data = await searchPosts(text + "*")
        // console.log(data)
        data && setData(data)
    }

    useEffect(() => {
        if (text.length > 0) {
            fetchPosts()
        }
    }, [text])

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mb-14'>
            {
                data.map((detail, idx) => (
                    <AiCard key={idx} detail={detail} />
                ))
            }

            {data && data?.length == 0 && <small className='text-neutral-400 text-center w-full '>No tools found</small>}

        </div>
    )
}
