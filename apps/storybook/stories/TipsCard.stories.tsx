import {
  TipsCard,
  TipsCardProps,
} from '@idb-dab/ui-core';
import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { EnhancedView } from '../components/View';

const meta: Meta = {
  title: 'Components/TipsCard',
  component: TipsCard,
  argTypes: {
    
  },
  parameters: {
    
  },
};

export default meta;

const DefaultTemplate: StoryFn<TipsCardProps> = (args) => {
  return (
    <EnhancedView prop="Default">
      <TipsCard {...args} />
    </EnhancedView>
  );
};

export const Default = DefaultTemplate.bind({});
