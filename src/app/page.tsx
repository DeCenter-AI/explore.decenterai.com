import Image from 'next/image'
import { AppMetaData } from '@config/app'

export const metadata = AppMetaData
export default function Home() {
  return (
    <main className="bg-primary_13">
      Home
    </main>
  )
}
