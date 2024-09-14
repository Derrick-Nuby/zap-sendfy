"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Rowdies } from 'next/font/google';
import { menuLinks } from '@/data/links';
import { Button } from '@/components/ui/button';
import ModeToggle from './DarkMode';
import { Menu, X } from 'lucide-react';
import sendifyLogo from '@/public/images/zap-sendify.svg';

const rowdies = Rowdies({
    subsets: ['latin'],
    weight: '400'
});

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className='relative'>
            <div className='flex justify-between items-center px-4 py-5 md:px-10'>
                <Link href={'/'} className='flex items-center gap-2 text-primary'>
                    <Image src={sendifyLogo} alt={'Sendify Logo'} className='size-[2.5rem]' />
                    <p className={`${rowdies.className} text-[1.5rem]`}>ZAP SENDIFY</p>
                </Link>
                <nav className='hidden md:flex gap-5 font-bold'>
                    {menuLinks.map((item, index) => (
                        <Link href={item.href} key={index} className='cursor-pointer hover:text-primary'>{item.label}</Link>
                    ))}
                </nav>
                <div className='hidden md:flex gap-4 font-semibold items-center justify-center'>
                    <Button asChild className='font-semibold rounded-full p-5' size={'lg'}>
                        <Link href={'/pricing'}>Get started</Link>
                    </Button>
                    <Button asChild className='font-semibold rounded-full p-5' variant={'outline'} size={'lg'}>
                        <Link href={'/sendify-demo'}>View demo</Link>
                    </Button>
                    <ModeToggle />
                </div>
                <Button
                    variant="ghost"
                    size="icon"
                    className='md:hidden'
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </Button>
            </div>
            {isMenuOpen && (
                <div className='md:hidden fixed inset-0 bg-background z-50 flex flex-col'>
                    <div className='flex justify-between items-center px-4 py-5'>
                        <Link href={'/'} className='flex items-center gap-2 text-primary'>
                            <Image src={sendifyLogo} alt={'Sendify Logo'} className='size-[2.5rem]' />
                            <p className={`${rowdies.className} text-[1.5rem]`}>ZAP SENDIFY</p>
                        </Link>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={toggleMenu}
                            aria-label="Close menu"
                        >
                            <X />
                        </Button>
                    </div>
                    <nav className='flex flex-col flex-grow justify-center'>
                        {menuLinks.map((item, index) => (
                            <Link
                                href={item.href}
                                key={index}
                                className='py-4 text-center text-lg font-bold hover:text-primary'
                                onClick={toggleMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                    <div className='flex flex-col gap-4 p-4'>
                        <Button asChild className='font-semibold rounded-full p-5 w-full' size={'lg'}>
                            <Link href={'/pricing'} onClick={toggleMenu}>Get started</Link>
                        </Button>
                        <Button asChild className='font-semibold rounded-full p-5 w-full' variant={'outline'} size={'lg'}>
                            <Link href={'/sendify-demo'} onClick={toggleMenu}>View demo</Link>
                        </Button>
                        <div className='flex justify-center'>
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}