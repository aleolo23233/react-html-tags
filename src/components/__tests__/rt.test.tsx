import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Rt } from '../Rt';

describe('Rt', () => {
  test('renders rt element', () => {
    const { container } = render(<Rt>Test content</Rt>);
    const element = container.querySelector('rt');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Rt ref={ref}>Test</Rt>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('rt');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Rt className="test-class" id="test-id" data-testid="test">
        Content
      </Rt>
    );
    const element = container.querySelector('rt');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders rt as ruby annotation', () => {
    const { container } = render(<Rt>kan</Rt>);
    const element = container.querySelector('rt');
    expect(element?.textContent).toBe('kan');
  });
});
