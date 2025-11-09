import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Time } from '../Time';

describe('Time', () => {
  test('renders time element', () => {
    const { container } = render(<Time>Test content</Time>);
    const element = container.querySelector('time');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Time ref={ref}>Test</Time>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('time');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Time className="test-class" id="test-id" data-testid="test">
        Content
      </Time>
    );
    const element = container.querySelector('time');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders time with datetime', () => {
    const { container } = render(<Time dateTime="2024-01-15">January 15, 2024</Time>);
    const element = container.querySelector('time') as HTMLTimeElement;
    expect(element?.dateTime).toBe('2024-01-15');
    expect(element?.textContent).toBe('January 15, 2024');
  });
});
