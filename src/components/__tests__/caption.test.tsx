import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Caption } from '../Caption';

describe('Caption', () => {
  test('renders caption element', () => {
    const { container } = render(<table><Caption>Test content</Caption></table>);
    const element = container.querySelector('caption');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Caption ref={ref}>Test</Caption>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('caption');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Caption className="test-class" id="test-id" data-testid="test">
        Content
      </Caption>
    );
    const element = container.querySelector('caption');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders caption as table caption', () => {
    const { container } = render(<Caption>Employee List</Caption>);
    const element = container.querySelector('caption');
    expect(element?.textContent).toBe('Employee List');
  });
});
