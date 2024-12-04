import Link from 'next/link';

const NavigationBar = () => {
    return (
        <div className='flex w-full flex-col items-center justify-center'>
            <header>
                <h1 className='text-center text-5xl font-extrabold leading-tight tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl'>
                    <span className='block text-center text-[hsl(280,100%,70%)] transition-colors duration-200 hover:text-[hsl(204,100%,71%)]'>
                        ytpoppers
                    </span>
                </h1>
            </header>
        </div>
    );
};

export default NavigationBar;
