import React from 'react';
import Head from 'next/head';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Title from '../components/Title';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import ScrollTop from '../components/ScrollTop';
import { NEWS } from '../utils/news';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'News Oxford IELTS Center - Stay Updated',
  description: 'Follow the latest news from Oxford IELTS Center in Bukhara. Learn about our courses, events, and updates in IELTS and CEFR preparation.',
  keywords: 'news, Oxford IELTS Center, IELTS, CEFR, Bukhara, educational center, English courses',
  robots: 'index, follow',
  canonical: 'https://yourwebsite.com/news',
  ogTitle: 'News Oxford IELTS Center',
  ogDescription: 'Get the latest news and events from Oxford IELTS Center. We offer IELTS and CEFR preparation courses in Bukhara.',
  ogUrl: 'https://yourwebsite.com/news',
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'News Oxford IELTS Center',
  twitterDescription: 'Stay updated with the latest news and events at Oxford IELTS Center. Learn more about our courses and activities.'
};

export default function News() {
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
      <div className='news'>
        <div className="news-blok">
          <div className="news-blok__container">
            {NEWS.map(news => (
              <div key={news.id} className='new'>  
                <div className="new-blok">
                  <div className="new-blok__container-1">
                    <Image src={news.photo} alt={news.title} height={500} width={500} />
                  </div>
                  <div className="new-blok__container-2">
                    <p className='new__date'>{news.date}</p>
                    <p className='new__title'>{news.title}</p>
                    <p className='new__subtitle'>{news.subtitle}</p>
                    <Link href={`/news/${news.id}`}>READ MORE</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
      <ScrollTop />
    </div>
  );
}
