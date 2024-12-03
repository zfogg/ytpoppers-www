import Link from 'next/link';

const Footer = () => {
    return (
        <div className='w-full py-4 text-center text-sm text-gray-500 dark:text-gray-400'>
            made with ❤️ by{' '}
            <Link
                href='https://www.instagram.com/zfogg'
                target='_blank'
                className='transition-colors hover:text-gray-700 dark:hover:text-gray-300'>
                Zachary
            </Link>
        </div>
    );
};

export default Footer;
