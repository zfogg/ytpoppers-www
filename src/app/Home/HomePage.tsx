'use client';

import React, { useRef, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import HomeLayout from '@/app/components/HomeLayout';
import { Input } from '@/components/ui/input';

import { Loader2 } from 'lucide-react';

const GoLink: React.FC<{
    href: string | null;
    ref: React.RefObject<HTMLAnchorElement | null>;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    isLoading: boolean;
}> = ({ href, ref, onClick, isLoading }) => {
    return href ? (
        <Link
            ref={ref}
            className='flex h-10 min-w-[200px] flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-lime-200 px-4 text-sm transition-colors hover:bg-neutral-300 dark:bg-lime-500 dark:hover:bg-neutral-600 sm:h-12 sm:min-w-[400px] sm:px-5 sm:text-base'
            onClick={onClick}
            href={href}
            rel='noopener noreferrer'>
            {isLoading ? (
                <Loader2 className='size-5 animate-spin' />
            ) : (
                <Image
                    className='invert dark:invert-0'
                    src='https://nextjs.org/icons/vercel.svg'
                    alt='Vercel logomark'
                    width={20}
                    height={20}
                />
            )}
            {isLoading ? 'Loading...' : 'Go!'}
        </Link>
    ) : (
        <div className='flex h-10 min-w-[200px] cursor-not-allowed flex-wrap items-center justify-center gap-2 gap-x-3 rounded-full border border-solid border-transparent bg-neutral-200 px-4 text-sm transition-colors hover:bg-rose-300 dark:bg-neutral-700 dark:hover:bg-rose-900 sm:h-12 sm:min-w-[400px] sm:px-5 sm:text-base'>
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

function getTopChannelUrl(channel: string): string {
    let chan = channel;
    chan = chan.replace(/^.+\//i, ''); // remove from the start to the last slash
    chan = chan.replace(/\?.*$/i, ''); // remove from any question mark to the end

    return `/top/${chan}`;
}

const HomePage: React.FC = () => {
    const [channel, setChannel] = useState<string>('');
    const anchorRef = useRef<HTMLAnchorElement>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && channel.length > 0) {
            setIsLoading(true);
            anchorRef.current?.click();
        }
    };

    const handleGoClick = () => {
        if (channel.length > 0) {
            setIsLoading(true);
        }
    };

    return (
        <HomeLayout>
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
                            onChange={(e) => setChannel(e.target.value)}
                            onKeyUp={handleKeyPress}
                            className='h-10 max-w-[400px] rounded-full bg-white dark:bg-neutral-800 sm:h-12'
                        />

                        <GoLink
                            ref={anchorRef}
                            href={channel.length > 0 ? getTopChannelUrl(channel) : null}
                            onClick={handleGoClick}
                            isLoading={isLoading}
                        />
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
        </HomeLayout>
    );
};

export default HomePage;
