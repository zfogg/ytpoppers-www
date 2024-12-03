'use client';

import React from 'react';

import Link from 'next/link';

import NavigationBar from '@/app/components/NavigationBar';
import ThemeSwitch from '@/app/components/ThemeSwitch';

interface ThemeSwitchLayoutProps {
    children: React.ReactNode;
}

const ThemeSwitchLayout: React.FC<ThemeSwitchLayoutProps> = ({ children }) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <div className='mt-8 flex self-end pr-[32px]'>
                <ThemeSwitch />
            </div>
            <div className='grid grid-cols-3'>
                <div></div>
                <Link className='mt-6 pb-6 sm:mt-[50px] md:mt-[50px] lg:mt-[80px]' href='/'>
                    <NavigationBar />
                </Link>
                <div></div>
            </div>
            <div className='flex flex-1 items-center justify-center'>{children}</div>
        </div>
    );
};

export default ThemeSwitchLayout;
