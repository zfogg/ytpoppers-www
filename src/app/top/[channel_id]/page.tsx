import { Suspense } from 'react';

import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import NavigationBar from '@/app/Home/NavigationBar';

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

const API_URL = process.env.YTPOPPERS_API_URL;

async function getChannelData(channelId: string, max_results = '64'): Promise<TopChannelsResponse> {
    const fetchUrl = `${API_URL}/analyze?channel=${channelId}&max_results=${max_results}`;
    console.log('FETCH URL', fetchUrl);
    const response = await fetch(
        fetchUrl,
        { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    console.log('FETCH', response);

    if (!response.ok) {
        throw new Error('Failed to fetch channel data');
    }

    return response.json();
}

export default async function TopVideoPage({ params, searchParams }: Props) {
    const { channel_id } = await params;

    if (!channel_id) {
        notFound();
    }

    const max_results = (await searchParams)?.max_results;

    if ((max_results && typeof max_results === 'string' && !parseInt(max_results)) || Array.isArray(max_results)) {
        throw new Error('Invalid max_results parameter');
    }

    try {
        const data = await getChannelData(channel_id, max_results);

        return (
            <main className='mx-auto flex h-full min-h-screen max-w-7xl flex-col gap-6 px-3 pt-6 font-[family-name:var(--font-geist-sans)] sm:gap-12 sm:px-6'>
                <NavigationBar />
                <div className='flex flex-col items-center gap-4'>
                    <h1 className='mb-4 text-4xl font-bold'>Top videos for {decodeURIComponent(channel_id)}</h1>
                    <p className='mb-8 text-muted-foreground'>Analyzed {data.total_videos_analyzed} videos</p>
                    <Suspense fallback={<TopVideos videos={[]} isLoading={true} />}>
                        <TopVideos videos={data.top_videos} isLoading={false} />
                    </Suspense>
                </div>
            </main>
        );
    } catch (error) {
        return (
            <main className='mx-auto flex h-screen max-w-7xl flex-col justify-center gap-6 px-3 pt-6 font-[family-name:var(--font-geist-sans)] sm:gap-12 sm:px-0 sm:pt-0'>
                <NavigationBar />
                <div className='mb-8 flex flex-col items-center gap-4'>
                    <h1 className='mb-8 text-4xl font-bold'>Error</h1>
                    <p className='text-red-500'>Failed to load channel data. Please try again later.</p>
                    <p className='text-red-500'>{error instanceof Error ? error.message : 'Unknown error'}</p>
                </div>
            </main>
        );
    }
}
