import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { B } from '../B';

describe('B', () => {
  test('renders b element', () => {
    const { container } = render(<B>Test content</B>);
    const element = container.querySelector('b');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<B ref={ref}>Test</B>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('b');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <B className="test-class" id="test-id" data-testid="test">
        Content
      </B>
    );
    const element = container.querySelector('b');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders b with bold text', () => {
    const { container } = render(<B>bold text</B>);
    const element = container.querySelector('b');
    expect(element?.textContent).toBe('bold text');
  });
});
