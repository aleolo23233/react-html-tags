import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Output } from '../Output';

describe('Output', () => {
  test('renders output element', () => {
    const { container } = render(<Output>Test content</Output>);
    const element = container.querySelector('output');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Output ref={ref}>Test</Output>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('output');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Output className="test-class" id="test-id" data-testid="test">
        Content
      </Output>
    );
    const element = container.querySelector('output');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders output with calculation result', () => {
    const { container } = render(<Output htmlFor="a b">100</Output>);
    const element = container.querySelector('output') as HTMLOutputElement;
    expect(element?.textContent).toBe('100');
    expect(element?.htmlFor).toBe('a b');
  });

  test('renders output with name attribute', () => {
    const { container } = render(<Output name="result">42</Output>);
    const element = container.querySelector('output') as HTMLOutputElement;
    expect(element?.name).toBe('result');
  });
});
