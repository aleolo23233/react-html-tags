import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Cite } from '../Cite';

describe('Cite', () => {
  test('renders cite element', () => {
    const { container } = render(<Cite>Test content</Cite>);
    const element = container.querySelector('cite');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Cite ref={ref}>Test</Cite>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('cite');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Cite className="test-class" id="test-id" data-testid="test">
        Content
      </Cite>
    );
    const element = container.querySelector('cite');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders cite with work title', () => {
    const { container } = render(<Cite>The Great Gatsby</Cite>);
    const element = container.querySelector('cite');
    expect(element?.textContent).toBe('The Great Gatsby');
  });
});
