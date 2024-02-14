import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import Search from './Search'

const ExplorerTab = () => {
  return (
    <div className="bg-[#19191926] text-center py-6 flex flex-col items-center gap-6">
      <Search />
      <Tabs defaultValue="account" className="">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Make changes to your account here.</TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </div>
  )
}

export default ExplorerTab