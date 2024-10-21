import React from 'react';
import { footerLinks } from '@/data/links';
import CustomLink from '../CustomLink ';
import CompanyInfo from './CompanyInfo';

export default function Footer() {
    return (
        <footer className="bg-background py-12 px-4 md:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-4">
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="flex flex-col space-y-4">
                            <h3 className="font-bold text-base">{title}</h3>
                            <ul className="space-y-2">
                                {links.map((link, index) => (
                                    <li key={index} className='text-xs'>
                                        <CustomLink href={link.href}>
                                            {link.label}
                                        </CustomLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2 xl:col-span-2">
                        <CompanyInfo />
                    </div>
                </div>
            </div>
        </footer>
    );
}