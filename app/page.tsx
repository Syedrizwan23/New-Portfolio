import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Portfolio } from "@/components/portfolio"
// import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="px-8 min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </main>
  )
}

