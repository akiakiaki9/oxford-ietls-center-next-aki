'use client';
import React from 'react'

export default function Header1() {
  return (
    <div className="video-bg">
      <video 
        src="/videos/video1.mp4"
        type="video/mp4" 
        autoPlay 
        muted 
        loop 
        playsInline>
      </video>
      <div className="effects"></div>
      <div className="video-bg__content">
        <h1 className="video__title">Oxford IELTS Center</h1>
        <p className="video__body">11 Zulfiya Street, Bukhara 200100 Uzbekistan</p>
      </div>
    </div>
  )
}