import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Picture } from '../Picture';

describe('Picture', () => {
  test('renders picture element', () => {
    const { container } = render(<Picture>Test content</Picture>);
    const element = container.querySelector('picture');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Picture ref={ref}>Test</Picture>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('picture');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Picture className="test-class" id="test-id" data-testid="test">
        Content
      </Picture>
    );
    const element = container.querySelector('picture');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders picture with source and img', () => {
    const { container } = render(
      <Picture>
        <source srcSet="/wide.jpg" media="(min-width: 800px)" />
        <img src="/narrow.jpg" alt="Responsive" />
      </Picture>
    );
    const element = container.querySelector('picture');
    const img = element?.querySelector('img');
    expect(img).toBeTruthy();
  });
});
