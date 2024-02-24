import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { FaAngleDown } from "react-icons/fa6";
import Search from './Search'
import { tabsData } from '@/data/tabsData'

const ExplorerTab = () => {
  return (
    <div className=" text-center py-6 flex flex-col items-center gap-6">
      <Search />
      <div className='relative w-full max-w-[900px]'>
        <div className='absolute lg:hidden  top-14 left-5 lg:left-20 text-xs flex gap-2 items-center text-border cursor cursor-pointer font-semibold'> View all <FaAngleDown size={15} className="pt-1" /></div>
        <Tabs defaultValue="favorites" className='flex flex-col items-center w-full'>
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
            <TabsContent className='pt-10' value={item.value} key={item.id}>
              {item.value}
            </TabsContent>
          ))}
        </Tabs>
        <div className='absolute lg:-right-14 hidden top-3 text-xs  lg:flex gap-2 items-center text-border cursor cursor-pointer font-semibold'> View all <FaAngleDown size={15} className="pt-1" /></div>
      </div>
    </div>
  )
}

export default ExplorerTab
