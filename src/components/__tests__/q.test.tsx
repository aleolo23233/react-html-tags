import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Q } from '../Q';

describe('Q', () => {
  test('renders q element', () => {
    const { container } = render(<Q>Test content</Q>);
    const element = container.querySelector('q');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Q ref={ref}>Test</Q>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('q');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Q className="test-class" id="test-id" data-testid="test">
        Content
      </Q>
    );
    const element = container.querySelector('q');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders q with inline quote', () => {
    const { container } = render(<Q>inline quote</Q>);
    const element = container.querySelector('q');
    expect(element?.textContent).toBe('inline quote');
  });

  test('renders q with cite attribute', () => {
    const { container } = render(<Q cite="https://example.com/quote">quoted text</Q>);
    const element = container.querySelector('q') as HTMLQuoteElement;
    expect(element?.cite).toBe('https://example.com/quote');
  });
});
