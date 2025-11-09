import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { H1 } from '../H1';

describe('H1', () => {
  test('renders h1 element', () => {
    const { container } = render(<H1>Test content</H1>);
    const element = container.querySelector('h1');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<H1 ref={ref}>Test</H1>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('h1');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <H1 className="test-class" id="test-id" data-testid="test">
        Content
      </H1>
    );
    const element = container.querySelector('h1');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders h1 as main heading', () => {
    const { container } = render(<H1>Main Page Title</H1>);
    const element = container.querySelector('h1');
    expect(element?.textContent).toBe('Main Page Title');
  });
});
