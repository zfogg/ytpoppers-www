'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import ThemeSwitchLayout from '@/app/components/ThemeSwitchLayout';
import { Input } from '@/components/ui/input';

const GoLink: React.FC<{ href: string | null }> = ({ href }) => {
    return href ? (
        <Link
            className='flex h-10 flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-lime-300 px-4 text-sm transition-colors hover:bg-neutral-300 dark:bg-lime-500 dark:hover:bg-neutral-600 sm:h-12 sm:px-5 sm:text-base lg:min-w-[400px]'
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
        <div className='flex h-10 cursor-not-allowed flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-neutral-200 px-4 text-sm transition-colors hover:bg-neutral-300 dark:bg-neutral-700 dark:hover:bg-rose-900 sm:h-12 sm:px-5 sm:text-base lg:min-w-[400px]'>
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
        <ThemeSwitchLayout>
            <main className='mx-auto flex max-w-7xl flex-col justify-center gap-6 px-3 pt-6 font-[family-name:var(--font-geist-sans)] sm:gap-12 sm:px-0 sm:pt-0'>
                <div className='fixed right-4 top-4 z-50' />
                <div className='row-start-2 flex flex-col items-center justify-center gap-8 sm:items-center'>
                    <div className='mx-8 flex flex-col items-center gap-8'>
                        <h2 className='my-8 text-center text-2xl sm:text-4xl md:text-3xl lg:text-2xl'>
                            Paste a YouTube channel URL, @username, or channel ID
                        </h2>
                        {/* TODO: get the channel id from ytpoppers-api instead of using a regex here */}
                        <Input
                            id='search'
                            type='text'
                            placeholder='https://www.youtube.com/@veritasium'
                            value={channel}
                            autoComplete='off'
                            onChange={(e) => {
                                let chan = e.target.value;
                                chan = chan.replace(/^.+\//i, ''); // remove from the start to the last slash
                                chan = chan.replace(/\?.*$/i, ''); // remove from any question mark to the end
                                setChannel(chan);
                            }}
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
        </ThemeSwitchLayout>
    );
};

export default HomePage;
