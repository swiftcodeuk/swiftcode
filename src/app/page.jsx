import { CallToAction } from '@/components/CallToAction'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Grid } from '@/components/grid'


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <PrimaryFeatures />
        <Grid />
      
        <Testimonials />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
