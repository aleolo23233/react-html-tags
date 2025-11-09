import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Strong } from '../Strong';

describe('Strong', () => {
  test('renders strong element', () => {
    const { container } = render(<Strong>Test content</Strong>);
    const element = container.querySelector('strong');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Strong ref={ref}>Test</Strong>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('strong');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Strong className="test-class" id="test-id" data-testid="test">
        Content
      </Strong>
    );
    const element = container.querySelector('strong');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders strong with important text', () => {
    const { container } = render(<Strong>Important notice</Strong>);
    const element = container.querySelector('strong');
    expect(element?.textContent).toBe('Important notice');
  });
});
