'use client';
import React, { useEffect, useState } from 'react';
import Navbar2 from '../../components/Navbar2';
import Navbar1 from '../../components/Navbar1';
import Footer1 from '../../components/Footer1';
import Footer2 from '../../components/Footer2';
import { usePathname, useSearchParams } from 'next/navigation';
import { NEWS } from '../../utils/news';
import Link from 'next/link';
import Image from 'next/image';

export default function NewsDetail() {
    const pathname = usePathname(); // Получаем текущий путь
    const searchParams = useSearchParams(); // Получаем параметры поиска из URL
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const id = pathname.split('/').pop(); // Получаем id из URL
        if (id) {
            const item = NEWS.find((t) => t.id === parseInt(id));
            setNewsItem(item);
        }
        setLoading(false);
    }, [pathname]); // Зависимость от pathname

    if (loading) {
        return <div>Loading...</div>; // Показать индикатор загрузки
    }

    if (!newsItem) {
        return <div>News not found</div>; // Если новость не найдена
    }

    return (
        <div>
            <Navbar2 />
            <Navbar1 />
            <div className='pagename'>
                <div className="pagename-blok">
                    <h1>{newsItem.pagename}</h1>
                    <p>
                        <Link href="/" className='pagename-parent'>Home</Link>
                    </p>
                </div>
            </div>
            <div className='newsdet'>
                <div className="newsdet-blok">
                    <div className='newsdet-blok__section'>
                        <Image className='newsdet__img' src={newsItem.photo} alt='' width={500} height={500} />
                    </div>
                    <div className='newsdet-blok__section newsdet-blok__section-2'>
                        <h1 className='newsdet__title'>{newsItem.title}</h1>
                        <p className='newsdet__subtitle'>{newsItem.subtitle}</p>
                        <b className='newsdet__body'>{newsItem.body}</b>
                        <div className='newsdet__date'>
                            <p className='newsdet__date-p1'>Oxford IELTS</p>
                            <p className='newsdet__date-p2'>{newsItem.date}</p>
                        </div>
                        <div className='newsdet__register'>
                            <Link href='/contacts'><button>Register</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer1 />
            <Footer2 />
        </div>
    );
}