'use client';

import React, { useEffect, useState } from 'react';

const PageLoadTime: React.FC = () => {
    const [loadTime, setLoadTime] = useState<number | null>(null);

    useEffect(() => {
        const calculateLoadTime = () => {
            const [navigationEntry] = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];

            if (navigationEntry) {
                const timeToLoad = navigationEntry.loadEventEnd - navigationEntry.startTime;
                setLoadTime(timeToLoad);
            } else {
                // Retry if navigation entry isn't available yet
                setTimeout(calculateLoadTime, 100);
            }
        };

        calculateLoadTime();
    }, []);

    return (
        <div>
            {loadTime !== null ? (
                <p className='text-xs text-neutral-500'>Page Load Time: {loadTime.toFixed(2)} ms</p>
            ) : (
                <p>Calculating load time...</p>
            )}
        </div>
    );
};

export default PageLoadTime;
