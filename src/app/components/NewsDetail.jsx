'use client';import React from 'react'
import Navbar2 from './Navbar2'
import Navbar1 from './Navbar1'
import Title from './Title'
import Footer1 from './Footer1'
import Footer2 from './Footer2'
import { useParams } from 'react-router-dom'
import { NEWS } from '../utils/news'

export default function NewsDetail() {

  const { id } = useParams(); // Получаем параметр id из URL
  const newsItem = NEWS.find(item => item.id === parseInt(id)); // Находим новость по id

  if (!newsItem) {
    return <div>News not found</div>;
  }

  return (
    <div>
        <Navbar2 />
        <Navbar1 />
        <Title />
        <div className='newsdet'>
          <div className="newsdet-blok">
            <h1>No news yet</h1>
          </div>
        </div>
        <Footer1 />
        <Footer2 />
    </div>
  )
}