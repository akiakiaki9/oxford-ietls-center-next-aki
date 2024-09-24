import React from 'react'
import Navbar1 from './components/Navbar1'
import Navbar2 from './components/Navbar2'
import Header1 from './components/Header1'
import Section1 from './components/Section1'
import Teachers from './components/Teachers'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
import Map from './components/Map'
import Footer1 from './components/Footer1'
import Footer2 from './components/Footer2'
import RegistrationForm from './components/RegistrationForm'
import ScrollTop from './components/ScrollTop'
import Section from './components/Section'
import Testimonials from './components/Testimonials'
import Head from 'next/head'

export const metadata = {
  title: 'Oxford IELTS Center - Leader in IELTS and CEFR Preparation in Bukhara',
  description: 'Welcome to Oxford IELTS Center! We offer quality education and preparation for IELTS and CEFR exams to help you achieve high results.',
  keywords: 'Oxford IELTS Center, Bukhara, IELTS, CEFR, English courses, exam preparation, educational center',
  robots: 'index, follow',
  ogTitle: 'Oxford IELTS Center - IELTS and CEFR Training',
  ogDescription: 'Professional preparation for IELTS and CEFR exams in Bukhara. Enroll in our courses and open up new opportunities!',
  ogUrl: 'https://yourwebsite.com', // replace with your actual homepage URL
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Oxford IELTS Center - Preparation for IELTS and CEFR',
  twitterDescription: 'Learn about our courses and enroll for training at Oxford IELTS Center.',
};

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.ogUrl} />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:locale" content={metadata.ogLocale} />
        <meta name="twitter:card" content={metadata.twitterCard} />
        <meta name="twitter:title" content={metadata.twitterTitle} />
        <meta name="twitter:description" content={metadata.twitterDescription} />
      </Head>
      <Navbar2 />
      <Navbar1 />
      <Header1 />
      <Section />
      <Section1 />
      <RegistrationForm />
      <Teachers />
      <Section2 />
      <Section3 />
      <Testimonials />
      <Map />
      <Footer1 />
      <Footer2 />
      <ScrollTop />
    </>
  )
};