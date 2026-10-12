import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'
import { HomePage } from '@/pages/home'

export function App() {
  return (
    <>
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </>
  )
}
