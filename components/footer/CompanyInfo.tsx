import React from 'react';
import Image from 'next/image';
import sendifyLogo from '@/public/images/zap-sendify.svg';
import { Rowdies } from 'next/font/google';
import Link from 'next/link';

const rowdies = Rowdies({
    subsets: ['latin'],
    weight: '400'
});
export default function CompanyInfo() {
    return (
        <div className='text-xs'>
            <Link href={'/'} className='flex items-center gap-2 text-primary'>
                <Image src={sendifyLogo} alt={'Sendify Logo'} className='size-[2.5rem]' />
                <p className={`${rowdies.className} text-[1.5rem]`}>ZAP SENDIFY</p>
            </Link>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quis necessitatibus sapiente, deleniti rem architecto sit eveniet sint, ipsum ab voluptatibus ad quidem consequatur eaque, assumenda vero vitae enim eos?</p>
        </div>
    );
}
