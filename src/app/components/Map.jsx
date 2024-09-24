'use client';import React from 'react';

export default function Map() {
  return (
    <div className='map'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1447.3953824770374!2d64.43027612141142!3d39.76381468926451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f500773cfcdc055%3A0xc110d9a97e65b56a!2sOxford%20IELTS%20center!5e0!3m2!1sru!2s!4v1724390998851!5m2!1sru!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};