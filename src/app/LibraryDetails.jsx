import Link from 'next/link';

const FEATURES = [
    {
        name: 'NextJS 15 Stable'
    },
    {
        name: 'React 19 RC'
    },
    {
        name: 'Typescript 5'
    },
    {
        name: 'TailwindCSS 3'
    },
    {
        name: 'App Directory'
    },
    {
        name: 'System, Light & Dark Mode'
    },
    {
        name: 'Next Bundle Analyzer'
    },
    {
        name: 'ESLint 9 & Prettier 3'
    }
];

const ESLINT_SETUPS = [
    {
        name: 'JavaScript Plugin',
        githubUrl: 'https://github.com/eslint/eslint'
    },
    {
        name: 'TypeScript Plugin',
        githubUrl: 'https://github.com/typescript-eslint/typescript-eslint'
    },
    {
        name: 'React Plugin',
        githubUrl: 'https://github.com/jsx-eslint/eslint-plugin-react'
    },
    {
        name: 'NextJS Plugin',
        githubUrl: 'https://github.com/vercel/next.js'
    },
    {
        name: 'TailwindCSS Plugin',
        githubUrl: 'https://github.com/francoismassart/eslint-plugin-tailwindcss'
    },
    {
        name: 'Prettier Plugin',
        githubUrl: 'https://github.com/prettier/eslint-config-prettier'
    },
    {
        name: 'Import Plugin',
        githubUrl: 'https://github.com/import-js/eslint-plugin-import'
    },
    {
        name: 'Promise Plugin',
        githubUrl: 'https://github.com/eslint-community/eslint-plugin-promise'
    }
];

const PRETTIER_PLUGINS = [
    {
        name: 'Tailwind Plugin',
        githubUrl: 'https://github.com/tailwindlabs/prettier-plugin-tailwindcss'
    },
    {
        name: 'Sort Import Plugin',
        githubUrl: 'https://github.com/trivago/prettier-plugin-sort-imports'
    }
];

const LibraryDetails = () => {
    return (
        <div className='grid grid-cols-2'>
            <div>
                <ol className='list-disc'>
                    {FEATURES.map((feature) => (
                        <li key={feature.name}>
                            <h2>{feature.name}</h2>
                        </li>
                    ))}
                </ol>
            </div>
            <div>
                <h1>ESLint Setups</h1>
                <ul className='list-disc'>
                    {ESLINT_SETUPS.map((setup) => (
                        <li key={setup.name}>
                            <Link href={setup.githubUrl} target='_blank' rel='noreferrer'>
                                {setup.name} (<span className='text-blue-500 underline'>Github ↗</span>)
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Prettier Plugins</h1>
                <ul className='list-disc'>
                    {PRETTIER_PLUGINS.map((plugin) => (
                        <li key={plugin.name}>
                            <Link href={plugin.githubUrl} target='_blank' rel='noreferrer'>
                                {plugin.name} (<span className='text-blue-500 underline'>Github ↗</span>)
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default LibraryDetails;
