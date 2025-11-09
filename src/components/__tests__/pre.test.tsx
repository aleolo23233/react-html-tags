import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Pre } from '../Pre';

describe('Pre', () => {
  test('renders pre element', () => {
    const { container } = render(<Pre>Test content</Pre>);
    const element = container.querySelector('pre');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Pre ref={ref}>Test</Pre>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('pre');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Pre className="test-class" id="test-id" data-testid="test">
        Content
      </Pre>
    );
    const element = container.querySelector('pre');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders pre with preformatted text', () => {
    const { container } = render(<Pre>  Line 1
  Line 2
  Line 3</Pre>);
    const element = container.querySelector('pre');
    expect(element?.textContent).toContain('Line 1');
  });
});
