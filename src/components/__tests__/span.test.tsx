import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Span } from '../Span';

describe('Span', () => {
  test('renders span element', () => {
    const { container } = render(<Span>Test content</Span>);
    const element = container.querySelector('span');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Span ref={ref}>Test</Span>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('span');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Span className="test-class" id="test-id" data-testid="test">
        Content
      </Span>
    );
    const element = container.querySelector('span');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders span as inline container', () => {
    const { container } = render(<Span>Inline text</Span>);
    const element = container.querySelector('span');
    expect(element?.textContent).toBe('Inline text');
  });
});
