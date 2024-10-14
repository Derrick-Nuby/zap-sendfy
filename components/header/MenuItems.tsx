import React from 'react';
import { menuLinks } from '@/data/links';
import Link from 'next/link';

export default function MenuItems() {
    return (
        <nav className='flex gap-5 font-bold'>
            {menuLinks.map((item, index) => (
                <Link href={item.href} key={index} className='cursor-pointer hover:text-primary'>{item.label}</Link>
            ))}
        </nav>
    );
}
