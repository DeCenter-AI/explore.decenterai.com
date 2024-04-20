"use client"
import React, { Suspense, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FaAngleDown } from "react-icons/fa6";
import Search from './Search'
import { tabsData } from '@/data/tabsData'
import ViewPane from './ViewPane';
import SearchViewPane from './SearchViewPane';

const ExplorerTab = () => {
  const [searchText, setSearchText] = useState<string>("")

  return (
    <div className=" text-center pb-6 flex flex-col items-center gap-6">

      <Search setSearchText={setSearchText} />
      <div className='relative w-full '>
        {/* <div className='absolute 2xl:hidden  top-14 left-5 lg:left-20 text-xs flex gap-2 items-center text-border cursor cursor-pointer font-semibold'> View all <FaAngleDown size={15} className="pt-1" /></div> */}
        <Tabs defaultValue="All items" className='flex flex-col items-center w-full'>
          <ScrollArea className="w-[95%] max-w-[900px]  whitespace-nowrap border border-primary_7 rounded-full ">
            <TabsList className='border-none'>
              {tabsData.map((item) => (
                <TabsTrigger value={item.value} key={item.id} className='flex flex-row gap-1 items-center'>
                  {item.icon}
                  {item.value}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" className="text-red-300" />
          </ScrollArea>
          {tabsData.map((item) => (
            <TabsContent className='pt-10 ' value={item.value} key={item.id}>
              {searchText.length == 0 &&
                <Suspense>
                  <ViewPane selected={item.value} />
                </Suspense>
              }
              {searchText.length > 0 && <SearchViewPane text={searchText} />}
            </TabsContent>
          ))}
        </Tabs>
        {/* <div className='absolute  lg:right-56  hidden top-3 text-xs  2xl:flex gap-2 items-center text-border cursor cursor-pointer font-semibold'> View all <FaAngleDown size={15} className="pt-1" /></div> */}
      </div>
    </div>
  )
}

export default ExplorerTab
