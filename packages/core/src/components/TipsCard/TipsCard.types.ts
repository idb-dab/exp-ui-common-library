import { ComponentPropsWithRef, ForwardRefExoticComponent } from 'react';

export interface TipsCardProps extends ComponentPropsWithRef<'div'> {
  logo?: string;
  title?: string;
  description?: string;
}

export type TipsCardComponent = ForwardRefExoticComponent<TipsCardProps> & {
  displayName?: string;
};
