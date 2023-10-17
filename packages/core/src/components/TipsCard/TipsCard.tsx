import { TipsCardProps } from '@components/TipsCard/TipsCard.types';
import { useComponentTheme } from '@theme/theme.context';
import { twMerge } from 'tailwind-merge';
import { Text } from '../..';

const TipsCard = (props: TipsCardProps) => {
  const theme = useComponentTheme('TipsCard');
  const {
    logo = '/icons/shield.svg',
    title = 'Security tips',
    description = '',
  } = props;
  const classes = twMerge(theme({}));

  return (
    <div className={classes}>
      {logo && logo !== '' && (
        <div className="w-[12%] pr-3 max-md:w-[25%]">
          <img src={logo} alt="tips-card-icon" height="100%" width="100%" />
        </div>
      )}
      <div className="flex flex-col">
        <Text size="sm" weight="bold" className="text-primary-900 mt-1">
          {title}
        </Text>
        <Text size="sm" className="w-4/5 max-md:w-full">
          {description}
        </Text>
      </div>
    </div>
  );
};

TipsCard.displayName = 'TipsCard';

export default TipsCard;
