import { cva } from 'class-variance-authority';

const base = cva(['flex', 'flex-col'], {
  variants: {
    bordered: {
      true: ['border'],
      false: [],
    },
    color: {
      white: 'bg-white',
      gray: 'bg-gray-50',
      slate: 'bg-slate-50',
      zinc: 'bg-zinc-50',
    },
    radius: {
      none: ['rounded-none'],
      sm: ['rounded-sm'],
      base: ['rounded'],
      md: ['rounded-md'],
      lg: ['rounded-lg'],
    },
    shadow: {
      none: ['shadow-none'],
      sm: ['shadow-sm'],
      base: ['shadow'],
      md: ['shadow-md'],
      lg: ['shadow-lg'],
      xl: ['shadow-xl'],
    },
    withDivider: {
      true: ['divide-y'],
      false: [],
    },
  },
  compoundVariants: [
    {
      color: 'white',
      withDivider: true,
      className: ['divide-gray-100'],
    },
    {
      color: 'gray',
      withDivider: true,
      className: ['divide-gray-200'],
    },
    {
      color: 'slate',
      withDivider: true,
      className: ['divide-slate-200'],
    },
    {
      color: 'zinc',
      withDivider: true,
      className: ['divide-zinc-200'],
    },
    {
      color: 'white',
      bordered: true,
      className: ['border-gray-100'],
    },
    {
      color: 'gray',
      bordered: true,
      className: ['border-gray-200'],
    },
    {
      color: 'slate',
      bordered: true,
      className: ['border-slate-200'],
    },
    {
      color: 'zinc',
      bordered: true,
      className: ['border-zinc-200'],
    },
  ],
});

const body = cva(['text-sm'], {
  variants: {
    size: {
      sm: ['px-4', 'pb-4'],
      base: ['px-5', 'pb-5'],
      md: ['px-6', 'pb-6'],
      lg: ['px-7', 'pb-7'],
    },
    withDivider: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      size: 'sm',
      withDivider: true,
      className: ['py-3'],
    },
    {
      size: 'base',
      withDivider: true,
      className: ['py-4'],
    },
    {
      size: 'md',
      withDivider: true,
      className: ['py-5'],
    },
    {
      size: 'lg',
      withDivider: true,
      className: ['py-6'],
    },
  ],
});

const header = cva(['flex', 'flex-row', 'justify-between', 'items-center', 'font-medium', 'text-lg'], {
  variants: {
    size: {
      sm: ['py-2', 'px-4'],
      base: ['py-3', 'px-5'],
      md: ['py-4', 'px-6'],
      lg: ['py-5', 'px-7'],
    },
    radius: {
      none: ['rounded-t-none'],
      sm: ['rounded-t-sm'],
      base: ['rounded-t'],
      md: ['rounded-t-md'],
      lg: ['rounded-t-lg'],
    },
  },
});

const footer = cva(['flex', 'items-center', 'text-sm'], {
  variants: {
    size: {
      sm: ['p-4'],
      base: ['p-5'],
      md: ['p-6'],
      lg: ['p-7'],
    },
    radius: {
      none: ['rounded-b-none'],
      sm: ['rounded-b-sm'],
      base: ['rounded-b'],
      md: ['rounded-b-md'],
      lg: ['rounded-b-lg'],
    },
  },
});

const image = cva(['flex', 'flex-row', 'items-center', 'justify-center'], {
  variants: {
    radius: {
      none: ['rounded-t-none'],
      sm: ['rounded-t-sm'],
      base: ['rounded-t'],
      md: ['rounded-t-md'],
      lg: ['rounded-t-lg'],
    },
  },
});

const icon = cva(['flex', 'items-center', 'h-8', 'w-8'], {
  variants: {
    size: {
      sm: ['m-4', 'mb-0'],
      base: ['m-5', 'mb-0'],
      md: ['m-6', 'mb-0'],
      lg: ['m-7', 'mb-0'],
    },
  },
});

const cardStyles = {
  base,
  body,
  footer,
  header,
  image,
  icon
};

export { cardStyles };
