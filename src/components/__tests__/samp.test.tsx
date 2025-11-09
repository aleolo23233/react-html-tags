import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Samp } from '../Samp';

describe('Samp', () => {
  test('renders samp element', () => {
    const { container } = render(<Samp>Test content</Samp>);
    const element = container.querySelector('samp');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Samp ref={ref}>Test</Samp>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('samp');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Samp className="test-class" id="test-id" data-testid="test">
        Content
      </Samp>
    );
    const element = container.querySelector('samp');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders samp with program output', () => {
    const { container } = render(<Samp>Error: File not found</Samp>);
    const element = container.querySelector('samp');
    expect(element?.textContent).toBe('Error: File not found');
  });
});
