"use client"
import { getAllPosts } from '@/queries/getAllPosts'
import React, { useEffect, useState } from 'react'
import AiCard from './ui/aiCard'
import { getPostsByCategory } from '@/queries/getPostsByCategory'
import { useSearchParams } from 'next/navigation'
export default function ViewPane({ selected, id }: {
    selected: string,
    id?: string
}) {

    const [data, setData] = useState([])
    const searchParams = useSearchParams()

    const category = searchParams.get('category')


    const fetchPosts = async () => {
        const data = await getAllPosts()
        // console.log(data)
        data && setData(data)
    }

    const fetchPostByCat = async () => {
        console.log(selected)
        const data = await getPostsByCategory(0, 9, selected.toUpperCase(), id ? id : "")
        console.log(data)
        data && setData(data[0].posts)
    }

    useEffect(() => {
        setData([])
        selected = category ? category : selected
        if (selected && selected.toUpperCase() == "ALL ITEMS") {
            fetchPosts()
        } else if (selected && selected.toUpperCase() != "ALL ITEMS") {
            fetchPostByCat()
        }
    }, [selected, category])

    return (
        <div className='grid grid-cols-1  gap-10  sm:mb-14 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-4    '>
            {
                data.map((detail, idx) => (
                    <AiCard key={idx} detail={detail} />
                ))
            }

            {data && data?.length == 0 && <small className='text-neutral-400 text-center w-full '>No tools found</small>}

        </div>
    )
}
