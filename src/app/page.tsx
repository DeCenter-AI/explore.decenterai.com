import Image from 'next/image'
import { AppMetaData } from '@config/app'
import ExplorerTab from '@/components/ExplorerTab'
import Header from '@/components/Header'
import Nav from '@/components/Nav'

export const metadata = AppMetaData
export default function Home() {
  return (
    <main className="bg-primary_13">
     
      <Header />
      <ExplorerTab />
    </main>
  )
}
