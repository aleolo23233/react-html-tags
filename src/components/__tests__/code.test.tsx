import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Code } from '../Code';

describe('Code', () => {
  test('renders code element', () => {
    const { container } = render(<Code>Test content</Code>);
    const element = container.querySelector('code');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Code ref={ref}>Test</Code>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('code');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Code className="test-class" id="test-id" data-testid="test">
        Content
      </Code>
    );
    const element = container.querySelector('code');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders code with code snippet', () => {
    const { container } = render(<Code>const x = 10;</Code>);
    const element = container.querySelector('code');
    expect(element?.textContent).toBe('const x = 10;');
  });
});
