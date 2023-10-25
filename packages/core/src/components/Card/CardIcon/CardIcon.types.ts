import {
  ComponentPropsWithRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';

export interface CardIconProps extends ComponentPropsWithRef<'div'> {
  src: string;
  alt?: string;
}

export type CardIconComponent = ForwardRefExoticComponent<
  PropsWithoutRef<CardIconProps> & RefAttributes<HTMLDivElement>
> & {
  displayName?: string;
};
