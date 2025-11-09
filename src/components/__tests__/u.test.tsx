import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { U } from '../U';

describe('U', () => {
  test('renders u element', () => {
    const { container } = render(<U>Test content</U>);
    const element = container.querySelector('u');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<U ref={ref}>Test</U>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('u');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <U className="test-class" id="test-id" data-testid="test">
        Content
      </U>
    );
    const element = container.querySelector('u');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders u with underlined text', () => {
    const { container } = render(<U>underlined text</U>);
    const element = container.querySelector('u');
    expect(element?.textContent).toBe('underlined text');
  });
});
