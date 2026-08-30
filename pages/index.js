import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Interactive from '../components/Interactive'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight
        const elementTop = element.getBoundingClientRect().top
        if (elementTop < windowHeight - 100) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Call once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Head>
        <title>Noble CPA | Modern Accounting & Tax Services | Langley BC</title>
        <meta name="description" content="Premium accounting, tax preparation, and business consulting for forward-thinking companies. Expert CPA services in Langley, BC." />
        <meta name="keywords" content="CPA, Tax Services, Accounting, Business Consulting, Langley BC" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <Interactive />
      <Stats />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
