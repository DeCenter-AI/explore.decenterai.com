"use client"
import { getAllPosts } from '@/queries/getAllPosts'
import React, { useEffect, useState } from 'react'
import AiCard from './ui/aiCard'
import { getPostsByCategory } from '@/queries/getPostsByCategory'


export default function ViewPane({ selected, id }: {
    selected: string,
    id?: string
}) {

    const [data, setData] = useState([])

    const fetchPosts = async () => {
        const data = await getAllPosts()
        // console.log(data)
        setData(data)
    }

    const fetchPostByCat = async () => {
        const data = await getPostsByCategory(0, 9, selected, id ? id : "")
        // console.log(data[0].posts)
        setData(data[0].posts)
    }

    useEffect(() => {
        if (selected && selected.toUpperCase() == "ALL ITEMS") {
            fetchPosts()
        } else if (selected && selected.toUpperCase() != "ALL ITEMS") {
            fetchPostByCat()
        }
    }, [selected])

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
