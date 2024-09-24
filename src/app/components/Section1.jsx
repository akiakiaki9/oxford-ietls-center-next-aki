'use client';
import React from 'react'
import photo from '../images/section1.jpg'
import Image from 'next/image';

export default function Section1() {

  return (
    <div className='section1'>
      <div className="section1-blok">
        <div className="section1-blok__container">
          <Image src={photo} alt="" width={'500px'} height={'500px'} />
        </div>
        <div className="section1-blok__container">
          <div className='section1__title'>Learn and Grow</div>
          <br />
          <hr />
          <br />
          <div className='section1__subtitle'>
            <b>OUR STORY</b>
            <br />
            <p>This is a learning center you won't forget.</p>
          </div>
          <br />
          <p className='section1__body'>Our educators bring years of experience and a passion for teaching English.
            At "Oxford IELTS Center" they embody the principle of "innovative teaching, sustainable development," helping every student
            achieve their goals.
            <br /><br />
            Oxford IELTS Center offers both modern and traditional English language education, inspired by the rich cultural heritage of
            the English-speaking world. We base our teaching on a personalized approach and high-quality materials tailored to each
            student's level and needs.
          </p>
        </div>
      </div>
    </div>
  )
}