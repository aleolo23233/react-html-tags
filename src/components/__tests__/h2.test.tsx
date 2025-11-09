import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { H2 } from '../H2';

describe('H2', () => {
  test('renders h2 element', () => {
    const { container } = render(<H2>Test content</H2>);
    const element = container.querySelector('h2');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<H2 ref={ref}>Test</H2>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('h2');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <H2 className="test-class" id="test-id" data-testid="test">
        Content
      </H2>
    );
    const element = container.querySelector('h2');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders h2 as section heading', () => {
    const { container } = render(<H2>Section Title</H2>);
    const element = container.querySelector('h2');
    expect(element?.textContent).toBe('Section Title');
  });
});
