import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Sub } from '../Sub';

describe('Sub', () => {
  test('renders sub element', () => {
    const { container } = render(<Sub>Test content</Sub>);
    const element = container.querySelector('sub');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Sub ref={ref}>Test</Sub>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('sub');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Sub className="test-class" id="test-id" data-testid="test">
        Content
      </Sub>
    );
    const element = container.querySelector('sub');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders sub with subscript', () => {
    const { container } = render(<Sub>2</Sub>);
    const element = container.querySelector('sub');
    expect(element?.textContent).toBe('2');
  });
});
