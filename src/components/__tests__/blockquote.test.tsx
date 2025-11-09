import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Blockquote } from '../Blockquote';

describe('Blockquote', () => {
  test('renders blockquote element', () => {
    const { container } = render(<Blockquote>Test content</Blockquote>);
    const element = container.querySelector('blockquote');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Blockquote ref={ref}>Test</Blockquote>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('blockquote');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Blockquote className="test-class" id="test-id" data-testid="test">
        Content
      </Blockquote>
    );
    const element = container.querySelector('blockquote');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders blockquote with quote', () => {
    const { container } = render(<Blockquote cite="https://example.com">This is a quote</Blockquote>);
    const element = container.querySelector('blockquote') as HTMLQuoteElement;
    expect(element?.textContent).toBe('This is a quote');
    expect(element?.getAttribute('cite')).toBe('https://example.com');
  });
});
