import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Search from './Search'

const ExplorerTab = () => {
  return (
    <div className="bg-[#19191926] text-center py-6">
      <Search />
      <Tabs defaultValue="favorite" className="w-[400px] ">
        <TabsList className="bg-card text-[#C1C1C1]   border-[#232323]">
          <TabsTrigger value="favorite">Favorite</TabsTrigger>
          <TabsTrigger value="password">All</TabsTrigger>
        </TabsList>
        <TabsContent value="favorite">Make changes to your account here.</TabsContent>
        <TabsContent value="all">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default ExplorerTab