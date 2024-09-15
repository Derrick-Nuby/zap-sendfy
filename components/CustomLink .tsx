import React from 'react';
import Link from 'next/link';

const CustomLink = ({ href, children }: { href: string, children: React.ReactNode; }) => {
    return (
        <Link
            href={href}
            className="
        relative 
        inline-block 
        transition-colors 
        hover:text-primary
        group
      "
        >
            <span className="
        relative 
        z-10
      ">
                {children}
            </span>
            <span className="
        absolute 
        bottom-0 
        left-0 
        w-full 
        h-[30%] 
        bg-primary 
        opacity-0 
        transition-opacity 
        group-hover:opacity-20
      "></span>
        </Link>
    );
};

export default CustomLink;