import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Figcaption } from '../Figcaption';

describe('Figcaption', () => {
  test('renders figcaption element', () => {
    const { container } = render(<Figcaption>Test content</Figcaption>);
    const element = container.querySelector('figcaption');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Figcaption ref={ref}>Test</Figcaption>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('figcaption');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Figcaption className="test-class" id="test-id" data-testid="test">
        Content
      </Figcaption>
    );
    const element = container.querySelector('figcaption');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders figcaption as figure caption', () => {
    const { container } = render(<Figcaption>Image caption text</Figcaption>);
    const element = container.querySelector('figcaption');
    expect(element?.textContent).toBe('Image caption text');
  });
});
