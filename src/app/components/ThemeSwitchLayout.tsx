'use client';

import React from 'react';

import Link from 'next/link';

import NavigationBar from '@/app/Home/NavigationBar';
import ThemeSwitch from '@/app/Home/ThemeSwitch';

interface ThemeSwitchLayoutProps {
    children: React.ReactNode;
}

const ThemeSwitchLayout: React.FC<ThemeSwitchLayoutProps> = ({ children }) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <div className='grid grid-cols-3'>
                <div></div>
                <Link className='mt-[80px] pb-6 sm:mt-[100px]' href='/'>
                    <NavigationBar />
                </Link>
                <div className='mt-8 flex pr-6'>
                    <ThemeSwitch />
                </div>
            </div>
            <div className='flex flex-1 items-center justify-center'>{children}</div>
        </div>
    );
};

export default ThemeSwitchLayout;
