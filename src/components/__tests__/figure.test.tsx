import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Figure } from '../Figure';

describe('Figure', () => {
  test('renders figure element', () => {
    const { container } = render(<Figure>Test content</Figure>);
    const element = container.querySelector('figure');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Figure ref={ref}>Test</Figure>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('figure');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Figure className="test-class" id="test-id" data-testid="test">
        Content
      </Figure>
    );
    const element = container.querySelector('figure');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders figure with figcaption', () => {
    const { container } = render(
      <Figure>
        <img src="/chart.png" alt="Sales chart" />
        <figcaption>Figure 1: Annual Sales</figcaption>
      </Figure>
    );
    const element = container.querySelector('figure');
    const caption = element?.querySelector('figcaption');
    expect(caption?.textContent).toBe('Figure 1: Annual Sales');
  });
});
