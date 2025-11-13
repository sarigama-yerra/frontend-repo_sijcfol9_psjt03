import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bento from './components/Bento'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Bento />
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
