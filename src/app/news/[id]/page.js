'use client';
import React, { useEffect, useState } from 'react';
import Navbar2 from '../../components/Navbar2';
import Navbar1 from '../../components/Navbar1';
import Title from '../../components/Title';
import Footer1 from '../../components/Footer1';
import Footer2 from '../../components/Footer2';
import { usePathname, useSearchParams } from 'next/navigation';
import { NEWS } from '../../utils/news';

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
            <Title />
            <div className='newsdet'>
                <div className="newsdet-blok">
                    <h1>{newsItem.title}</h1>
                    <p>{newsItem.content}</p>
                </div>
            </div>
            <Footer1 />
            <Footer2 />
        </div>
    );
}
