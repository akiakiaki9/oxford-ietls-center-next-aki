import React from 'react';
import Navbar1 from '../components/Navbar1';
import Navbar2 from '../components/Navbar2';
import Title from '../components/Title';
import Footer1 from '../components/Footer1';
import Footer2 from '../components/Footer2';
import ScrollTop from '../components/ScrollTop';

export const metadata = {
  title: 'Oxford IELTS Center - About Us',
  description: 'Learn about Oxford IELTS Center, a leading educational center in Bukhara specializing in IELTS and CEFR exam preparation. Discover our mission, benefits, programs, and achievements.',
  keywords: 'Oxford IELTS Center, Bukhara, IELTS, CEFR, English language, English exam preparation, language courses, educational center',
  robots: 'index, follow',
  ogTitle: 'Oxford IELTS Center - About Us',
  ogDescription: 'Explore the mission and achievements of Oxford IELTS Center, your partner in IELTS and CEFR preparation in Bukhara.',
  ogUrl: 'https://yourwebsite.com/about', // replace with your actual about page URL
  ogType: 'website',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Oxford IELTS Center - About Us',
  twitterDescription: 'Discover the vision and success stories of our students at Oxford IELTS Center.',
};

export default function AboutUs() {
  return (
    <div>
      <head>
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
      </head>
      <Navbar1 />
      <Navbar2 />
      <Title />
      <div className='about-us'>
        <div className="about-us-block">
          <h1>About Us</h1>
          <p>Welcome to Oxford IELTS Center — the leading educational center in Bukhara specializing in preparing for international exams
            IELTS and CEFR. We take pride in being a reliable partner for everyone who strives to improve their English proficiency and achieve outstanding results in exams.
          </p>
          <br />
          <h1>Our Mission</h1>
          <p>At Oxford IELTS Center, our main goal is to help each student unlock their potential and achieve success. We understand that
            learning English is not just exam preparation but an important step toward expanding opportunities for education,
            career, and personal development. We aim to provide students with quality education and create conditions conducive to their success.
          </p>
          <br />
          <h1>The Benefits of Studying with Us</h1>
          <ol>
            <li>
              <p><b>Professional Teachers</b><br />
                Our teachers are highly qualified professionals with many years of experience in preparing for IELTS
                and CEFR exams. They not only possess deep knowledge of the language but also use modern teaching methods, enabling our
                students to quickly and effectively grasp the material.
              </p>
            </li>
            <li>
              <p><b>Individual Approach</b><br />
                At Oxford IELTS Center, we understand that each student is unique. Therefore, we develop individual study programs
                that consider the language proficiency level, goals, and needs of each student. We pay special attention to weak points,
                helping to turn them into strengths.
              </p>
            </li>
            <li>
              <p><b>Modern Methods and Materials</b><br />
                We use only up-to-date study materials and the latest teaching methods that meet international standards.
                Our study programs are constantly updated to keep pace with changes in exam formats and the requirements of modern educational standards.
              </p>
            </li>
            <li>
              <p><b>Support and Motivation</b><br />
                During the learning process, we provide our students with comprehensive support. Our teachers are always ready to help with any questions
                and maintain high motivation levels. We strive to create an environment where each student feels confident and motivated.
              </p>
            </li>
            <li>
              <p><b>Excellent Results</b><br />
                We are proud of our students' successes. Most of them achieve high scores in exams and easily overcome language barriers,
                opening up new opportunities for themselves. Our graduates successfully enter prestigious universities, build successful careers,
                and continue their development.
              </p>
            </li>
          </ol>
          <br /><br />

          <h1>Our Programs</h1>
          <p>Oxford IELTS Center offers a wide range of programs, including:</p><br />
          <ul>
            <li>Preparation for IELTS exams (Academic and General Training)</li>
            <li>Preparation for CEFR exams (levels from A1 to C2)</li>
            <li>Individual lessons</li>
            <li>Group courses</li>
            <li>Intensive courses</li>
          </ul>
          <br />
          <p>We offer flexible schedules to make learning convenient for every student.</p>
          <br /><br />

          <h1>Our Achievements</h1>
          <p>Over the years, Oxford IELTS Center has become a recognized leader in preparing for IELTS and CEFR exams in Bukhara. We have helped
            hundreds of students achieve their goals and continue to improve our methods to ensure even higher results.
          </p>
          <br /><br />

          <h1>We Invite You to Join Our Successful Team</h1>
          <p>If you are determined to achieve high results in learning English and pass international exams with excellent scores,
            Oxford IELTS Center is your best choice. Join us, and we will help you achieve your dreams.
          </p>
          <br />
          <b>Contact us today to learn more about our programs and sign up for your first lesson. We look forward to welcoming you
            at Oxford IELTS Center — the place where success begins!
          </b>

        </div>
      </div>
      <Footer1 />
      <Footer2 />
      <ScrollTop />
    </div>
  );
}
