import React from 'react';
import LogoLeft from './LogoLeft';
import MenuItems from './MenuItems';
import CallToActionHeader from './CallToActionHeader';
// import ModeToggle from './DarkMode';

export default function Header() {
    return (
        <header className='flex justify-between items-center px-10 py-6'>
            <LogoLeft />
            <MenuItems />
            <CallToActionHeader />
            {/* <ModeToggle /> */}
        </header>
    );
}
