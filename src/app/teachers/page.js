import React from 'react';
import Head from 'next/head';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Title from '../components/Title';
import Teachers from '../components/Teachers';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import ScrollTop from '../components/ScrollTop';

export const metadata = {
  title: 'Teachers of Oxford IELTS Center - Meet Our Team',
  description: 'Learn about the teachers at Oxford IELTS Center in Bukhara. Our experienced instructors will help you prepare for the IELTS and CEFR exams.',
  keywords: 'teachers, Oxford IELTS Center, IELTS, CEFR, Bukhara, English language, courses',
  robots: 'index, follow',
  canonical: 'https://yourwebsite.com/teachers',
  ogTitle: 'Teachers of Oxford IELTS Center',
  ogDescription: 'Meet our team of teachers at Oxford IELTS Center. We offer courses for IELTS and CEFR preparation in Bukhara.',
  ogUrl: 'https://yourwebsite.com/teachers',
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Teachers of Oxford IELTS Center',
  twitterDescription: 'Learn about our team of teachers and their experience at Oxford IELTS Center.'
};

export default function Teacher() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <link rel="canonical" href={metadata.canonical} />
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
      <Title />
      <Teachers />
      <Footer1 />
      <Footer2 />
      <ScrollTop />
    </div>
  );
}
