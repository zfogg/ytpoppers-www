'use client';

import type { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }: Readonly<{ children: ReactNode }>) => {
    return <ThemeProvider attribute='class'>{children}</ThemeProvider>;
};

export default Providers;
