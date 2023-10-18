import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { TipsCard } from '.';

describe('TipsCard', () => {

  const mockProps = {
    title: "Test Title",
    description: "Test Description"
  }

  it('should render tips card component with provided props', () => {
    render(<TipsCard {...mockProps}/>);
  });

  it('should render tips card component if logo is passed', () => {
    render(<TipsCard {...mockProps} logo="test.jpeg" />);
  });
});
