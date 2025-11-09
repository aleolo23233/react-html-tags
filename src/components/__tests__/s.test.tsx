import { describe, test, expect } from 'bun:test';
import * as React from 'react';
import { render } from '@testing-library/react';
import { S } from '../S';

describe('S', () => {
  test('renders s element', () => {
    const { container } = render(<S>Test content</S>);
    const element = container.querySelector('s');
    expect(element).toBeTruthy();
    expect(element?.textContent).toBe('Test content');
  });

  test('forwards ref correctly', () => {
    const ref = { current: null as any };
    render(<S ref={ref}>Test</S>);
    expect(ref.current).toBeTruthy();
    expect(ref.current?.tagName.toLowerCase()).toBe('s');
  });

  test('spreads props correctly', () => {
    const { container } = render(
      <S className="test-class" id="test-id" data-testid="test">
        Content
      </S>
    );
    const element = container.querySelector('s');
    expect(element?.className).toBe('test-class');
    expect(element?.id).toBe('test-id');
    expect(element?.getAttribute('data-testid')).toBe('test');
  });

  test('renders s with strikethrough text', () => {
    const { container } = render(<S>strikethrough text</S>);
    const element = container.querySelector('s');
    expect(element?.textContent).toBe('strikethrough text');
  });
});
