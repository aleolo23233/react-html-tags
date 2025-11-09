import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { H4 } from '../H4';

describe('H4', () => {
  test('renders h4 element', () => {
    const { container } = render(<H4>Test content</H4>);
    const element = container.querySelector('h4');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<H4 ref={ref}>Test</H4>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('h4');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <H4 className="test-class" id="test-id" data-testid="test">
        Content
      </H4>
    );
    const element = container.querySelector('h4');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders h4 heading', () => {
    const { container } = render(<H4>Level 4 Heading</H4>);
    const element = container.querySelector('h4');
    expect(element?.textContent).toBe('Level 4 Heading');
  });
});
