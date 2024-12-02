import Link from 'next/link';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

import { formatDistanceToNow } from 'date-fns';
import { Eye, MessageCircle, ThumbsUp } from 'lucide-react';

export interface Video {
    video_id: string;
    title: string;
    url: string;
    view_count: number;
    like_count: number;
    comment_count: number;
    published_at: string;
    thumbnail_url: string;
}

interface TopVideosProps {
    videos: Video[];
    isLoading: boolean;
}

export function TopVideos({ videos, isLoading }: TopVideosProps) {
    if (isLoading) {
        return (
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {[...Array(6)].map((_, i) => (
                    <Card key={i} className='w-full'>
                        <CardHeader>
                            <Skeleton className='h-4 w-[250px]' />
                            <Skeleton className='h-4 w-[200px]' />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className='h-[200px] w-full' />
                        </CardContent>
                    </Card>
                ))}
            </div>
        );
    }

    return (
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {videos.map((video) => (
                <Card key={video.video_id} className='w-full transition-shadow hover:shadow-lg'>
                    <CardHeader>
                        <CardTitle className='line-clamp-2 text-lg'>
                            <Link
                                href={video.url}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='decoration-primary/30 underline-offset-4 transition-colors hover:text-primary/90 hover:underline'>
                                {video.title}
                            </Link>
                        </CardTitle>
                        <CardDescription className='flex flex-wrap gap-4'>
                            <span className='flex items-center gap-1'>
                                <Eye className='size-4' />
                                {video.view_count.toLocaleString()}
                            </span>
                            <span>•</span>
                            <span className='flex items-center gap-1'>
                                <ThumbsUp className='size-4' />
                                {video.like_count.toLocaleString()}
                            </span>
                            <span>•</span>
                            <span className='flex items-center gap-1'>
                                <MessageCircle className='size-4' />
                                {video.comment_count.toLocaleString()}
                            </span>
                            <span>{formatDistanceToNow(new Date(video.published_at))} ago</span>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <a
                            href={`https://youtube.com/watch?v=${video.video_id}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='relative block aspect-video w-full overflow-hidden rounded-lg transition-opacity hover:opacity-90'>
                            <img src={video.thumbnail_url} alt={video.title} className='size-full object-cover' />
                        </a>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
