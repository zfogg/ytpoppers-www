'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import NavigationBar from '@/app/Home/NavigationBar';
import { Input } from '@/components/ui/input';

const GoLink: React.FC<{ href: string | null }> = ({ href }) => {
    return href ? (
        <Link
            className='flex h-10 min-w-[400px] flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-lime-300 px-4 text-sm transition-colors hover:bg-neutral-300 dark:bg-lime-500 dark:hover:bg-neutral-600 sm:h-12 sm:px-5 sm:text-base'
            href={href}
            rel='noopener noreferrer'>
            <Image
                className='invert dark:invert-0'
                src='https://nextjs.org/icons/vercel.svg'
                alt='Vercel logomark'
                width={20}
                height={20}
            />
            Go!
        </Link>
    ) : (
        <div className='flex h-10 min-w-[400px] cursor-not-allowed flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-neutral-200 px-4 text-sm transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-rose-900 sm:h-12 sm:px-5 sm:text-base'>
            <Image
                className='invert dark:invert-0'
                src='https://nextjs.org/icons/vercel.svg'
                alt='Vercel logomark'
                width={20}
                height={20}
            />
            Paste something above...
        </div>
    );
};

const HomePage: React.FC = () => {
    const [channel, setChannel] = useState<string>('');

    const channelTopUrl = `/top/${channel}`;

    return (
        <main className='mx-auto flex h-screen max-w-7xl flex-col justify-center gap-6 px-3 pt-6 font-[family-name:var(--font-geist-sans)] sm:gap-12 sm:px-0 sm:pt-0'>
            <NavigationBar />
            <div className='row-start-2 flex flex-col items-center justify-center gap-8 sm:items-center'>
                <div className='flex flex-col items-center gap-4'>
                    <p className='text-center text-lg sm:text-xl'>
                        Paste a YouTube channel URL, @username, or channel ID
                    </p>
                    {/* TODO: get the channel id from ytpoppers-api instead of using a regex here */}
                    <Input
                        type='text'
                        placeholder='https://www.youtube.com/@veritasium'
                        value={channel}
                        onChange={(e) => setChannel(e.target.value.replace(/^https:\/\/.+\//i, ''))}
                        className='h-10 max-w-[400px] rounded-full bg-white dark:bg-neutral-800 sm:h-12'
                    />

                    <GoLink href={channel ? channelTopUrl : null} />
                </div>
            </div>
            <div className='row-start-3 hidden flex-wrap items-center justify-center gap-6 sm:flex'>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://github.com/zfogg/ytpoppers-api'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/github.svg'
                        alt='GitHub icon'
                        width={16}
                        height={16}
                    />
                    GitHub (website)
                </a>
                <a
                    className='flex items-center gap-2 hover:underline hover:underline-offset-4'
                    href='https://github.com/zfogg/ytpoppers-www'
                    target='_blank'
                    rel='noopener noreferrer'>
                    <Image
                        aria-hidden
                        src='https://nextjs.org/icons/github.svg'
                        alt='GitHub icon'
                        width={16}
                        height={16}
                    />
                    GitHub (api)
                </a>
            </div>
        </main>
    );
};

export default HomePage;
