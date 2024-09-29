'use client';
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Извлекаем параметры маршрута
import Navbar1 from '../../components/Navbar1';
import Navbar2 from '../../components/Navbar2';
import Footer1 from '../../components/Footer1';
import Footer2 from '../../components/Footer2';
import { TEACHERS } from '../../utils/teachers';
import { FaTelegramPlane, FaInstagram, FaFacebook } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

export default function TeachersDetail() {
    const { id } = useParams(); // Извлекаем id из параметров маршрута

    if (!id) {
        return <div>Loading...</div>; // Пока данные не загружены, выводим индикатор загрузки
    }

    // Приводим id учителя к строке для корректного сравнения
    const teacher = TEACHERS.find((t) => t.id.toString() === id);
    const [studentsCount, setStudentsCount] = useState(0);

    useEffect(() => {
        if (teacher) {
            let start = 0;
            const end = teacher.students;
            if (start === end) return;

            const duration = 3000;
            const stepTime = 10;
            const totalSteps = duration / stepTime;

            let step = 0;

            const timer = setInterval(() => {
                step += 1;
                const progress = step / totalSteps;
                const increment = end * (1 - Math.exp(-5 * progress)) + 1;
                setStudentsCount(Math.min(Math.round(increment), end));

                if (step >= totalSteps) {
                    clearInterval(timer);
                }
            }, stepTime);
        }
    }, [teacher]);

    return (
        <div>
            <Navbar1 />
            <Navbar2 />
            <div className='pagename'>
                <div className="pagename-blok">
                    <h1>{teacher ? teacher.title : 'Преподаватель не найден'}</h1>
                    <Link href='/' className='pagename-parent'>Home</Link>
                </div>
            </div>
            {teacher ? (
                <div className='teacherdet'>
                    <div className="teacherdet-blok">
                        <div className='teacherdet-blok__container'>
                            <div className="teacherdet-blok__container-1">
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOfa59QTyD2tEAuD00P1_D8aR6VbwIHy3EYg&s' />
                                <Image src={teacher.image} alt={`Photo of ${teacher.title}`} width={400} height={400} />
                            </div>
                            <div className='teacherdet-blok__container-2'>
                                <h1 className='teacherdet__title'>{teacher.title}</h1>
                                <b className='teacherdet__age'>{teacher.age} y.o, {teacher.category}</b>
                                <br />
                                <br />
                                <br />
                                <p className='teacherdet__students'>Up to <span>{studentsCount}</span> students trained</p>
                            </div>
                        </div>
                        <div className="teachersdet-blok__container teachersdet__biography">
                            <h2 className='teachersdet__biography-h2'>Biography</h2>
                            <p>
                                {teacher.body} {teacher.body} {teacher.body} {teacher.body} {teacher.body}
                                <br />
                                <span className='teachersdet__biography-container'>
                                    <a href={teacher.facebookLink}><FaFacebook className='teacherdet__link' /></a>
                                    <a href={teacher.telegramLink}><FaTelegramPlane className='teacherdet__link' /></a>
                                    <a href={teacher.instagramLink}><FaInstagram className='teacherdet__link' /></a>
                                </span>
                            </p>
                            <br />
                        </div>
                    </div>
                </div>
            ) : (
                <div>Преподаватель не найден.</div>
            )}
            <Footer1 />
            <Footer2 />
        </div>
    );
};
