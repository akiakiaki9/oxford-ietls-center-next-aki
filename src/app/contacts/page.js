import Head from 'next/head';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Title from '../components/Title';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import Map from '../components/Map';
import ContactForm from '../components/ContactForm';
import ScrollTop from '../components/ScrollTop';

export const metadata = {
  title: 'Contacts of Oxford IELTS Center - Get in Touch Today',
  description: 'Contact Oxford IELTS Center in Bukhara for IELTS and CEFR exam preparation. Ask any questions about our courses, schedules, and services.',
  keywords: 'Oxford IELTS Center, contacts, IELTS, CEFR, Bukhara, English courses, exam preparation, educational center',
  robots: 'index, follow',
  canonical: 'https://yourwebsite.com/contacts',
  ogTitle: 'Contacts of Oxford IELTS Center',
  ogDescription: 'Get in touch for information about IELTS and CEFR preparation courses. We are located in Bukhara and offer quality exam preparation.',
  ogUrl: 'https://yourwebsite.com/contacts',
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Contacts of Oxford IELTS Center',
  twitterDescription: 'Contact Oxford IELTS Center for information about IELTS and CEFR preparation courses. We are located in Bukhara.'
};

export default function Contacts() {
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

      <Navbar1 />
      <Navbar2 />
      <Title />
      <ContactForm />
      <Map />
      <Footer1 />
      <Footer2 />
      <ScrollTop />
    </div>
  );
}


