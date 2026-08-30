import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Process from '../components/Process'
import Stats from '../components/Stats'
import Team from '../components/Team'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Noble CPA | Premium Accounting & Tax Services | Langley BC</title>
        <meta name="description" content="Expert accounting, tax preparation, audits, and business consulting. Premium CPA services for small businesses in Langley, BC. Led by Tushar Jindal, CPA." />
        <meta name="keywords" content="CPA, Tax Preparation, Accounting Services, Audit, Langley BC, Small Business" />
        <meta property="og:title" content="Noble CPA | Professional Accounting Services" />
        <meta property="og:description" content="Expert tax and accounting solutions for growing businesses" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Team />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
