import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Mark } from '../Mark';

describe('Mark', () => {
  test('renders mark element', () => {
    const { container } = render(<Mark>Test content</Mark>);
    const element = container.querySelector('mark');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Mark ref={ref}>Test</Mark>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('mark');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Mark className="test-class" id="test-id" data-testid="test">
        Content
      </Mark>
    );
    const element = container.querySelector('mark');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders mark with highlighted text', () => {
    const { container } = render(<Mark>highlighted text</Mark>);
    const element = container.querySelector('mark');
    expect(element?.textContent).toBe('highlighted text');
  });
});
