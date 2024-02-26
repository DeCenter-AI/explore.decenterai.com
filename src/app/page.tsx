import ExplorerTab from '@/components/ExplorerTab'
import Header from '@/components/Header'
import Nav from '@/components/Nav'
import AiCard from '@/components/ui/aiCard'
import Footer from '@/components/ui/footer'

export default function Home() {
  return (
    <main className="bg-primary_13 ">
      <Nav />
      <Header />
      <ExplorerTab />

      <Footer />

    </main>
  )
}
