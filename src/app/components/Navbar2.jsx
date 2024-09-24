'use client';import React from 'react'
import Link from 'next/link';

export default function Navbar2() {
  return (
    <div className='navbar2'>
      <div className="navbar2-blok">
        <div className="navbar2-blok__section">
          <p>11 Zulfiya Street, Bukhara 200100 Uzbekistan</p>
          <a href="tel:+998770047766" className='navbar2__hover'>+998 77-004-77-66</a>
        </div>
        <div className="navbar2-blok__section">
          <Link href='/contacts' className='navbar2__contact'>Contacts</Link>
        </div>
      </div>
    </div>
  )
}