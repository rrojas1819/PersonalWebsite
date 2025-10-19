import './styles/App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Projects />
        <Activities />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
