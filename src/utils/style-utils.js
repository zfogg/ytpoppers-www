import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines class names using `clsx` and merges Tailwind CSS classes using `twMerge`.
 *
 * @param {...string | undefined} args - The class names to combine and merge.
 * @returns {string} The combined and merged class names.
 */
export const cn = (...args) => clsx(twMerge(...args.filter(Boolean)));
