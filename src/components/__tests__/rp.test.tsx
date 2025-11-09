import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Rp } from '../Rp';

describe('Rp', () => {
  test('renders rp element', () => {
    const { container } = render(<Rp>Test content</Rp>);
    const element = container.querySelector('rp');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Rp ref={ref}>Test</Rp>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('rp');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Rp className="test-class" id="test-id" data-testid="test">
        Content
      </Rp>
    );
    const element = container.querySelector('rp');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders rp as ruby fallback', () => {
    const { container } = render(<Rp>(</Rp>);
    const element = container.querySelector('rp');
    expect(element?.textContent).toBe('(');
  });
});
