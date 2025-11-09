import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Ruby } from '../Ruby';

describe('Ruby', () => {
  test('renders ruby element', () => {
    const { container } = render(<Ruby>Test content</Ruby>);
    const element = container.querySelector('ruby');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Ruby ref={ref}>Test</Ruby>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('ruby');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Ruby className="test-class" id="test-id" data-testid="test">
        Content
      </Ruby>
    );
    const element = container.querySelector('ruby');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders ruby with annotations', () => {
    const { container } = render(
      <Ruby>
        漢<rt>kan</rt>
        字<rt>ji</rt>
      </Ruby>
    );
    const element = container.querySelector('ruby');
    const rt = element?.querySelector('rt');
    expect(rt).toBeTruthy();
  });
});
