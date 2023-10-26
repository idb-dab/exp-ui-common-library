import { useCardContext } from '@components/Card/Card.context';
import { CardIconComponent, CardIconProps } from '@components/Card/CardIcon/CardIcon.types';
import { Image } from '@components/Image';
import { useComponentTheme } from '@theme/theme.context';
import { usePropId } from '@utils/usePropId';
import { forwardRef, Ref } from 'react';

const CardIcon: CardIconComponent = forwardRef<HTMLDivElement, CardIconProps>(
  (props: CardIconProps, ref?: Ref<HTMLDivElement>) => {
    const theme = useComponentTheme('Card');
    const { children, src, alt = '', className = '', ...additionalProps } = props;
    const { size } = useCardContext();
    const id = usePropId(props.id);
    const classes = theme.icon({ size });

    return <Image id={id} ref={ref} className={classes} src={src} alt={alt} {...additionalProps} />;
  }
);

CardIcon.displayName = 'CardIcon';

export { CardIcon };
