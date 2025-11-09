import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Em } from '../Em';

describe('Em', () => {
  test('renders em element', () => {
    const { container } = render(<Em>Test content</Em>);
    const element = container.querySelector('em');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Em ref={ref}>Test</Em>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('em');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Em className="test-class" id="test-id" data-testid="test">
        Content
      </Em>
    );
    const element = container.querySelector('em');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders em with emphasized text', () => {
    const { container } = render(<Em>emphasized text</Em>);
    const element = container.querySelector('em');
    expect(element?.textContent).toBe('emphasized text');
  });
});
