import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Noscript } from '../Noscript';

describe('Noscript', () => {
  test('renders noscript element', () => {
    const { container } = render(<Noscript>Test content</Noscript>);
    const element = container.querySelector('noscript');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Noscript ref={ref}>Test</Noscript>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('noscript');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Noscript className="test-class" id="test-id" data-testid="test">
        Content
      </Noscript>
    );
    const element = container.querySelector('noscript');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders noscript with fallback content', () => {
    const { container } = render(<Noscript>JavaScript is required</Noscript>);
    const element = container.querySelector('noscript');
    expect(element?.textContent).toBe('JavaScript is required');
  });
});
