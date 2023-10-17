import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { TipsCard } from '.';

describe('TipsCard', () => {
  it('should render tips card component with default values', () => {
    render(<TipsCard />);
  });

  it('should render tips card component if logo is passed', () => {
    render(<TipsCard logo="test.jpeg" />);
  });
});
