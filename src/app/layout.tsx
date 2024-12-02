import type { ReactNode } from 'react';

import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';

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

// INFO: https://nextjs.org/docs/app/api-reference/functions/generate-viewport#width-initialscale-maximumscale-and-userscalable
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    // Also supported by less commonly used
    // interactiveWidget: 'resizes-visual',
    colorScheme: 'dark'
};

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        // ? https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
        // ? https://react.dev/reference/react-dom/client/hydrateRoot#suppressing-unavoidable-hydration-mismatch-errors
        <html suppressHydrationWarning lang='en'>
            <body className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}>
                <ThemeProvider attribute='class'>{children}</ThemeProvider>
            </body>
        </html>
    );
};

export default Layout;
