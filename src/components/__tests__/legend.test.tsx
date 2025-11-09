import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Legend } from '../Legend';

describe('Legend', () => {
  test('renders legend element', () => {
    const { container } = render(<Legend>Test content</Legend>);
    const element = container.querySelector('legend');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Legend ref={ref}>Test</Legend>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('legend');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Legend className="test-class" id="test-id" data-testid="test">
        Content
      </Legend>
    );
    const element = container.querySelector('legend');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders legend as fieldset caption', () => {
    const { container } = render(<Legend>Contact Details</Legend>);
    const element = container.querySelector('legend');
    expect(element?.textContent).toBe('Contact Details');
  });
});
