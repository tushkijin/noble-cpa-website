import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noble CPA | Expert Tax Solutions for Small Businesses</title>
        <meta name="description" content="Noble Chartered Professional Accountants - Audit, Review, Compilations, Tax Preparation" />
        <meta name="keywords" content="CPA, Tax Preparation, Accounting, Langley BC" />
        <meta property="og:title" content="Noble CPA" />
        <meta property="og:description" content="Expert Tax Solutions for Small Businesses" />
      </Head>
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
