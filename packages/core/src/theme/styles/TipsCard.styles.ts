import { cva } from 'class-variance-authority';

const base = cva(
  [
    'bg-primary-500',
    'border-primary-900',
    'flex',
    'rounded-[10px]',
    'border-b-4',
    'border-solid',
    'p-4',
  ],
  {
    variants: {},
  }
);

const TipsCardPropsStyles = {
  base
};

export { TipsCardPropsStyles };
