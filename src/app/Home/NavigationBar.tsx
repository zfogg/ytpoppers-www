import Link from 'next/link';

import ThemeSwitch from '@/app/Home/ThemeSwitch';

const NavigationBar = () => {
    return (
        <div className='flex w-full flex-col items-center justify-between gap-6 sm:justify-end sm:px-6'>
            <header>
                <h1 className='text-center text-3xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
                    <span className='block text-[hsl(280,100%,70%)]'>ytpoppers</span>
                </h1>
            </header>
            <div className='flex w-full items-center justify-between gap-6 sm:justify-end sm:px-6'>
                <ThemeSwitch />
            </div>
        </div>
    );
};

export default NavigationBar;
