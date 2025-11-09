import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { H5 } from '../H5';

describe('H5', () => {
  test('renders h5 element', () => {
    const { container } = render(<H5>Test content</H5>);
    const element = container.querySelector('h5');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<H5 ref={ref}>Test</H5>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('h5');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <H5 className="test-class" id="test-id" data-testid="test">
        Content
      </H5>
    );
    const element = container.querySelector('h5');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders h5 heading', () => {
    const { container } = render(<H5>Level 5 Heading</H5>);
    const element = container.querySelector('h5');
    expect(element?.textContent).toBe('Level 5 Heading');
  });
});
