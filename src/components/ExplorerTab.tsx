import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Search from './Search'
import { tabsData } from '@/data/tabsData'

const ExplorerTab = () => {
  return (
    <div className="bg-[#19191926] text-center py-6 flex flex-col items-center gap-6">
      <Search />
      <div>
        <Tabs defaultValue="favorites" className="">
          <TabsList>
            {tabsData.map((item) => (
              <TabsTrigger value={item.value} key={item.id} className='flex flex-row gap-1 items-center'>
                {item.icon}
                {item.value}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabsData.map((item) => (
            <TabsContent value={item.value} key={item.id}>
              {item.value}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

export default ExplorerTab
