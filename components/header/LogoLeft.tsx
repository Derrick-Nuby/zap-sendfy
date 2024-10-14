import React from 'react';
import sendifyLogo from '@/public/images/zap-sendify.svg';
import Image from 'next/image';
import { Rowdies } from 'next/font/google';
import Link from 'next/link';

const rowdies = Rowdies({
    subsets: ['latin'],
    weight: '400'
});

export default function LogoLeft() {
    return (
        <Link href={'/'} className='flex items-center gap-2 text-primary' >
            <Image src={sendifyLogo} alt={'Sendify Logo'} className='size-[2.5rem]' />
            <p className={`${rowdies.className} text-[1.5rem]`}>ZAP SENDIFY</p>
        </Link>
    );
}
