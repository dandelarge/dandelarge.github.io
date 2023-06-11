
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: ({ children }) => <span className='font-semibold text-6xl text-white mb-2'>{children}</span>,
    p: ({ children }) => <p className="font-light font-serif text-white">{children}</p>,
    ...components,
  };
}
