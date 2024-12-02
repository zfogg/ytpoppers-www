import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Head from 'next/head';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900'
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900'
});

export const metadata: Metadata = {
    title: 'ytpoppers homepage',
    description: 'Bringing YouTube "most popular videos" listings back to you.'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
                />
            </head>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
