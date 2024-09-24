import React from 'react';
import Head from 'next/head';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Title from '../components/Title';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import ScrollTop from '../components/ScrollTop';
import GalleryArt from '../components/GalleryArt';

export const metadata = {
  title: 'Gallery - Oxford IELTS Center',
  description: 'Explore the photo gallery of Oxford IELTS Center to experience the atmosphere and events of our educational center in Bukhara.',
  keywords: 'gallery, photos, educational center, IELTS, CEFR, Bukhara',
  robots: 'index, follow',
  ogTitle: 'Gallery - Oxford IELTS Center',
  ogDescription: 'Discover the vibrant moments and events at Oxford IELTS Center through our photo gallery.',
  ogUrl: 'https://yourwebsite.com/gallery', // replace with your actual gallery URL
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Gallery - Oxford IELTS Center',
  twitterDescription: 'Check out the gallery of Oxford IELTS Center to see our events and activities.',
};

export default function Gallery() {
  return (
    <div>
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
      <Navbar1 />
      <Navbar2 />
      <Title />
      <GalleryArt />
      <Footer1 />
      <Footer2 />
      <ScrollTop />
    </div>
  );
}
