'use client';

import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { ImTelegram } from "react-icons/im";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer1() {
  return (
    <div className='footer1'>
      <div className="footer1-blok">
        <div className="footer1-blok__section-1">
          <p className='footer1__title'>Contact Us</p>
          <p>11 Zulfiya Street, Bukhara 200100 Uzbekistan</p>
          <a href='tel:+998770047766' className='footer1__link'>+998 77-004-77-66</a>
          <p>Mon - Fri: 08:00 am - 10:00 pm</p>
          <p>Sat - Sun: 10:00 am - 11:00 pm</p>
        </div>
        <div className="footer1-blok__section-2">
          <p className='footer1__title' style={{color: `var(--orange-color)`}}>Follow Us</p>
          <p>Join us on social networks</p>
          <div className="footer1-blok__section-container">
            <a href="https://www.instagram.com/oxford_bukhara"><FaInstagram className='footer1__icon' /></a>
            <a href="https://t.me/oxford_bukhara"><ImTelegram className='footer1__icon'/></a>
            <a href="www.youtube.com/@akigazzz"><IoLogoYoutube className='footer1__icon'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}