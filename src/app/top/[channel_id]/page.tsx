import { Suspense } from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import TopPageLayout from './TopPageLayout';
import { TopVideos, Video } from './TopVideos';

interface Props {
    params: Promise<{
        channel_id: string;
    }>;
    searchParams?: Promise<{
        [key: string]: string | string[] | undefined;
    }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { channel_id } = await params;

    return {
        title: `Top videos for channel ${decodeURIComponent(channel_id)} | ytpoppers`
    };
}

interface TopChannelsResponse {
    channel_id: string;
    total_videos_analyzed: number;
    top_videos: Video[];
}

const API_URL = process.env.YTPOPPERS_API_URL || 'http://localhost:3001';
const API_USERNAME = process.env.YTPOPPERS_API_USERNAME || 'username';
const API_PASSWORD = process.env.YTPOPPERS_API_PASSWORD || 'password';

async function getChannelData(channelId: string, max_results = '60'): Promise<TopChannelsResponse> {
    const fetchUrl = `${API_URL}/analyze?channel=${channelId}&max_results=${max_results}`;

    const headers = new Headers();

    // * INFO: Basic auth on API calls. Ask @zfogg for the username and password as he set it during the
    // * INFO: AWS SAM deploy of `ytpoppers-api` (see /template.yaml in that repo for secrets management info).
    headers.append('Authorization', `Basic ${Buffer.from(`${API_USERNAME}:${API_PASSWORD}`).toString('base64')}`);

    const response = await fetch(fetchUrl, {
        method: 'GET',
        headers,
        next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
        throw new Error('Failed to fetch channel data');
    }

    return response.json();
}

export default async function TopVideoPage({ params, searchParams }: Props) {
    const { channel_id } = await params;
    const max_results = (await searchParams)?.max_results?.toString() ?? '60';

    if (!channel_id) {
        notFound();
    }

    if ((max_results && typeof max_results === 'string' && !parseInt(max_results)) || Array.isArray(max_results)) {
        throw new Error('Invalid max_results parameter');
    }

    try {
        const data = await getChannelData(channel_id, max_results);

        if (!data) {
            notFound();
        }

        return (
            <TopPageLayout>
                <main className='mx-auto flex max-w-7xl flex-col gap-6 p-6 font-[family-name:var(--font-geist-sans)] sm:gap-12 sm:px-6'>
                    <div className='flex flex-col items-center gap-4'>
                        <header>
                            <h1 className='mb-4 text-center text-4xl font-bold'>
                                Top videos for{' '}
                                <a
                                    href={`https://www.youtube.com/channel/${data.channel_id}`}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-[hsl(332,100%,76%)] underline transition-colors duration-200 hover:text-[hsl(138,100%,71%)]'>
                                    {decodeURIComponent(channel_id)}
                                    <img src='/images/youtube.png' alt='YouTube Logo' width={25} height={18} className='ml-2 inline' />
                                </a>
                            </h1>
                            <p className='mb-8 text-muted-foreground'>Analyzed {data.total_videos_analyzed} videos</p>
                        </header>
                        <Suspense fallback={<TopVideos videos={[]} isLoading={true} />}>
                            <TopVideos videos={data.top_videos} isLoading={false} />
                        </Suspense>
                    </div>
                </main>
            </TopPageLayout>
        );
    } catch (error) {
        return (
            <TopPageLayout>
                <main className='mx-auto flex max-w-7xl flex-col justify-center gap-6 p-6 font-[family-name:var(--font-geist-sans)] sm:gap-12 sm:px-0 sm:pt-0'>
                    <div className='mb-8 flex flex-col items-center gap-4'>
                        <h1 className='mb-8 text-4xl font-bold'>Error</h1>
                        <p className='text-red-500'>Failed to load channel data. Please try again later.</p>
                        <p className='text-red-500'>{error instanceof Error ? error.message : 'Unknown error'}</p>
                    </div>
                </main>
            </TopPageLayout>
        );
    }
}
