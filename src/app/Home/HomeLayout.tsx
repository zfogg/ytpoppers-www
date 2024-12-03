'use client';

import React from 'react';

import Link from 'next/link';

import Footer from '@/app/components/Footer';
import NavigationBar from '@/app/components/NavigationBar';
import ThemeSwitch from '@/app/components/ThemeSwitch';

interface HomeLayoutProps {
    children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
    return (
        <div className='flex min-h-screen flex-col'>
            <div className='mt-8 flex self-end pr-[32px]'>
                <ThemeSwitch />
            </div>
            <div className='flex flex-1 flex-col items-center justify-center'>
                <div className='flex flex-col'>
                    <Link className='mt-6 pb-8 sm:mt-[50px] md:mt-[50px] lg:mt-[80px] lg:pb-[80px]' href='/'>
                        <NavigationBar />
                    </Link>
                </div>
                <div className='flex flex-col'>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default HomeLayout;
