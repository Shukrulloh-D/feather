import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { HomePage } from '@/pages/home'

export function App() {
  return (
    <>
      <Header />
      {/* Семантический main для основного контента */}
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}
