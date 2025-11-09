import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Summary } from '../Summary';

describe('Summary', () => {
  test('renders summary element', () => {
    const { container } = render(<Summary>Test content</Summary>);
    const element = container.querySelector('summary');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Summary ref={ref}>Test</Summary>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('summary');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Summary className="test-class" id="test-id" data-testid="test">
        Content
      </Summary>
    );
    const element = container.querySelector('summary');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders summary as details heading', () => {
    const { container } = render(<Summary>Show more</Summary>);
    const element = container.querySelector('summary');
    expect(element?.textContent).toBe('Show more');
  });
});
