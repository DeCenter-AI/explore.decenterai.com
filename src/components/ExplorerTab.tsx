import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const ExplorerTab = () => {
  return (
    <Tabs defaultValue="favorite" className="w-[400px] ">
      <TabsList className="bg-card text-[#C1C1C1]   border-[#232323]">
        <TabsTrigger value="favorite">Favorite</TabsTrigger>
        <TabsTrigger value="password">All</TabsTrigger>
      </TabsList>
      <TabsContent value="favorite">Make changes to your account here.</TabsContent>
      <TabsContent value="all">Change your password here.</TabsContent>
    </Tabs>
  )
}

export default ExplorerTab