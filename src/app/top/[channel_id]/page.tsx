import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
    params: {
        channel_id: string;
    };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    return {
        title: `Top Comments for Video ${params.channel_id}`
    };
}

export default async function TopVideoPage({ params }: Props) {
    const { channel_id } = params;

    // TODO: Add validation for video_id format
    // TODO: Add check to see if ytpoppers-api can resolve the channel id with the youtube api.
    if (!channel_id) {
        notFound();
    }

    return (
        <main className='flex min-h-screen flex-col items-center p-24'>
            <h1 className='mb-8 text-4xl font-bold'>Top videos for channel {channel_id}</h1>
            {/* TODO: Add your comment display logic here */}
            <p>TODO: video display logic here</p>
        </main>
    );
}
