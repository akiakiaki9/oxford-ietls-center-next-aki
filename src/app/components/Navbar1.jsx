'use client';

import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { usePathname } from 'next/navigation'; // Используем usePathname вместо useRouter
import Link from 'next/link';

export default function Navbar1() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname(); // Получаем текущий путь
  const [activePage, setActivePage] = useState(pathname);

  useEffect(() => {
    setActivePage(pathname); // Обновляем активную страницу при изменении пути
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    // Закрываем меню после клика на ссылку
    if (pathname === path) {
      setIsOpen(false); // Если ссылка ведет на текущую страницу, закрываем меню
    } else {
      setIsOpen(false); // При клике на любую ссылку закрываем меню
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.05) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="brand">
        <Link href="/" style={{ textDecoration: 'none' }}>
          <h1>Oxford IELTS</h1>
        </Link>
      </div>
      <div className={`menu-icon ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`menu-links ${isOpen ? 'active' : ''}`}>
        <div className="close-icon" onClick={toggleMenu}>
          <FaTimes />
        </div>
        <Link href="/" onClick={() => handleLinkClick('/')} style={{ color: activePage === '/' ? 'var(--orange-color)' : '' }}>
          Home
        </Link>
        <Link href="/teachers" onClick={() => handleLinkClick('/teachers')} style={{ color: activePage === '/teachers' ? 'var(--orange-color)' : '' }}>
          Teachers
        </Link>
        <Link href="/gallery" onClick={() => handleLinkClick('/gallery')} style={{ color: activePage === '/gallery' ? 'var(--orange-color)' : '' }}>
          Gallery
        </Link>
        <Link href="/about-us" onClick={() => handleLinkClick('/about-us')} style={{ color: activePage === '/about-us' ? 'var(--orange-color)' : '' }}>
          About Us
        </Link>
        <Link href="/news" onClick={() => handleLinkClick('/news')} style={{ color: activePage === '/news' ? 'var(--orange-color)' : '' }}>
          News
        </Link>
        <Link href="/contacts" onClick={() => handleLinkClick('/contacts')} style={{ color: activePage === '/contacts' ? 'var(--orange-color)' : '' }}>
          Contacts
        </Link>
      </div>
      {isOpen && <div className="overlay" onClick={toggleMenu} />}
    </nav>
  );
}
