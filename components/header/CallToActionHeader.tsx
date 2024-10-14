import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import ModeToggle from './DarkMode';

export default function CallToActionHeader() {
    return (
        <div className='flex gap-4 font-semibold items-center justify-center'>
            <Button asChild className='font-semibold rounded-full p-5' size={'lg'}>
                <Link href={'/pricing'}>Get started</Link>
            </Button>
            <Button asChild className='font-semibold rounded-full p-5' variant={'outline'} size={'lg'}>
                <Link href={'/sendify-demo'}>View demo</Link>
            </Button>
            <ModeToggle />
        </div>
    );
}
