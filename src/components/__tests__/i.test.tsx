import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { I } from '../I';

describe('I', () => {
  test('renders i element', () => {
    const { container } = render(<I>Test content</I>);
    const element = container.querySelector('i');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<I ref={ref}>Test</I>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('i');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <I className="test-class" id="test-id" data-testid="test">
        Content
      </I>
    );
    const element = container.querySelector('i');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders i with italic text', () => {
    const { container } = render(<I>italic text</I>);
    const element = container.querySelector('i');
    expect(element?.textContent).toBe('italic text');
  });
});
