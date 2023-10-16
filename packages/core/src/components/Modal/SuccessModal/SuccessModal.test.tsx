import { render, screen, fireEvent } from '@testing-library/react';
import { SuccessModal } from './SuccessModal';
import { describe, it, vi, beforeAll, afterAll } from 'vitest';

describe('SuccessModal Component Test', () => {
  beforeAll(() => {
    window.KeyframeEffect = vi.fn() as any;
    window.Animation = class {
      constructor() {
        return {
          play: vi.fn(),
        };
      }
    } as any;
  });

  // Clean up the mock after the tests
  afterAll(() => {
    vi.clearAllMocks();
  });

  const mockProps = {
    open: false,
    headerText: 'Success!',
    description: 'This is a success message.',
    buttonText: 'OK',
    onButtonClick: vi.fn(),
  };

  it('renders the modal with provided props if it is set to open', () => {
    render(<SuccessModal {...mockProps} open={true} />);

    expect(screen.getByText(mockProps.headerText)).toBeTruthy();
    expect(screen.getByText(mockProps.description)).toBeTruthy();
    expect(screen.getByText(mockProps.buttonText)).toBeTruthy();
  });

  it('calls the onButtonClick handler when the button is clicked', () => {
    render(<SuccessModal {...mockProps} open={true} />);
    const button = screen.getByText('OK');
    fireEvent.click(button);

    expect(mockProps.onButtonClick).toHaveBeenCalled();
  });
});
