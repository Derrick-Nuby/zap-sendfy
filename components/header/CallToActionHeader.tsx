import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export default function CallToActionHeader() {
    return (
        <div className='flex gap-4 font-semibold'>
            <Button asChild className='font-semibold rounded-full p-4' size={'lg'}>
                <Link href={'/pricing'}>Get started</Link>
            </Button>
            <Button asChild className='font-semibold rounded-full p-4' variant={'outline'} size={'lg'}>
                <Link href={'/sendify-demo'}>View demo</Link>
            </Button>
        </div>
    );
}
