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
      <div className='relative '>
        <Tabs defaultValue="favorites" className='flex flex-col items-center'>
          <ScrollArea className="w-[80%] max-w-[900px]  whitespace-nowrap border border-primary_7 rounded-full ">
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
            <TabsContent value={item.value} key={item.id}>
              {item.value}
            </TabsContent>
          ))}
        </Tabs>
        <div className='absolute right-0 top-3 text-xs flex gap-2 items-center text-border cursor cursor-pointer font-semibold'> View all <FaAngleDown size={15} className="pt-1" /></div>
      </div>
    </div>
  )
}

export default ExplorerTab
