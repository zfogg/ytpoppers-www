'use client';

import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';

const SWITCH_DATA = [
    {
        name: 'System',
        value: 'system'
    },
    {
        name: 'Light',
        value: 'light'
    },
    {
        name: 'Dark',
        value: 'dark'
    }
];

const ThemeSwitch = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <div className='flex w-full justify-center'>
            <div className='flex w-auto justify-center overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-700'>
                {SWITCH_DATA.map((data) => (
                    <button
                        key={data.value}
                        className={`px-6 py-3 text-black dark:text-white ${
                            theme === data.value && mounted ? 'bg-neutral-200 dark:bg-neutral-700' : 'bg-transparent'
                        } dark:hover:bg-neutral-800`}
                        onClick={() => setTheme(data.value)}>
                        {data.name}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ThemeSwitch;
