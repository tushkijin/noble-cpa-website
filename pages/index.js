import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Specialties from '../components/Specialties'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noble CPA | Professional Accounting & Tax Services in Langley BC</title>
        <meta name="description" content="Expert accounting, tax preparation, audits, and reviews for small businesses in Langley, BC. Led by CPA Tushar Jindal." />
        <meta name="keywords" content="CPA, Tax Preparation, Accounting, Audits, Langley BC, Small Business" />
        <meta property="og:title" content="Noble CPA | Tax & Accounting Services" />
        <meta property="og:description" content="Expert accounting and tax solutions for small businesses" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <Specialties />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
