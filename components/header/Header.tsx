import React from 'react';
import LogoLeft from './LogoLeft';
import MenuItems from './MenuItems';
import CallToActionHeader from './CallToActionHeader';
import ModeToggle from './DarkMode';

export default function Header() {
    return (
        <header>
            <LogoLeft />
            <MenuItems />
            <CallToActionHeader />
            <ModeToggle />
        </header>
    );
}
