import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { H6 } from '../H6';

describe('H6', () => {
  test('renders h6 element', () => {
    const { container } = render(<H6>Test content</H6>);
    const element = container.querySelector('h6');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<H6 ref={ref}>Test</H6>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('h6');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <H6 className="test-class" id="test-id" data-testid="test">
        Content
      </H6>
    );
    const element = container.querySelector('h6');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders h6 heading', () => {
    const { container } = render(<H6>Level 6 Heading</H6>);
    const element = container.querySelector('h6');
    expect(element?.textContent).toBe('Level 6 Heading');
  });
});
