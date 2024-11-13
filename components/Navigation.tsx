"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const progress = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Hello', href: '/', section: '/' },
    { name: 'About Me', href: '/about', section: '/about' },
    { name: 'Education', href: '/education', section: '/education' },
    { name: 'Experience', href: '/experience', section: '/experience' },
    { name: 'Project', href: '/project', section: '/project' },
    { name: 'Contact', href: '/contact', section: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 px-8 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link 
          href="/" 
          className="text-[#5BB5F0] font-mono text-sm tracking-wider hover:opacity-80 transition-opacity"
        >
          leone
        </Link>
        
        <div className="flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.section}
              href={item.href}
              className={cn(
                "text-sm tracking-wide transition-colors",
                item.section === '/contact' ? 'text-[#5BB5F0]' : 'text-white/80 hover:text-white',
                pathname === item.section && 'text-white'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-[1px]">
        <div 
          className="h-full bg-gradient-to-r from-[#5BB5F0] to-[#A855F7]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}

export default Navigation;