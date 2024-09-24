'use client';
import React from 'react';
import { TEACHERS } from '../utils/teachers';
import Link from 'next/link';
import Image from 'next/image';

export default function Teachers() {
  return (
    <div className='teachers'>
      <div className="subtitle-sar">
        <p>Experience Team Member</p>
        <div className='subtitle-sar__div'></div>
        <h1>Meet our professionals</h1>
      </div>

      <div className="teachers-blok">
        {TEACHERS.map(teacher => (
          <div key={teacher.id} className='teacher'>
            <Link href={`/teachers/${teacher.id}`}>
              <Image className='teachers__img' src={teacher.image} alt="" width={'500px'} height={'500px'} />
            </Link>
            <b className='teachers__b'>{teacher.title}</b>
            <p className='teachers__p'>{teacher.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};