import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { SystemDesign } from './components/SystemDesign'
import { Certifications } from './components/Certifications'
import { GitHubActivity } from './components/GitHubActivity'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#05050a] text-slate-200 overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <SystemDesign />
        <Certifications />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
