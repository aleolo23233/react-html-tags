import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { Bdi } from '../Bdi';

describe('Bdi', () => {
  test('renders bdi element', () => {
    const { container } = render(<Bdi>Test content</Bdi>);
    const element = container.querySelector('bdi');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<Bdi ref={ref}>Test</Bdi>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('bdi');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <Bdi className="test-class" id="test-id" data-testid="test">
        Content
      </Bdi>
    );
    const element = container.querySelector('bdi');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders bdi with isolated text', () => {
    const { container } = render(<Bdi>مرحبا</Bdi>);
    const element = container.querySelector('bdi');
    expect(element?.textContent).toBe('مرحبا');
  });
});
