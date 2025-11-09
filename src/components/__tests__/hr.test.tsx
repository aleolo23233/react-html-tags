import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Hr } from '../Hr';

describe('Hr', () => {
  test('renders hr element', () => {
    const { container } = render(<Hr />);
    const element = container.querySelector('hr');
    expect(element).toBeTruthy();
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Hr ref={ref} />);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('hr');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Hr className="test-class" id="test-id" data-testid="test" />
    );
    const element = container.querySelector('hr');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders hr as thematic break', () => {
    const { container } = render(<Hr />);
    const element = container.querySelector('hr');
    expect(element).toBeTruthy();
  });
});
